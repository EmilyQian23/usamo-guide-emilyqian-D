# AMC Problem Database System

A structured system for organizing AMC 8 and AMC 10 problems by topic for easy reference and study.

## How to Use This System

Each problem is cataloged with:
- **Problem ID**: Year + Test + Problem Number (e.g., `2000-AMC8-01`)
- **Topic Tags**: Primary and secondary categories
- **Difficulty**: 1-5 scale (1=easy, 5=very hard)
- **Year**: Year the problem appeared
- **Status**: Where to find it (reference to AoPS, official site, etc.)

---

## Topic Categories

### Arithmetic & Number Sense
- Proportional Reasoning
- Kinematics and Rates
- Absolute value and integer operations
- Mean, median, mode, and harmonic mean
- Arithmetic sequences
- Exponent rules
- Geometric sequences

### Data & Representation
- Chart and graph interpretation
- Venn diagrams and basic sets
- Combinatorics basics

### Algebra
- Algebra basics
- Word problems
- Word problem translation
- Linear equations and inequalities
- Systems of equations
- Defined operations
- Polynomial factoring and identities
- Quadratic identities
- Cubic factorization
- Simon's favorite factoring trick
- Quadratic formula and discriminant
- Substitution techniques

### Geometry
- Geometry basics
- Angle chasing and parallel lines
- Triangle fundamentals
- Right triangles and the Pythagorean theorem
- Triangle congruence and similarity
- Special quadrilaterals
- Inscribed and central angles
- Composite figures and shaded areas
- Coordinate geometry basics

### Problem-Solving Techniques
- The extremal principle
- Counting arguments
- Pattern recognition
- Logic and reasoning

---

## Problem Database Template

```yaml
Problem_ID: 2000-AMC8-01
Year: 2000
Test: AMC 8
Problem_Number: 1
Topics:
  - Primary: Proportional Reasoning
  - Secondary: Arithmetic
Difficulty: 1
Source: AoPS
Notes: Simple fraction multiplication and cancellation
```

---

## Quick Reference: Problem Count by Topic

| Topic | AMC 8 Count | AMC 10 Count |
|-------|------------|------------|
| Proportional Reasoning | 0 | 0 |
| Kinematics and Rates | 0 | 0 |
| Absolute value and integer operations | 0 | 0 |
| Mean, median, mode | 0 | 0 |
| Chart and graph interpretation | 0 | 0 |
| Venn diagrams and basic sets | 0 | 0 |
| Algebra basics | 0 | 0 |
| Word problems | 0 | 0 |
| Word problem translation | 0 | 0 |
| Linear equations and inequalities | 0 | 0 |
| Systems of equations | 0 | 0 |
| Defined operations | 0 | 0 |
| Arithmetic sequences | 0 | 0 |
| Exponent rules | 0 | 0 |
| Polynomial factoring | 0 | 0 |
| Quadratic identities | 0 | 0 |
| Cubic factorization | 0 | 0 |
| Simon's favorite factoring trick | 0 | 0 |
| The extremal principle | 0 | 0 |
| Quadratic formula and discriminant | 0 | 0 |
| Substitution techniques | 0 | 0 |
| Geometric sequences | 0 | 0 |
| Geometry basics | 0 | 0 |
| Angle chasing and parallel lines | 0 | 0 |
| Triangle fundamentals | 0 | 0 |
| Right triangles and Pythagorean theorem | 0 | 0 |
| Triangle congruence and similarity | 0 | 0 |
| Special quadrilaterals | 0 | 0 |
| Inscribed and central angles | 0 | 0 |
| Composite figures and shaded areas | 0 | 0 |
| Coordinate geometry basics | 0 | 0 |

---

## Organization Structure

```
amc-problems/
├── amc8/
│   ├── 2000/
│   │   ├── problems.json
│   │   └── problem_list.md
│   ├── 2001/
│   ├── ...
│   └── index.md
├── amc10/
│   ├── 2000/
│   ├── 2001/
│   └── index.md
├── by_topic/
│   ├── proportional_reasoning.md
│   ├── kinematics_and_rates.md
│   ├── absolute_value.md
│   └── ... (one file per topic)
└── README.md
```

---

## Sample Entry Format

**Problem ID:** 2000-AMC8-01  
**Year:** 2000  
**Test:** AMC 8  
**Problem #:** 1  
**Topics:** Proportional Reasoning, Arithmetic  
**Difficulty:** 1/5  
**Key Concepts:**
- Fraction multiplication
- Cancellation
- Simplification

**Solution Strategy:**
- Identify common factors
- Cancel before multiplying
- Simplify result

**AoPS Link:** https://artofproblemsolving.com/wiki/index.php/2000_AMC_8_Problems/Problem_1

---

## How to Add Problems

1. Identify the problem from AoPS or official source
2. Extract: Year, Test, Problem Number, Topics
3. Rate difficulty 1-5 based on typical student performance
4. Add to appropriate year folder
5. Update the topic counters above
6. Add entry to `by_topic/` relevant files

---

## Tracking Progress

Use this table to track which years/topics you've cataloged:

| Year | AMC 8 | AMC 10 | Status |
|------|-------|--------|--------|
| 2000 | ✓ | | In Progress |
| 2001 | | | |
| 2002 | | | |
| ... | | | |

