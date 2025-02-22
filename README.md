# Infinite Recursion Bug in JavaScript Deep Comparison

This repository demonstrates a common error in recursive JavaScript functions: infinite recursion. The `bug.js` file contains a function that aims to perform a deep comparison of two objects. However, due to a circular dependency between the `foo` and `deepCompare` functions, it causes a stack overflow error when dealing with deeply nested objects.

The `bugSolution.js` file provides a corrected version of the function, avoiding the infinite recursion and ensuring proper comparison.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Observe the stack overflow error.
4. Run `node bugSolution.js` to see the corrected function in action.

## Bug Description

The `deepCompare` function recursively calls `foo`, which in turn calls `deepCompare`, leading to an infinite loop.  This occurs because there's no base case to stop the recursion when objects reference each other directly or indirectly.

## Solution

The corrected version introduces a mechanism to detect and handle circular references, preventing infinite recursion.