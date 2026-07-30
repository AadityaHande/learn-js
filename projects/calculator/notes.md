# Project 1 - Calculator

first real project after the 10 topic days. tried to build it without looking
up a tutorial step by step, just used my own notes from days 1-7 as reference.

## what it uses
- DOM selection + event delegation (day 6/7) - one listener on the whole
  button grid instead of one per button, figured this would matter more once
  i added the equals/clear/delete buttons too
- switch statement (day 2) for picking which math operation to run
- string methods like `.slice()` and `.includes()` (day 4, technically array
  methods but strings work kinda similarly)
- `parseFloat()` - new one, needed to convert the display string back into an
  actual number before doing math on it. forgot this at first and got stuff
  like "5" + "3" = "53" instead of 8, classic string concatenation bug

## things that tripped me up
- had to specifically handle the "currentOperand starts as 0" case so typing
  5 shows "5" not "05" - small detail but noticeable once i tested it
- divide by zero needed an actual check, JS doesn't error on this by itself,
  it just returns `Infinity` which looked broken on the display until i added
  the alert + clear
- chaining operations (like 5 + 3 + 2 without pressing =) needed calling
  compute() INSIDE chooseOperation when there's already a pending operation,
  took a couple tries to get this logic right

## bonus i added myself
keyboard support - wasn't part of the plan but wanted to try wiring up
`keydown` to the same functions as the buttons. reused all the same functions,
just a different way of triggering them, which felt like a good sign that the
functions were structured properly in the first place

## next project
stopwatch - probably setInterval/clearInterval heavy, similar to the digital
clock from day 10 but with actual start/stop/reset controls