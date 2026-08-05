import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  assessDuplicateRisk, emptyBriefRegistry, generateBrief, processTopicQueue,
  recommendInternalLinks, validateAgainstSchema, validateApprovedTopic,
} from "./generate-article-briefs.mjs";

const schema=JSON.parse(await readFile(new URL("../blog/data/article-brief-schema.json",import.meta.url),"utf8"));
const config=JSON.parse(await readFile(new URL("../blog/data/auto-blogger-config.json",import.meta.url),"utf8"));
const categories=Object.keys({
 "Paid Media":1,"Social Media Strategy":1,"Ecommerce & CRO":1,"Tracking & Analytics":1,"Creative Strategy":1,
 "Marketing Automation":1,"Content Marketing":1,SEO:1,"Email Marketing":1,"Business Growth Systems":1
});
const published=[
 {slug:"paid-media-budget-framework",title:"A Paid Media Budget Framework",excerpt:"Plan objectives, constraints, channels, and measurement.",category:"Paid Media",status:"published",url:"./paid-media-budget-framework/",searchIntent:"informational",coverConcept:"budget allocation map",diagramConcept:"measurement layers"},
 {slug:"social-audience-research",title:"A Social Audience Research Guide",excerpt:"Research audience questions and channel behavior.",category:"Social Media Strategy",status:"published",url:"./social-audience-research/",searchIntent:"informational"},
 {slug:"ga4-event-taxonomy",title:"How to Plan a GA4 Event Taxonomy",excerpt:"Define event names, parameters, validation, and governance.",category:"Tracking & Analytics",status:"published",url:"./ga4-event-taxonomy/",searchIntent:"problem-solving"},
 {slug:"conversion-friction-audit",title:"How to Audit Conversion Friction",excerpt:"Review product pages, checkout steps, evidence, and mobile friction.",category:"Ecommerce & CRO",status:"published",url:"./conversion-friction-audit/",searchIntent:"problem-solving"},
 {slug:"content-distribution-workflow",title:"A Content Distribution Workflow",excerpt:"Connect editorial assets with channels, owners, and review signals.",category:"Content Marketing",status:"published",url:"./content-distribution-workflow/",searchIntent:"informational"}
];
const topic=(overrides={})=>({
 topic_id:"topic-20260806-alpha1",proposed_title:"How to Design a Marketing Automation Maintenance Plan",
 primary_keyword:"automation maintenance plan",secondary_keywords:["workflow maintenance","automation governance"],
 search_intent:"problem-solving",target_audience:"Small marketing teams operating several connected workflows",
 category:"Marketing Automation",priority:"normal",content_type:"practical guide",
 business_relevance:"Helps teams keep automated workflows accurate, owned, and reviewable.",
 existing_topic_overlap_score:12,duplicate_risk_status:"not_checked",source_requirements:[],
 factual_risk_level:"low",proposed_internal_links:[],status:"approved_for_brief",
 batch_id:"batch-20260806-alpha",created_at:"2026-08-06T08:00:00.000Z",reviewed_at:"2026-08-06T09:00:00.000Z",approved_by:"Project Owner",...overrides
});

assert.deepEqual(validateApprovedTopic(topic(),new Set(categories)),[]);
assert.ok(validateApprovedTopic(topic({primary_keyword:""}),new Set(categories)).includes("missing_or_empty:primary_keyword"));
assert.ok(validateApprovedTopic(topic({category:"Unknown"}),new Set(categories)).includes("invalid_category"));
assert.equal(assessDuplicateRisk(topic({proposed_title:published[0].title}),published).status,"rejected_duplicate");
assert.equal(assessDuplicateRisk(topic({proposed_title:"Different wording",primary_keyword:"unique keyword"}),[{...published[0],slug:"different-wording"}]).status,"rejected_duplicate");
assert.equal(assessDuplicateRisk(topic({proposed_title:"How to Plan a GA4 Event Taxonomy",primary_keyword:"GA4 event taxonomy",category:"Tracking & Analytics",search_intent:"problem-solving"}),published).status,"rejected_duplicate");
assert.equal(assessDuplicateRisk(topic({existing_topic_overlap_score:70}),published).status,"review_required");

const brief=generateBrief(topic(),published,schema);
assert.deepEqual(validateAgainstSchema(brief,schema),[]);
assert.equal(brief.approval_state,"draft");
assert.equal(brief.proposed_internal_links.length,4);
assert.equal(new Set(brief.proposed_internal_links.map(x=>x.target_slug)).size,4);
assert.ok(brief.proposed_internal_links.every(x=>published.some(p=>p.status==="published"&&p.slug===x.target_slug)));
assert.equal(generateBrief(topic({factual_risk_level:"high"}),published,schema).approval_state,"manual_source_review_required");
assert.ok(generateBrief(topic({factual_risk_level:"high"}),published,schema).external_source_requirements.every(x=>x.source_type==="official documentation"));

const base={schema_version:1,entries:[topic()]};
const args={queue:base,existingRegistry:emptyBriefRegistry(),published,categories,schema,config};
const first=processTopicQueue(args),second=processTopicQueue(args);
assert.deepEqual(first,second,"unchanged input must produce deterministic output");
assert.equal(first.registry.total_briefs,1);
assert.equal(first.queue.entries[0].status,"brief_generated");
assert.throws(()=>processTopicQueue({...args,limit:11}),/maximum/);
const ignored=processTopicQueue({...args,queue:{schema_version:1,entries:[topic({status:"proposed"})]}});
assert.equal(ignored.registry.processing_summary.eligible_topics,0);
assert.equal(ignored.queue.entries[0].status,"proposed");
const duplicateIds=processTopicQueue({...args,queue:{schema_version:1,entries:[topic(),topic({proposed_title:"A separate title about workflow ownership"})]}});
assert.equal(duplicateIds.registry.processing_summary.validation_failures,2);
assert.ok(duplicateIds.queue.entries.every(x=>x.status==="rejected"));
const review=processTopicQueue({...args,queue:{schema_version:1,entries:[topic({existing_topic_overlap_score:70})]}});
assert.equal(review.registry.processing_summary.review_required_topics,1);
assert.equal(review.queue.entries[0].status,"under_review");

const protectedFiles=["../blog/data/posts.json","../blog/sitemap.xml","../blog/feed.xml","../blog/data/categories.json","../blog/data/featured-rotation.json"];
const before=await Promise.all(protectedFiles.map(file=>readFile(new URL(file,import.meta.url),"utf8")));
recommendInternalLinks(topic(),published);
const after=await Promise.all(protectedFiles.map(file=>readFile(new URL(file,import.meta.url),"utf8")));
assert.deepEqual(after,before,"pure generator tests must not mutate production files");

console.log(JSON.stringify({
 tests:"passed",schemaValidity:true,requiredFieldValidation:true,duplicateTopicIds:true,
 exactTitleCollision:true,exactSlugCollision:true,cannibalization:true,moderateOverlap:true,
 invalidCategory:true,invalidStatusIgnored:true,batchLimit:true,determinism:true,
 internalLinks:true,factualRisk:true,highRiskManualReview:true,productionMutations:0
},null,2));
