# Contribution Report

Generated: 2026-05-07  |  Data since: 2025-07-01

## Q2 2026 (Apr–Jun 2026)

### AeneasVerif/aeneas

PRs: **6 opened** · 3 merged · 0 closed  |  Issues: **3 opened** · 0 closed

**Pull requests:**

- [#983 Update to Lean v4.30.0-rc2](https://github.com/AeneasVerif/aeneas/pull/983) — oliver-butterley — merged
- [#982 Update to Lean v4.29.1](https://github.com/AeneasVerif/aeneas/pull/982) — oliver-butterley — merged
- [#918 feat: New `do` Elaborator](https://github.com/AeneasVerif/aeneas/pull/918) — mpenciak — merged
- [#981 Add release tag workflow for Lean updates.](https://github.com/AeneasVerif/aeneas/pull/981) — oliver-butterley — open
- [#963 fix: Handle tuple destructuring in `step*`](https://github.com/AeneasVerif/aeneas/pull/963) — mpenciak — open
- [#947 WIP: add many models extending the Aeneas standard library coverage](https://github.com/AeneasVerif/aeneas/pull/947) — oliver-butterley — open

**Issues:**

- [#920 scalar `Eq` generates `=` (Prop) instead of `==` (Bool) in Lean backend](https://github.com/AeneasVerif/aeneas/issues/920) — oliver-butterley — open
- [#903 `Ord` instance for local type placed in Funs.lean but referenced from Types.lean](https://github.com/AeneasVerif/aeneas/issues/903) — oliver-butterley — open
- [#902 circular dependency between Types and TypesExternal](https://github.com/AeneasVerif/aeneas/issues/902) — oliver-butterley — open

### AeneasVerif/charon

PRs: **3 opened** · 3 merged · 0 closed  |  Issues: **1 opened** · 1 closed

**Pull requests:**

- [#1104 feat: refactor Charon.toml to use Cargo.toml and add support for start_from, hide_marker_traits](https://github.com/AeneasVerif/charon/pull/1104) — oliver-butterley — merged
- [#1103 docs: clarify opacity semantics in what_charon_translates.md](https://github.com/AeneasVerif/charon/pull/1103) — oliver-butterley — merged
- [#1080 Docs: update `what_charon_translates.md`](https://github.com/AeneasVerif/charon/pull/1080) — oliver-butterley — merged

**Issues:**

- [#1079 Docs: add clarification to `what_charon_translates.md`](https://github.com/AeneasVerif/charon/issues/1079) — oliver-butterley — closed

### leanprover/cslib

PRs: **2 opened** · 0 merged · 0 closed  |  Issues: **0 opened** · 0 closed

**Pull requests:**

- [#473 feat(Protocols): Key exchange protocols and Diffie-Hellman](https://github.com/leanprover/cslib/pull/473) — ChristianoBraga — open
- [#472 feat(Protocols): Sigma protocols and Schnorr identification](https://github.com/leanprover/cslib/pull/472) — ChristianoBraga — open

### verus-lang/verus

PRs: **6 opened** · 6 merged · 0 closed  |  Issues: **1 opened** · 1 closed

**Pull requests:**

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

PRs: **9 opened** · 8 merged · 0 closed  |  Issues: **8 opened** · 5 closed

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

- [#816 Bug: Wrapping shifts (`OWrap`) produce undefined `U64.shr` / `U64.shl` in Lean output](https://github.com/AeneasVerif/aeneas/issues/816) — oliver-butterley — open
- [#767 Name clash bug when struct constructor is passed as a function pointer](https://github.com/AeneasVerif/aeneas/issues/767) — oliver-butterley — open
- [#765 Aeneas extraction regression: "Region ids should not be visited directly"](https://github.com/AeneasVerif/aeneas/issues/765) — oliver-butterley — open
- [#815 Bug: incorrect return type for globals referencing fallible globals](https://github.com/AeneasVerif/aeneas/issues/815) — oliver-butterley — closed
- [#784 Default trait methods from foreign crates generate duplicate opaque axioms, one for each local type](https://github.com/AeneasVerif/aeneas/issues/784) — oliver-butterley — closed
- [#778 `progress` timeout after a spec with expensive postconditions](https://github.com/AeneasVerif/aeneas/issues/778) — oliver-butterley — closed
- [#776 Bug:  `-all-computable` flag has no effect](https://github.com/AeneasVerif/aeneas/issues/776) — oliver-butterley — closed
- [#769 Spurious Aeneas warning on opaque types without region parameters](https://github.com/AeneasVerif/aeneas/issues/769) — oliver-butterley — closed

### AeneasVerif/charon

PRs: **0 opened** · 0 merged · 0 closed  |  Issues: **3 opened** · 1 closed

**Issues:**

- [#1068 Bug: very long run time and many errors extracting `spqr::kdf`](https://github.com/AeneasVerif/charon/issues/1068) — oliver-butterley — open
- [#1041 Bug: `reconstruct_fallible_operations` fails to promote shifts assigned through dereferenced pointers](https://github.com/AeneasVerif/charon/issues/1041) — oliver-butterley — open
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

PRs: **9 opened** · 5 merged · 0 closed  |  Issues: **1 opened** · 0 closed

**Pull requests:**

- [#36966 chore: remove superfluous `clearExcept` call](https://github.com/leanprover-community/mathlib4/pull/36966) — oliver-butterley — merged
- [#36961 chore(AlgebraicGeometry): remove use of `clear*-` from `isClosedMap_iff_specializingMap`](https://github.com/leanprover-community/mathlib4/pull/36961) — oliver-butterley — merged
- [#36723 fix(`ClearExcept`): modify so that each `isAuxDecl` is retained](https://github.com/leanprover-community/mathlib4/pull/36723) — oliver-butterley — merged
- [#35581 feat(RingTheory/MvPolynomial): MvPolynomial is isomorphic to the direct sum of its homogeneous submodules](https://github.com/leanprover-community/mathlib4/pull/35581) — mpenciak — merged
- [#35505 doc: update README.md](https://github.com/leanprover-community/mathlib4/pull/35505) — faenuccio — merged
- [#36559 feat(Analysis/Convex/Uniform): uniformly convex spaces using filters](https://github.com/leanprover-community/mathlib4/pull/36559) — faenuccio — open
- [#36540 perf: personal grind test](https://github.com/leanprover-community/mathlib4/pull/36540) — faenuccio — open
- [#34705 feat(RingTheory): Grassmannian functor](https://github.com/leanprover-community/mathlib4/pull/34705) — mpenciak — open
- [#34186 feat(GroupTheory/SpecificGroups/Cyclic): a quotient of a cyclic group is cyclic](https://github.com/leanprover-community/mathlib4/pull/34186) — faenuccio — open

**Issues:**

- [#36722 `ClearExcept` (`clear * -`) clears invisible auxiliary declarations (`isAuxDecl`) including recursive hypotheses](https://github.com/leanprover-community/mathlib4/issues/36722) — oliver-butterley — open

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

### leanprover-community/mathlib4

PRs: **4 opened** · 1 merged · 0 closed  |  Issues: **2 opened** · 0 closed

**Pull requests:**

- [#32491 doc(Analysis.Normed.Lp.LpEquiv): fix a typo and change two variables](https://github.com/leanprover-community/mathlib4/pull/32491) — faenuccio — merged
- [#33134 feat(Normed/Module/WeakDual): add Goldstine lemma](https://github.com/leanprover-community/mathlib4/pull/33134) — faenuccio — open
- [#32921 refactor Submodule.map](https://github.com/leanprover-community/mathlib4/pull/32921) — faenuccio — open
- [#32305 feat: define Sobolev Spaces](https://github.com/leanprover-community/mathlib4/pull/32305) — faenuccio — open

**Issues:**

- [#33238 Add delaborator checking canonicity of instances](https://github.com/leanprover-community/mathlib4/issues/33238) — faenuccio — open
- [#31330 Follow-up of #29447: two more imports to remove](https://github.com/leanprover-community/mathlib4/issues/31330) — faenuccio — open

## Q3 2025 (Jul–Sep 2025)

### leanprover-community/mathlib4

PRs: **29 opened** · 22 merged · 4 closed  |  Issues: **0 opened** · 0 closed

**Pull requests:**

- [#29728 feat(Topology/KrullDimension): add subspace dimension inequality](https://github.com/leanprover-community/mathlib4/pull/29728) — a-dangelo — merged
- [#29644 chore(GroupWithZero/WithZero): reorganize variable names](https://github.com/leanprover-community/mathlib4/pull/29644) — faenuccio — merged
- [#29033 feat(Analysis.LocallyConvex): a linear map is surjective iff its image contains a ball, or a closed ball, or a sphere](https://github.com/leanprover-community/mathlib4/pull/29033) — faenuccio — merged
- [#28958 feat: add Nontrivial instance for linear maps](https://github.com/leanprover-community/mathlib4/pull/28958) — faenuccio — merged
- [#28694 doc: correct NormedSpace.Dual to StrongDual](https://github.com/leanprover-community/mathlib4/pull/28694) — faenuccio — merged
- [#28593 doc(MeasureTheory\Function\LpSeminorm\Defs.lean): remove extra prime](https://github.com/leanprover-community/mathlib4/pull/28593) — faenuccio — merged
- [#28481 doc: improve doc strings for `Filter.liminf`, `Filter.limsup`](https://github.com/leanprover-community/mathlib4/pull/28481) — faenuccio — merged
- [#28479 doc(MeasureTheory.Function.EssSup): fix broken link](https://github.com/leanprover-community/mathlib4/pull/28479) — faenuccio — merged
- [#27035 chore(IsManifold/Basic): replace continuity by fun_prop](https://github.com/leanprover-community/mathlib4/pull/27035) — faenuccio — merged
- [#27008 feat(MeasureTheory): add `MeasurePreserving.integrable_comp_of_integrable`](https://github.com/leanprover-community/mathlib4/pull/27008) — oliver-butterley — merged
- [#26980 feat(Algebra/GroupWithZero/WithZero): add lemma map'_surjective_iff](https://github.com/leanprover-community/mathlib4/pull/26980) — faenuccio — merged
- [#26872 chore(RingTheory/Valuation/RankOne): modify the definition of Valuation.RankOne using its range rather than its codomain](https://github.com/leanprover-community/mathlib4/pull/26872) — faenuccio — merged
- [#26853 feat(Mathlib/MeasureTheory/MeasurableSpace/Invariants): add `comp_eq_of_measurable_invariants`](https://github.com/leanprover-community/mathlib4/pull/26853) — oliver-butterley — merged
- [#26852 feat(Mathlib/Order/Filter/Basic): add `EventuallyEq.mul_left` and `...right`](https://github.com/leanprover-community/mathlib4/pull/26852) — oliver-butterley — merged
- [#26851 feat(Algebra/Order): add several lemmas related to `partialSups`](https://github.com/leanprover-community/mathlib4/pull/26851) — oliver-butterley — merged
- [#26848 feat(Mathlib/Order/PartialSups): add `PartialSups` composition lemma](https://github.com/leanprover-community/mathlib4/pull/26848) — oliver-butterley — merged
- [#26842 feat(Dynamics/BirkhoffSum/Average): add lemma `birkhoffAverage_of_invariant`](https://github.com/leanprover-community/mathlib4/pull/26842) — oliver-butterley — merged
- [#26840 feat(Mathlib/Dynamics/BirkhoffSum/Average): add 3 BirkhoffAverage lemmas](https://github.com/leanprover-community/mathlib4/pull/26840) — oliver-butterley — merged
- [#26810 feat (Mathlib/Dynamics/BirkhoffSum/Basic): add lemma `birkhoffSum_of_comp_eq`](https://github.com/leanprover-community/mathlib4/pull/26810) — oliver-butterley — merged
- [#26807 feat(Mathlib/Logic/Function/Iterate): add small lemma `iterate_invariant`](https://github.com/leanprover-community/mathlib4/pull/26807) — oliver-butterley — merged
- [#26588 feat(Algebra/GroupWithZero/WithZero): add the multiplicative embedding with zero from the range](https://github.com/leanprover-community/mathlib4/pull/26588) — faenuccio — merged
- [#26587 feat(RingTheory/Valuation/Discrete/Basic.lean): add Nontriviality instances for discrete valuations](https://github.com/leanprover-community/mathlib4/pull/26587) — faenuccio — merged
- [#28693 feat(Analysis.Normed.Module.Milman-Pettis): add Milman-Pettis theorem](https://github.com/leanprover-community/mathlib4/pull/28693) — faenuccio — open
- [#28631 feat(Data\Nat\ModEq.lean): add grind attribute to ModEq](https://github.com/leanprover-community/mathlib4/pull/28631) — faenuccio — open
- [#26923 feat(Dynamics/BirkhoffSum): add the pointwise ergodic theorem (Birkhoff's)](https://github.com/leanprover-community/mathlib4/pull/26923) — oliver-butterley — open
- [#29594 feat(Algebra.Order.GroupWithZero.WithZero): add multiplicativity](https://github.com/leanprover-community/mathlib4/pull/29594) — faenuccio — closed
- [#26971 feat(Algebra/GroupWithZero/WithZero): add lemma map'_surjective_iff](https://github.com/leanprover-community/mathlib4/pull/26971) — faenuccio — closed
- [#26669 chore: move BooleanAlgebra material on Function out of Data](https://github.com/leanprover-community/mathlib4/pull/26669) — faenuccio — closed
- [#26589 feat(Algebra/GroupWithZero/Range): add withZeroUnitsHom](https://github.com/leanprover-community/mathlib4/pull/26589) — faenuccio — closed
