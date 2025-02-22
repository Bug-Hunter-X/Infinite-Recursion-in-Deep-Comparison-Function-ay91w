function foo(a, b, visited = new WeakSet()) {
  if (a === b) {
    return true;
  }

  if (a == null || b == null) {
    return a === b;
  }

  if (typeof a !== 'object' || typeof b !== 'object') {
    return a === b;
  }

  if (visited.has(a) || visited.has(b)) {
    return false; //circular reference
  }

  visited.add(a);
  visited.add(b);

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  for (let i = 0; i < aKeys.length; i++) {
    const key = aKeys[i];
    if (!b.hasOwnProperty(key) || !foo(a[key], b[key], visited)) {
      return false;
    }
  }

  return true;
}

//Example usage:
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = {a:1, b:{c:3}};
console.log(foo(obj1, obj2)); // true
console.log(foo(obj1, obj3)); // false

const obj4 = {};
obj4.self = obj4;
const obj5 = {};
obj5.self = obj5;
console.log(foo(obj4, obj5)); //false