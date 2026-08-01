# Project 3 - To-Do App

first project managing an actual LIST of data instead of just numbers/time,
and first time using localStorage. also first project using Bootstrap
instead of writing all my own CSS from scratch.

## localStorage (brand new today)
- only stores strings, so i have to `JSON.stringify()` before saving and
  `JSON.parse()` when loading it back
- `localStorage.getItem()` returns `null` if nothing was ever saved (like
  the very first time someone opens the page), had to handle that case or
  `JSON.parse(null)` would've broken things
- saving on every single render felt a bit excessive but the list is tiny so
  it doesn't matter, way simpler than trying to figure out exactly WHEN to save

## using Bootstrap for the first time
pulled in Bootstrap via the CDN link instead of writing custom css. mostly
used `list-group` / `list-group-item` for the todo list, `input-group` for
the add-task form, and utility classes like `text-decoration-line-through`
and `text-muted` for the completed look instead of writing my own classes
for that. saved a lot of time not having to style buttons/spacing myself,
but had to actually read the bootstrap docs to find the right class names
instead of guessing

## re-rendering the whole list every time
instead of trying to update just the one todo that changed, i wipe the whole
list and rebuild it from the `todos` array on every change. read that this
isn't the most "efficient" approach for bigger apps but it's way easier to
reason about and this list will never be big enough for it to matter. thinking
this might be part of why frameworks like React exist, to handle this properly
at a bigger scale - something to look into later

## event delegation was actually necessary here
todo items get added and removed constantly, so attaching a listener to each
one individually would mean setting up new listeners every time something
gets added, and cleaning them up when deleted. one listener on the parent
`<ul>` handles ALL of it automatically, past/present/future items included

## small things learned along the way
- `element.closest(".todo-item")` - finds the nearest matching parent, used
  this instead of manually checking `event.target.parentElement` since a
  click on the checkbox vs the text vs the delete button all have different
  immediate parents
- `dataset.id` - a clean way to store the todo's id right on the DOM element,
  though it comes back as a STRING so i had to convert it with `Number()`
- spread operator (`{...todo, completed: !todo.completed}`) to update a todo
  without directly mutating the original object

## bugs i actually hit
- forgot `JSON.parse()` when loading once and the page just showed
  "[object Object]" instead of my todos, took a second to realize why
- deleting a todo initially deleted the WRONG one because i was comparing
  `id` (a number) to `dataset.id` (a string) without converting first -
  `===` doesn't do type coercion so `5 === "5"` is false, same lesson as the
  day 1 operators notes, funny that it came back around here
- filter buttons only tracked the selected state with a plain `active` class
  at first, which had no actual bootstrap styling attached to it, so nothing
  visually changed when clicking between filters. had to also swap
  `btn-primary` / `btn-outline-primary` manually to make it look right

## next project
weather app - first time using a REAL external api (not jsonplaceholder),
need to figure out signing up for a free api key for this one