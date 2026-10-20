---
title: "LADA: Localization-Aware Distributed Alignment"
short: LADA                # optional short name, used for tags on People cards
summary: >-
  Making LLM guardrails robust, auditable and maintainable by finding where
  safety behavior lives inside the model and making it harder to break.
status: active            # active | past
years: 36 months
areas: [interpretability, robustness, privacy, evaluation]
order: 1
image:
people:
  - Stjepan Picek (PI)
  - Mario Brčić
  - Marko Čupić
  - Tomislav Hrkać
  - Zoran Kalafatić
  - Leonardo Jelenković
links:
  - label: Croatian Science Foundation
    url: https://hrzz.hr/en/
---

Large language models are deployed with guardrails that refuse harmful requests,
constrain risky actions in tool-using agents and keep generated code secure.
Recent work by our group shows that this behavior is often concentrated in a
small part of the model: a sparse set of neurons in dense models, or a handful
of experts and routing patterns in Mixture-of-Experts (MoE) models. Silencing
those components, pruning the model or fine-tuning it can switch the guardrails
off while the model otherwise keeps working normally.

LADA turns this weakness into a design target. Instead of only explaining why
guardrails fail, the project builds guardrails that stay stable under internal
perturbation, adaptation and privacy-preserving distributed training. Secure
code generation serves as a central test case alongside refusal of harmful
requests.

## Approach: Audit, Harden, Distribute, Verify

**Audit.** Develop attribution methods and metrics that find the neurons,
experts, routing patterns and circuits responsible for guardrail behavior in
dense and MoE models, and measure how concentrated and fragile they are.

**Harden.** Design targeted, parameter-efficient interventions that spread
guardrail behavior across more redundant internal structure, removing single
points of failure without hurting usefulness or causing over-refusal.

**Distribute.** Build a bi-level federated learning framework that keeps
guardrails intact when models are adapted on private, heterogeneous data,
with a decentralized extension based on exchanging sparse subnetworks.

**Verify.** Evaluate everything with a reproducible protocol that combines
internal perturbation tests, adaptive red teaming, prompt injection in dynamic
agent and tool-use environments, and comparisons against strong existing
defenses.

## Expected outcomes

The project will release open auditing tools for locating guardrails inside
LLMs, hardening methods that make them harder to disable, a reference
implementation of federated guardrail maintenance, and a benchmark and
evaluation protocol others can reuse. Non-sensitive code and benchmark
materials will be published openly; artifacts that could make attacks easier
will be released selectively.
