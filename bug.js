function foo(a, b) {
  if (a === b) {
    return true; // Correct behavior
  }

  if (a == null || b == null) {
    return a === b; // Correct behavior
  }

  if (typeof a !== 'object' || typeof b !== 'object') {
    return a === b; // Correct behavior
  }

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false; // Correct behavior
  }

  for (let i = 0; i < aKeys.length; i++) {
    const key = aKeys[i];
    if (!b.hasOwnProperty(key) || !deepCompare(a[key], b[key])) {
      return false; // Correct behavior
    }
  }

  return true; // Correct behavior
}

function deepCompare(a, b) {
  return foo(a, b);
}