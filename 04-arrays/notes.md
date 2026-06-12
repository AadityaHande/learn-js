# Day 4 Notes - Arrays

## basics
- index starts at 0, still catches me off guard sometimes
- `push`/`pop` = add/remove from the END
- `unshift`/`shift` = add/remove from the START
- `.length` gives size, `.length - 1` gives the last index

## slice vs splice (mixed these up SO many times before today)
- `slice(start, end)` - copies a part, does NOT touch the original array
- `splice(start, deleteCount, itemsToAdd)` - actually changes the original array
- rule i'm using to remember: sLICE = safe, sPLICE = permanent/damages original

## sort gotcha
`array.sort()` by default treats numbers like strings, so `[40, 1, 5, 200]`
becomes `[1, 200, 40, 5]` which makes no sense until you realize its comparing
"1" vs "200" as text not as numbers. fix: `sort((a, b) => a - b)`
this genuinely wasted like 20 minutes of my time today

## the big 3 - map, filter, reduce
- `map` - transforms every element, returns a NEW array (same length as original)
- `filter` - keeps only elements that pass a test, returns a NEW array (could be shorter)
- `reduce` - combines everything into ONE final value (sum, max, whatever)
- none of these change the original array, which is nice, less bugs

## forEach vs map
- `forEach` just runs code for each item, gives back undefined
- `map` runs code AND builds a new array with the results
- use forEach when i just want to do something (like print), map when i need the data back

## find vs filter
- `find` = first match only, returns the actual value
- `filter` = ALL matches, returns an array (even if only 1 match, still an array)

## some vs every
- `some` = true if AT LEAST ONE passes
- `every` = true only if ALL of them pass

## random new thing i learned
`[...new Set(array)]` removes duplicates in one line. don't fully understand
Sets yet but noting this trick down bcz it's genuinely useful

## today's biggest struggle
the sort() default behavior. also chaining filter -> map -> reduce together took
a couple tries to read correctly, had to go one method at a time and console.log
in between to see what each step was actually doing

## plan for tomorrow
objects - want to understand these properly before moving to DOM stuff