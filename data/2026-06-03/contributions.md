# Contribution Report

Generated: 2026-06-03  |  Data since: 2025-07-01

## Summary

### Q2 2026 (Apr–Jun 2026)

| Repo | PRs opened | PRs merged | Issues opened | Issues closed |
|------|----------:|----------:|-------------:|-------------:|
| AeneasVerif/aeneas | 13 | 6 | 8 | 4 |
| AeneasVerif/charon | 3 | 3 | 1 | 1 |
| leanprover/cslib | 2 | 0 | 0 | 0 |
| verus-lang/verus | 11 | 11 | 1 | 1 |
| **Total** | **29** | **20** | **10** | **6** |

### Q1 2026 (Jan–Mar 2026)

| Repo | PRs opened | PRs merged | Issues opened | Issues closed |
|------|----------:|----------:|-------------:|-------------:|
| AeneasVerif/aeneas | 9 | 8 | 8 | 6 |
| AeneasVerif/charon | 0 | 0 | 3 | 2 |
| verus-lang/verus | 21 | 18 | 12 | 9 |
| leanprover-community/mathlib4 | 3 | 3 | 1 | 1 |
| **Total** | **33** | **29** | **24** | **18** |

### Q4 2025 (Oct–Dec 2025)

| Repo | PRs opened | PRs merged | Issues opened | Issues closed |
|------|----------:|----------:|-------------:|-------------:|
| AeneasVerif/aeneas | 0 | 0 | 2 | 2 |
| AeneasVerif/charon | 0 | 0 | 2 | 2 |
| verus-lang/verus | 4 | 4 | 0 | 0 |
| **Total** | **4** | **4** | **4** | **4** |

## Q2 2026 (Apr–Jun 2026)

### AeneasVerif/aeneas

PRs: **13 opened** · 6 merged · 2 closed  |  Issues: **8 opened** · 4 closed

**Pull requests:**

