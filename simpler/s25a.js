// FP functions have no side-effects.

// This function has no side effects.
const add = function(a, b) {
  return a + b
}

// This one does.
const add = function(a, b) {
  startGlobalThermonuclearWar()
  return a + b
}
