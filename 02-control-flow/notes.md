# Day 2 Notes - Control Flow

## if / else
- basic decision making, runs a block if condition is true
- `else if` for checking multiple conditions in order
- can nest ifs inside ifs but honestly `&&` is usually cleaner

## truthy / falsy (this was new to me)
falsy values: `0`, `""`, `null`, `undefined`, `NaN`, `false`
everything else is truthy - even `"0"` (string) and `[]` (empty array) are truthy!
this genuinely surprised me, thought empty array would be falsy

## switch
- good when checking ONE variable against a bunch of fixed values
- don't forget `break` or it just falls through to the next case
  (learned this the hard way, spent 10 mins debugging)
- can group cases together on purpose (fall-through) like:
  ```
  case "A":
  case "B":
    // runs for both
  ```
- `switch (true)` trick lets you use range conditions like `score >= 90`, kinda neat
- switch compares using `===` so `2` and `"2"` are NOT the same case

## loops
- `for` - when i know exactly how many times to loop
- `while` - checks condition first, could run 0 times
- `do-while` - runs the body FIRST, then checks, so it always runs at least once
- `for-of` - loops over array VALUES (also works on strings)
- `for-in` - loops over object KEYS
- kept mixing up for-of and for-in at first, writing it here so i stop doing that

## break vs continue
- `break` = stop the loop completely
- `continue` = skip just this one round, keep looping

## today's struggle
reversing a number with a while loop took forever to click. had to actually
trace through it on paper (123 % 10, then dividing by 10 each time) before it
made sense. prime number check was easier once i understood break properly.

## goal for tomorrow
functions - hoping it's less confusing than switch fall-through was lol