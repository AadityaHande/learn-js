# Day 7 Notes - Events

## the basics
`element.addEventListener("eventType", function)` - the main pattern for
literally everything today. can attach multiple listeners to the same
element+event, didn't know that was even allowed until i accidentally did it

## the event object
every listener function gets an `event` (or `e`) object automatically as the
first argument. the big ones i actually used:
- `event.target` - the exact element that triggered the event
- `event.target.value` - for getting input field values
- `event.key` - which key was pressed (for keydown/keyup)
- `event.currentTarget` - the element the listener is attached TO (not necessarily
  what got clicked, this is different from target when using delegation)

## preventDefault
forms refresh the page by default on submit. `event.preventDefault()` stops
that. found this out by submitting a form and watching everything i typed
just vanish when the page reloaded, then googled why lol

## common events used today
- `click` - buttons
- `input` - fires on every keystroke, good for live updates
- `keydown` - more detail than input, can check WHICH key with `.key`
- `submit` - on forms specifically, always needs preventDefault basically
- `mouseover` / `mouseout` - hover effects
- `dblclick` - double click, different from two single clicks apparently

## event delegation (the hard part today, but worth it)
instead of adding a listener to every single button individually, add ONE
listener to the parent element and check `event.target` to figure out what
was actually clicked.

why this matters: if i add new buttons with JS AFTER the page loads, listeners
added directly to those old buttons wouldn't exist on the new ones. but a
listener on the PARENT still catches clicks on new children automatically,
because of event bubbling.

## event bubbling
clicking something doesn't just fire the event on that element - it "bubbles
up" through every parent above it too (li -> ul -> body -> html). this is
literally WHY delegation works. `event.stopPropagation()` can stop the bubble
if needed but didn't need it today.

## removing listeners
`removeEventListener` only works if the function was named/stored in a
variable, NOT if it was an anonymous arrow function passed directly. tried to
remove an anonymous one and nothing happened, took a bit to realize why

## today's biggest confusion
target vs currentTarget. finally got it after Q8 in practice - target changes
depending on what you actually clicked inside the container, currentTarget is
always whatever element the listener itself is attached to. writing this down
so future me doesn't forget again

## grind check-in
7 days in now. control flow and functions felt shaky at first but arrays/objects
clicked faster, and now DOM+events actually feels like "real" coding since stuff
shows up on screen and responds to clicks. going to keep this pace for now.

## plan for next
ES6+ features properly (destructuring/spread i already touched, but modules,
classes, more array stuff) - or maybe async JS next, haven't fully decided yet