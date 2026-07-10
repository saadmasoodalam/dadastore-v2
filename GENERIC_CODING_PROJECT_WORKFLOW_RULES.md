# Generic Coding Project Workflow Rules

## Purpose

This workflow defines a repeatable staged system for building any coding project with an AI assistant, a code agent, or a human developer. It is designed to keep progress controlled, testable, reversible, and easy to continue across long chats or multiple sessions.

The workflow is intentionally generic. It can be used for apps, APIs, libraries, automation tools, AI systems, websites, infrastructure projects, or internal prototypes.

---

## Core Law

Build in small units.

Each unit must have a clear scope, expected files, authority sources, constraints, verification method, and commit message.

Do not mix planning, implementation, testing, refactoring, and release unless the unit explicitly allows it.

---

## Operating Roles

### Project Owner

The project owner decides direction, approves scope, runs commands, reviews proposed changes, and confirms when a unit is complete.

### Assistant / Planner

The assistant breaks work into staged units, writes prompts for the coding agent, reviews results, and gives commit/push instructions.

### Coding Agent / Developer

The coding agent or developer applies only the requested unit, shows proposed changes, runs requested tests, and reports results.

---

## Standard Unit Structure

Every work unit should follow this shape:

```text
Task: Unit <number><letter> — <short title>

Expected files:
- path/to/file.ext
- path/to/test_file.ext

Authority:
- docs/source_of_truth.md
- existing/module.py
- existing/tests.py

Goal:
<One clear goal.>

Status:
<Docs only / Code only / Tests only / Code and tests / Planning only>

Required behavior:
- requirement 1
- requirement 2
- requirement 3

Tests:
- test expectation 1
- test expectation 2
- test expectation 3

Constraints:
- Do not modify unrelated files.
- Do not add new behavior outside scope.
- Do not change public API unless explicitly requested.
- Do not remove existing tests.
- Do not bypass existing safety/validation boundaries.
- Show proposed changes only.
```

---

## Unit Types

### A. Planning Unit

Use when the next implementation step needs definition before code.

Rules:
- Docs only.
- No code.
- No tests unless explicitly requested.
- Must define next recommended unit.

Example:

```text
Unit 4A — Authentication Boundary Design
```

### B. Model Unit

Use when defining pure data structures, schemas, or types.

Rules:
- Model files and model tests only.
- No runtime wiring.
- No endpoints.
- No persistence unless explicitly requested.

Example:

```text
Unit 4B — User Session Models
```

### C. Pure Logic Unit

Use when adding isolated evaluators, mappers, validators, or helpers.

Rules:
- Pure logic and tests only.
- No endpoint wiring.
- No database writes.
- No hidden side effects.

Example:

```text
Unit 4C — Session Eligibility Evaluator
```

### D. Integration Test Unit

Use when proving existing components work together without changing production behavior.

Rules:
- Tests only unless a real defect appears.
- No new runtime behavior.
- No broad refactor.

Example:

```text
Unit 4D — Session Eligibility Integration Tests
```

### E. Wiring Unit

Use when connecting a previously tested component to runtime behavior.

Rules:
- Attach narrowly.
- Prefer one route, one service, or one feature at a time.
- Existing behavior must remain unchanged unless the unit explicitly changes it.
- Add guardrail tests.

Example:

```text
Unit 4E — Attach Session Check to Login Route
```

### F. Guardrail Unit

Use when verifying boundaries, safety, compatibility, non-regression, or non-exposure.

Rules:
- Mostly tests.
- Must prove what does not happen.

Example:

```text
Unit 4F — Session Boundary Guardrails
```

### G. Completion Checkpoint

Use after a group of related units is complete.

Rules:
- Docs only.
- Summarize completed stages.
- Record current capabilities.
- Record current boundaries.
- Record latest test result.
- Recommend next unit.

Example:

```text
Unit 4G — Authentication Boundary Completion Checkpoint
```

