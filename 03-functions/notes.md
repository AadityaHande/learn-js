# Day 3 Notes - Functions

## why functions
reusable blocks of code, write once, call whenever needed. way better than
copy-pasting the same code everywhere

## declaration vs expression
- `function greet() {}` - declaration, gets hoisted (can call it before its written in the file)
- `const greet = function() {}` - expression, NOT hoisted, has to be defined first

## return vs console.log
- `console.log` just prints, you can't reuse that value anywhere
- `return` actually gives the value back so you can store it in a variable
this mixed me up on day 1 tbh, makes sense now

## default parameters
`function greet(name = "Guest")` - if nothing is passed in, it uses the default
saves having to check `if (name === undefined)` manually

## arrow functions
- shorter syntax: `(x, y) => x + y`
- if returning an object directly, MUST wrap in `()` like `() => ({ key: value })`
  or JS thinks the `{}` is a function body. wasted 15 mins on this today
- big difference: arrow functions don't have their own `this`, they use whatever
  `this` was in the surrounding code. regular functions get their own `this`.
  apparently a common interview question, need to remember this one

## rest parameters
`function sum(...nums)` - collects any number of arguments into an array
useful when you don't know how many args will come in

## scope (this took the longest to click today)
- global scope - accessible everywhere
- function scope - only inside that function
- block scope - `let`/`const` stay inside `{ }`, but `var` leaks out of blocks (bad)
- scope chain - inner functions CAN see outer variables, but not the other way around
- shadowing - a local variable can "hide" a global one with the same name, just inside that function

## hoisting (still fuzzy on this)
- `var` gets hoisted and initialized as `undefined`, so no error, just prints undefined
- `let`/`const` are hoisted too but stay in a "temporal dead zone" until their line runs,
  so using them early throws an actual error instead of just being undefined
  need to reread this, don't fully get WHY this happens yet

## closures (barely scratched the surface)
a function returned from another function still "remembers" the variables from
where it was created. saw it in practice.js Q10, kinda blew my mind honestly,
gonna need a whole separate session to actually understand this properly

## plan for tomorrow
arrays - hoping map/filter/reduce make more sense once i spend a full day on just that