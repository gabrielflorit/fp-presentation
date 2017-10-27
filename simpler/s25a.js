// FP functions have no side-effects.

// This function has no side-effects.
// It ONLY performs the addition operation.
const add = function(a, b) {
  return a + b
}

// This one does.
// It performs the addition operation, but it also...
const add = function(a, b) {
  startGlobalThermonuclearWar() // woops
  return a + b
}