---

## Recommended Stage Pattern

For each major feature, use this sequence:

```text
A — Design / Plan
B — Models / Schema
C — Pure Logic / Evaluator / Mapper
D — Integration Tests
E — Narrow Runtime Wiring
F — Guardrails
G — Completion Checkpoint
```

Not every feature needs every stage, but skipping stages should be intentional.

---

## Commit Workflow

After each successful unit, use:

```powershell
git status --short
git add -A
git status --short
git diff --cached --name-only
git commit -m "<clear commit message>"
git push
```

Commit message rules:
- Use the unit outcome.
- Keep it short.
- Use active language.

Examples:

```text
Add session boundary design
Add session eligibility models
Add session eligibility evaluator
Attach session check to login route
Add session boundary guardrails
Add Unit 4 completion checkpoint
```

---

## Test Rules

### For docs-only units

Tests are optional unless the project requires docs validation.

The report should say:

```text
No tests run, since this was docs-only.
```

### For model or logic units

Run focused tests first, then the full suite if practical.

Report format:

```text
Focused: 12 passed
Full suite: 420 passed, 1 warning
```

### For runtime wiring units

Run:
- focused tests for the changed behavior
- related integration tests
- full suite

### If tests fail

Do not continue to the next unit.

Report:
- failing command
- failing test names
- exact error summary
- likely cause if known
- proposed fix scope

---

## Reporting Format After a Unit

When a unit is applied, report in this format:

```text
Implemented Unit <number><letter>.

Added:
- file/path.ext

Changed:
- file/path.ext

What is included:
- point 1
- point 2
- point 3

Verification:
- Focused: <result>
- Full suite: <result>

No <forbidden behavior> changes were made.
```

For docs-only:

```text
Added Unit <number><letter> docs:
- docs/file.md

It covers <summary>.

No tests run, since this was docs-only.
```

---

## Scope Control Rules

Every unit must explicitly say what is out of scope.

Common constraints:

```text
- Do not modify unrelated files.
- Do not add endpoints.
- Do not add middleware.
- Do not wire into main runtime.
- Do not change public response shape.
- Do not add persistence.
- Do not add external integrations.
- Do not add execution/action behavior.
- Do not remove existing tests.
- Show proposed changes only.
```

Adjust these for the project type.

---

## Boundary Language

Use boundary language to avoid accidental expansion.

Examples:

```text
Preview is not persistence.
Persistence is not activation.
Authentication is not authorization.
Authorization is not execution.
Eligibility is not persistence.
Planning is not implementation.
Trial is not production.
```

For any project, define similar laws early.

Examples:

```text
Validation is not saving.
Saving is not publishing.
Publishing is not approval.
Approval is not execution.
```

---

## Completion Checkpoint Template

Use this after each major phase:

```text
Task: Unit <number><letter> — <phase> completion checkpoint.

Expected file:
docs/UNIT_<number>_COMPLETION_CHECKPOINT.md

Goal:
Add completion checkpoint documentation only.

Required sections:

1. Title
2. Status
3. Purpose
4. Completed stages
5. Current capabilities
6. Current boundaries
7. Guardrails verified
8. Test record
9. Known limitations
10. Recommended next unit
11. Explicitly not next

Constraints:
- Docs only.
- Do not modify code/tests.
- Do not change runtime behavior.
- Show proposed changes only.
```

---

## Decision Document Template

Use this when choosing between implementation paths:

```text
Task: Unit <number><letter> — <decision title>.

Expected file:
docs/UNIT_<number>_<DECISION_TITLE>.md

Goal:
Decide whether to <option question>.

Required sections:

1. Title
2. Purpose
3. Core law
4. Current state
5. Decision options
6. Decision
7. Reason
8. Allowed next work
9. Disallowed next work
10. Required before proceeding
11. Recommended next unit
12. Test record

Constraints:
- Docs only.
- Do not implement.
- Show proposed changes only.
```