- [#1019 fix: Correctly flag used and unused variables](https://github.com/AeneasVerif/aeneas/pull/1019) — mpenciak — merged
- [#997 fix: synthesize mvars in last do elem](https://github.com/AeneasVerif/aeneas/pull/997) — mpenciak — merged
- [#983 Update to Lean v4.30.0-rc2](https://github.com/AeneasVerif/aeneas/pull/983) — oliver-butterley — merged
- [#982 Update to Lean v4.29.1](https://github.com/AeneasVerif/aeneas/pull/982) — oliver-butterley — merged
- [#963 fix: `do` elab regressions](https://github.com/AeneasVerif/aeneas/pull/963) — mpenciak — merged
- [#918 feat: New `do` Elaborator](https://github.com/AeneasVerif/aeneas/pull/918) — mpenciak — merged
- [#1058 feat: Improve postcondition naming](https://github.com/AeneasVerif/aeneas/pull/1058) — mpenciak — open
- [#1054 fix: `step*?` trace generation in `inferPost`  branches](https://github.com/AeneasVerif/aeneas/pull/1054) — mpenciak — open
- [#1047 fix: Correctly destructure fvars based off shape of binding in step call](https://github.com/AeneasVerif/aeneas/pull/1047) — mpenciak — open
- [#1045 fix: allow unit binds](https://github.com/AeneasVerif/aeneas/pull/1045) — mpenciak — open
- [#1009 emit a manifest.json at translation](https://github.com/AeneasVerif/aeneas/pull/1009) — oliver-butterley — open
- [#981 Add release tag workflow for Lean updates.](https://github.com/AeneasVerif/aeneas/pull/981) — oliver-butterley — closed
- [#947 WIP: add many models extending the Aeneas standard library coverage](https://github.com/AeneasVerif/aeneas/pull/947) — oliver-butterley — closed

**Issues:**

- [#1051 ZeroablePrimitive trait gets duplicate parentClauses name when two supertraits are the same trait](https://github.com/AeneasVerif/aeneas/issues/1051) — oliver-butterley — open
- [#1046 FnOnce problem: `call_once` return type is `Result (closure state)` instead of `Result Unit`](https://github.com/AeneasVerif/aeneas/issues/1046) — oliver-butterley — open
- [#1043 Iterator trait impl generates `map :=` and `collect :=` fields](https://github.com/AeneasVerif/aeneas/issues/1043) — oliver-butterley — open
- [#920 scalar `Eq` generates `=` (Prop) instead of `==` (Bool) in Lean backend](https://github.com/AeneasVerif/aeneas/issues/920) — oliver-butterley — open
- [#1044 Tuple field assignment with opaque function generates `()` instead of second return value in loop body](https://github.com/AeneasVerif/aeneas/issues/1044) — oliver-butterley — closed
- [#1022 Regression with new do elaborator](https://github.com/AeneasVerif/aeneas/issues/1022) — oliver-butterley — closed
- [#903 `Ord` instance for local type placed in Funs.lean but referenced from Types.lean](https://github.com/AeneasVerif/aeneas/issues/903) — oliver-butterley — closed
- [#902 circular dependency between Types and TypesExternal](https://github.com/AeneasVerif/aeneas/issues/902) — oliver-butterley — closed

### AeneasVerif/charon

PRs: **3 opened** · 3 merged · 0 closed  |  Issues: **1 opened** · 1 closed

**Pull requests:**

- [#1104 feat: refactor Charon.toml to use Cargo.toml and add support for start_from, hide_marker_traits](https://github.com/AeneasVerif/charon/pull/1104) — oliver-butterley — merged
- [#1103 docs: clarify opacity semantics in what_charon_translates.md](https://github.com/AeneasVerif/charon/pull/1103) — oliver-butterley — merged
- [#1080 Docs: update `what_charon_translates.md`](https://github.com/AeneasVerif/charon/pull/1080) — oliver-butterley — merged

**Issues:**

- [#1079 Docs: add clarification to `what_charon_translates.md`](https://github.com/AeneasVerif/charon/issues/1079) — oliver-butterley — closed

### leanprover/cslib

PRs: **2 opened** · 0 merged · 2 closed  |  Issues: **0 opened** · 0 closed

**Pull requests:**

- [#473 feat(Protocols): Key exchange protocols and Diffie-Hellman](https://github.com/leanprover/cslib/pull/473) — ChristianoBraga — closed
- [#472 feat(Protocols): Sigma protocols and Schnorr identification](https://github.com/leanprover/cslib/pull/472) — ChristianoBraga — closed

### verus-lang/verus

PRs: **11 opened** · 11 merged · 0 closed  |  Issues: **1 opened** · 1 closed

**Pull requests:**

- [#2509 [rust_verify] fix: skip codegen when `--compile` is not set](https://github.com/verus-lang/verus/pull/2509) — mkovaxx — merged
- [#2494 [cargo-verus] feat: support forwarding verbosity settings to Cargo and Verus](https://github.com/verus-lang/verus/pull/2494) — mkovaxx — merged
- [#2493 misc: add settings for the Zed editor](https://github.com/verus-lang/verus/pull/2493) — mkovaxx — merged
- [#2490 [rust_verify_test] feat: use a temp dir as `target` dir to isolate `cargo` test runs](https://github.com/verus-lang/verus/pull/2490) — mkovaxx — merged
- [#2489 [cargo-verus] test: confirm expected behavior around package aliases](https://github.com/verus-lang/verus/pull/2489) — mkovaxx — merged
- [#2383 [cargo-verus] refactor: remove `fake-cargo` and update all tests](https://github.com/verus-lang/verus/pull/2383) — mkovaxx — merged
- [#2355 docs: document the `custom_err` attribute](https://github.com/verus-lang/verus/pull/2355) — mkovaxx — merged
- [#2351 refactor: rename `proof_note_custom_err` to `custom_err` for brevity](https://github.com/verus-lang/verus/pull/2351) — mkovaxx — merged
- [#2333 refactor: remove `custom_err` and `custom_req_err` attribute support](https://github.com/verus-lang/verus/pull/2333) — mkovaxx — merged
- [#2332 [cargo-verus] refactor: prepare to retire `fake-cargo`](https://github.com/verus-lang/verus/pull/2332) — mkovaxx — merged
- [#2311 [state_machines_macros] test: confirm `custom_err` behavior](https://github.com/verus-lang/verus/pull/2311) — mkovaxx — merged

**Issues:**

- [#2354 docs: document consolidated `custom_err` attribute](https://github.com/verus-lang/verus/issues/2354) — mkovaxx — closed

## Q1 2026 (Jan–Mar 2026)

### AeneasVerif/aeneas

PRs: **9 opened** · 8 merged · 0 closed  |  Issues: **8 opened** · 6 closed

**Pull requests:**

- [#884 feat: `-version` arg for aeneas](https://github.com/AeneasVerif/aeneas/pull/884) — oliver-butterley — merged
- [#883 docs: add landing/contents page and a few updates](https://github.com/AeneasVerif/aeneas/pull/883) — oliver-butterley — merged
- [#881 fix: switch to using our own version of `TryThis`](https://github.com/AeneasVerif/aeneas/pull/881) — mpenciak — merged
- [#837 feat: Tactic to infer post conditions](https://github.com/AeneasVerif/aeneas/pull/837) — mpenciak — merged
- [#823 Add immutable theorems for Array and Slice indexing.](https://github.com/AeneasVerif/aeneas/pull/823) — ChristianoBraga — merged
- [#808 feat: show Rust visibility in Lean docstrings](https://github.com/AeneasVerif/aeneas/pull/808) — oliver-butterley — merged
- [#795 Make comment before def a proper `/--` docstring](https://github.com/AeneasVerif/aeneas/pull/795) — oliver-butterley — merged
- [#780 fix: check head is Std.WP.spec within tryMatch](https://github.com/AeneasVerif/aeneas/pull/780) — oliver-butterley — merged
- [#885 chore: replace custom List.slice  with upstream List.extract](https://github.com/AeneasVerif/aeneas/pull/885) — oliver-butterley — open

**Issues:**

- [#767 Name clash bug when struct constructor is passed as a function pointer](https://github.com/AeneasVerif/aeneas/issues/767) — oliver-butterley — open
- [#765 Aeneas extraction regression: "Region ids should not be visited directly"](https://github.com/AeneasVerif/aeneas/issues/765) — oliver-butterley — open
- [#816 Bug: Wrapping shifts (`OWrap`) produce undefined `U64.shr` / `U64.shl` in Lean output](https://github.com/AeneasVerif/aeneas/issues/816) — oliver-butterley — closed
- [#815 Bug: incorrect return type for globals referencing fallible globals](https://github.com/AeneasVerif/aeneas/issues/815) — oliver-butterley — closed
- [#784 Default trait methods from foreign crates generate duplicate opaque axioms, one for each local type](https://github.com/AeneasVerif/aeneas/issues/784) — oliver-butterley — closed
- [#778 `progress` timeout after a spec with expensive postconditions](https://github.com/AeneasVerif/aeneas/issues/778) — oliver-butterley — closed
- [#776 Bug:  `-all-computable` flag has no effect](https://github.com/AeneasVerif/aeneas/issues/776) — oliver-butterley — closed
- [#769 Spurious Aeneas warning on opaque types without region parameters](https://github.com/AeneasVerif/aeneas/issues/769) — oliver-butterley — closed

### AeneasVerif/charon

PRs: **0 opened** · 0 merged · 0 closed  |  Issues: **3 opened** · 2 closed

**Issues:**

- [#1041 Bug: `reconstruct_fallible_operations` fails to promote shifts assigned through dereferenced pointers](https://github.com/AeneasVerif/charon/issues/1041) — oliver-butterley — open
- [#1068 Bug: very long run time and many errors extracting `spqr::kdf`](https://github.com/AeneasVerif/charon/issues/1068) — oliver-butterley — closed
- [#1065 Bug: Exponential slowdown translating `generic-array` with typenum (blocks RustCrypto crates)](https://github.com/AeneasVerif/charon/issues/1065) — oliver-butterley — closed

### verus-lang/verus

PRs: **21 opened** · 18 merged · 3 closed  |  Issues: **12 opened** · 9 closed

**Pull requests:**

- [#2286 feat: `proof_note_custom_err` attribute](https://github.com/verus-lang/verus/pull/2286) — mkovaxx — merged
- [#2278 [cargo-verus] test: run in CI](https://github.com/verus-lang/verus/pull/2278) — mkovaxx — merged
- [#2277 [cargo-verus] feat: option to control Verus arg forwarding](https://github.com/verus-lang/verus/pull/2277) — mkovaxx — merged
- [#2271 [guide] docs: document proof_note attributes](https://github.com/verus-lang/verus/pull/2271) — mkovaxx — merged
- [#2268 refactor: replace `custom_req_err` and `custom_err` with `proof_note_custom_err`](https://github.com/verus-lang/verus/pull/2268) — mkovaxx — merged
- [#2246 [builtin_macros] fix: handle `default_ensures` with return value pattern](https://github.com/verus-lang/verus/pull/2246) — mkovaxx — merged
- [#2233 feat: streamline `proof_note` syntax on `assert`/`assume` statements](https://github.com/verus-lang/verus/pull/2233) — mkovaxx — merged
- [#2226 feat: streamline `proof_note` syntax on `requires`/`ensures` clauses](https://github.com/verus-lang/verus/pull/2226) — mkovaxx — merged
- [#2202 misc: auto-add @mkovaxx as reviewer on PRs touching cargo-verus](https://github.com/verus-lang/verus/pull/2202) — mkovaxx — merged
- [#2199 [rust_verify] feat: JSON output has proof notes failing under `--no-cheating`](https://github.com/verus-lang/verus/pull/2199) — mkovaxx — merged
- [#2196 [rust_verify] feat: JSON output has obligation proof notes](https://github.com/verus-lang/verus/pull/2196) — mkovaxx — merged
- [#2182 [rust_verify] feat: JSON output has failed obligations (`proof_note`)](https://github.com/verus-lang/verus/pull/2182) — mkovaxx — merged
- [#2167 [rust_verify] feat: `proof_note` labels](https://github.com/verus-lang/verus/pull/2167) — mkovaxx — merged
- [#2158 [rust_verify] feat: `#[proof_note("label")]` attribute](https://github.com/verus-lang/verus/pull/2158) — mkovaxx — merged
- [#2134 feat: complex return value patterns](https://github.com/verus-lang/verus/pull/2134) — mkovaxx — merged
- [#2133 fix: Singular download in CI](https://github.com/verus-lang/verus/pull/2133) — mkovaxx — merged
- [#2098 [verus_syn] fix: relax parens around braces constraint](https://github.com/verus-lang/verus/pull/2098) — mkovaxx — merged
- [#2071 [cargo-verus] test: cases to detect metadata ingestion issues](https://github.com/verus-lang/verus/pull/2071) — mkovaxx — merged
- [#2162 [vir] feat: `ExprX::AssertAssume` has an optional `proof_note`](https://github.com/verus-lang/verus/pull/2162) — mkovaxx — closed
- [#2161 [vir] feat: `ExprX::WithProofNote` to carry a `proof_note` label](https://github.com/verus-lang/verus/pull/2161) — mkovaxx — closed
- [#2136 TEST; DO NOT MERGE](https://github.com/verus-lang/verus/pull/2136) — mkovaxx — closed

**Issues:**

- [#2157 feat: mode to require `proof_note` labels](https://github.com/verus-lang/verus/issues/2157) — mkovaxx — open
- [#2156 feat: enforce uniqueness of `proof_note` labels](https://github.com/verus-lang/verus/issues/2156) — mkovaxx — open
- [#2068 [cargo-verus] refactor to allow end-to-end testing without running a child process](https://github.com/verus-lang/verus/issues/2068) — mkovaxx — open
- [#2181 fix: eliminate `proof_note` attribute syntax quirks](https://github.com/verus-lang/verus/issues/2181) — mkovaxx — closed
- [#2155 feat: change `--no-cheating` mode not to fail fast](https://github.com/verus-lang/verus/issues/2155) — mkovaxx — closed
- [#2154 feat: JSON output labels of failed obligations (`proof_note`)](https://github.com/verus-lang/verus/issues/2154) — mkovaxx — closed
- [#2153 feat: JSON output labels of all obligations (`proof_note`)](https://github.com/verus-lang/verus/issues/2153) — mkovaxx — closed
- [#2152 feat: show proof obligation labels in error messages](https://github.com/verus-lang/verus/issues/2152) — mkovaxx — closed
- [#2151 feat: support `proof_note` labels](https://github.com/verus-lang/verus/issues/2151) — mkovaxx — closed
- [#2150 feat: Proof Obligation Labels](https://github.com/verus-lang/verus/issues/2150) — mkovaxx — closed
- [#2149 feat: relax grammar to allow omitting parens around blocks in specs](https://github.com/verus-lang/verus/issues/2149) — mkovaxx — closed
- [#2069 [cargo-verus] test: extend tests to cover multiple crates with the same name](https://github.com/verus-lang/verus/issues/2069) — mkovaxx — closed

### leanprover-community/mathlib4

PRs: **3 opened** · 3 merged · 0 closed  |  Issues: **1 opened** · 1 closed

**Pull requests:**

- [#36966 chore: remove superfluous `clearExcept` call](https://github.com/leanprover-community/mathlib4/pull/36966) — oliver-butterley — merged
- [#36961 chore(AlgebraicGeometry): remove use of `clear*-` from `isClosedMap_iff_specializingMap`](https://github.com/leanprover-community/mathlib4/pull/36961) — oliver-butterley — merged
- [#36723 fix(`ClearExcept`): modify so that each `isAuxDecl` is retained](https://github.com/leanprover-community/mathlib4/pull/36723) — oliver-butterley — merged

**Issues:**

- [#36722 `ClearExcept` (`clear * -`) clears invisible auxiliary declarations (`isAuxDecl`) including recursive hypotheses](https://github.com/leanprover-community/mathlib4/issues/36722) — oliver-butterley — closed

## Q4 2025 (Oct–Dec 2025)

### AeneasVerif/aeneas

PRs: **0 opened** · 0 merged · 0 closed  |  Issues: **2 opened** · 2 closed

**Issues:**

- [#641 Bug: Error extracting function which could be extracted properly before the latest updates](https://github.com/AeneasVerif/aeneas/issues/641) — oliver-butterley — closed
- [#622 Extracted lean is missing some required parenthesis](https://github.com/AeneasVerif/aeneas/issues/622) — oliver-butterley — closed

### AeneasVerif/charon

PRs: **0 opened** · 0 merged · 0 closed  |  Issues: **2 opened** · 2 closed

**Issues:**

- [#956 Feature request: Support trait implementations in `--start-from`](https://github.com/AeneasVerif/charon/issues/956) — oliver-butterley — closed
- [#897 Bug: Machine specific comments in extracted code](https://github.com/AeneasVerif/charon/issues/897) — oliver-butterley — closed

### verus-lang/verus

PRs: **4 opened** · 4 merged · 0 closed  |  Issues: **0 opened** · 0 closed

**Pull requests:**

- [#2050 [cargo-verus] fix: arg forwarding](https://github.com/verus-lang/verus/pull/2050) — mkovaxx — merged
- [#2049 [cargo-verus] feat: `focus` subcommand](https://github.com/verus-lang/verus/pull/2049) — mkovaxx — merged
- [#2033 refactor: cargo-verus to use clap and reorganize internals](https://github.com/verus-lang/verus/pull/2033) — mkovaxx — merged
- [#2029 test: add integration tests for `cargo verus verify`](https://github.com/verus-lang/verus/pull/2029) — mkovaxx — merged
