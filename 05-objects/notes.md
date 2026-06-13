# Day 5 Notes - Objects, Destructuring, Spread

## objects basics
- key-value pairs, dot notation (`obj.key`) most of the time
- bracket notation (`obj["key"]`) needed when the key is stored in a variable
  (dynamic key) or when the key has spaces/special characters
- `delete obj.key` removes a property
- checking if a key exists: `"key" in obj` or `obj.hasOwnProperty("key")`

## objects as methods
- functions inside objects use `this` to refer to the object itself
- shorthand: `add() {}` instead of `add: function() {}`, same thing just shorter
- remembering from day 3: arrow functions do NOT work well as object methods
  because they don't get their own `this` - noting this down again bcz it matters here

## the copying gotcha (this one actually kinda scared me)
`let copy = original` does NOT make a real copy for objects/arrays - it just
points to the SAME thing in memory. changing "copy" changes "original" too.
have to use spread `{...obj}` or `[...arr]` to make an actual separate copy.
this feels like the kind of bug that would be really annoying to find later

## destructuring
- pulls values out of objects/arrays into their own variables
- can rename while destructuring: `{ name: fullName }`
- can set defaults: `{ country = "India" }`
- works on nested objects too but the syntax looks messy, had to slow down and
  read it multiple times before it made sense
- works directly in function parameters which is actually really clean:
  `function printUser({ name, age }) {}`

## array destructuring
- `let [a, b] = arr` - basic
- can skip items with extra commas: `let [, , third] = arr`
- rest pattern grabs everything else: `let [first, ...rest] = arr`

## spread operator
- opposite direction from destructuring - spreads things OUT instead of pulling them out
- combining arrays: `[...arr1, ...arr2]`
- merging objects: `{...obj1, ...obj2}` - if same key exists in both, the LAST
  one spread wins (learned this from Q9 in practice, fontSize became 18 not 14)
- also the correct way to make an actual copy instead of the reference issue above

## today's biggest confusion
nested destructuring syntax looked really intimidating the first time i saw it,
like `{ address: { building: { floor } } }`. had to build it up one level at a
time to actually understand what was happening instead of just copying it

## plan for next
DOM manipulation - finally get to make stuff show up on an actual webpage instead
of just console.log everywhere, kinda excited for this one