---

## Guardrail Test Checklist

For any sensitive feature, add tests proving:

```text
- default behavior remains unchanged
- disabled mode does nothing
- unauthorized/invalid input fails safely
- public response does not expose private internals
- no unexpected persistence occurs
- no external calls occur
- no execution/action occurs
- inputs are not mutated
- unrelated routes/features are unaffected
- forbidden imports are absent
```

Forbidden import checks are useful for preventing accidental coupling.

Example forbidden imports:

```text
FastAPI
app/main.py
RuntimeEngine
PersistenceService
audit builders
external API clients
middleware
action execution modules
```

Adapt to your project.

---

## Runtime Wiring Rule

Do not wire anything into runtime until these exist:

```text
1. Design document
2. Models or interfaces
3. Pure logic/helper
4. Focused tests
5. Integration tests
6. Guardrail tests
7. Explicit wiring plan
```

When wiring begins, attach to the smallest safe surface first:

```text
one endpoint
one command
one feature flag
one internal path
one test-only hook
```

---

## Trial / Release Readiness Rule

Before a trial, beta, or release, create artifacts before implementation.

Suggested artifacts:

```text
- README
- disclaimer or usage boundary
- allowed/excluded use cases
- sample input
- sample output
- operator checklist
- stop/pause checklist
- export/delete or rollback checklist
- known limitations
- metrics template
```

Trial/release laws:

```text
Trial is validation.
Trial is not production.
Release is not correctness proof.
User access is not permission for unsafe behavior.
```

---

## Chat Continuity Rule

For long projects, periodically create a continuity checkpoint containing:

```text
- project identity
- current branch
- latest completed unit
- latest test result
- current capabilities
- current boundaries
- next planned unit
- standard commit workflow
- protected/private internals
- public-safe language rules
```

This prevents chat lag and makes the project portable across sessions.

---

## Standard Assistant Response Pattern

After the user reports a completed unit, the assistant should provide:

1. Commit/push commands.
2. The next unit prompt.
3. No unnecessary explanation.

Example:

```text
Commit/push Unit 5C:

```powershell
git status --short
git add -A
git status --short
git diff --cached --name-only
git commit -m "Add payment eligibility evaluator"
git push
```

Next: Unit 5D — Payment Eligibility Integration Tests

<prompt>
```

---

## Anti-Patterns

Avoid:

```text
- building too many things in one unit
- adding runtime behavior before tests
- adding endpoints before models and logic exist
- mixing refactor with feature work
- changing public response shape without explicit approval
- treating docs as implementation
- treating tests as proof of product correctness
- letting trial planning expand into production scope
- adding execution/action behavior accidentally
```

---

## Project Startup Template

For a new project, begin with:

```text
Unit 1A — Project Boundary and Architecture Plan
Unit 1B — Core Models
Unit 1C — Core Evaluator/Service
Unit 1D — Core API or CLI Preview
Unit 1E — Persistence Boundary Design
Unit 1F — Public Safety/Output Boundary
Unit 1G — Unit 1 Completion Checkpoint
```

Then continue by feature area.

---

## Generic Next Unit Prompt Template

```text
Task: Unit <N><Letter> — <title>.

Expected files:
- <file 1>
- <file 2>

Authority:
- <source doc/module/test>

Goal:
<clear goal>

Status:
<Docs only / Code only / Tests only / Code and tests>

Required behavior:
- <requirement>
- <requirement>
- <requirement>

Tests:
- <test>
- <test>
- <test>

Constraints:
- Do not modify unrelated files.
- Do not change runtime behavior outside scope.
- Do not add endpoints unless explicitly requested.
- Do not persist unless explicitly requested.
- Do not execute external actions unless explicitly requested.
- Show proposed changes only.
```

---

## Final Rule

Move slowly enough that every step is understandable, testable, and reversible.

A project is not made safer by moving slower; it is made safer by making every step bounded.
