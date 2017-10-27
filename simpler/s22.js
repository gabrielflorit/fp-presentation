const integers = [1, 2, 3]

const double = x => x + x
const square = x => x * x

const result = integers
  .map(double)
  .map(square)

// This is functional programming (FP).
// FP involves writing functions that are:
// - pure
// - have no side-effects
// - do not perform mutation
