# Day 1 Notes - Variables, Data Types, Operators

quick notes for myself so i don't forget this later lol

## var vs let vs const

- `var` - old way, function scoped, can redeclare and reassign (kinda risky honestly)
- `let` - block scoped, can reassign but not redeclare
- `const` - block scoped, can't reassign OR redeclare
  - but if it's an object, you CAN still change its properties, just can't reassign the whole thing

basically: use `const` by default, use `let` if the value needs to change, avoid `var`

## Data types

primitives (7): String, Number, Boolean, Undefined, Null, BigInt, Symbol
plus Object (arrays + functions count as objects too)

random things i noted:
- `typeof null` gives `"object"` which makes no sense but its a known JS bug from way back
- `typeof []` also gives `"object"`, use `Array.isArray()` to actually check for an array
- BigInt numbers end with `n` like `123n`
- every `Symbol()` is unique even if you give them the same name

## conversion vs coercion
- conversion = i do it on purpose: `Number("5")`, `String(5)`
- coercion = JS does it automatically behind the scenes: `"5" + 5` becomes `"55"`

this one confused me the most tbh, need to practice more examples

## operators

- math: `+ - * / % **`
- shortcuts: `+= -= *= /= %=`
- comparing: use `===` and `!==` not `==`/`!=` (teacher's advice, avoids weird type bugs)
- logic: `&&` `||` `!`
- ternary: `cond ? yes : no` - shortcut for simple if else, i like this a lot
- `??` only falls back on null/undefined (NOT on 0 or empty string, unlike `||`)
- `?.` stops your code from crashing when checking nested objects that might not exist

## console stuff
- log / warn / error / info - basic printing, different colors
- table - shows array of objects like an actual table, looks nice
- group/groupEnd - keeps related logs together
- time/timeEnd - checks how long something takes to run

## still confused about
- when exactly JS decides to coerce types automatically, need more practice examples
- symbols - not sure when i'd actually use them in real code yet

## takeaway for today
`===` over `==`, `let`/`const` over `var`. going to try building a small project this weekend using just this much.