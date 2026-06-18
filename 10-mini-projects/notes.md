# Day 10 Notes - Mini Projects (wrap up of core topics)

## what i built today
1. **digital-clock** - live updating clock using `setInterval` + the built-in
   `Date` object, first time actually using setInterval (only knew setTimeout before)
2. **random-quote-generator** - button that shows a random quote from a local
   array using `Math.random()` + `Math.floor()`
3. **character-counter** - live character/word counter on a textarea, with a
   max length cutoff and a warning color when close to the limit

## new small things picked up today
- `setInterval(fn, ms)` - like setTimeout but repeats forever, need
  `clearInterval()` to stop it (didn't need to stop mine since the clock
  should just keep running)
- `new Date()` - built in object for getting current time, `.getHours()` /
  `.getMinutes()` / `.getSeconds()`
- `.padStart(2, "0")` - pads a string with a character until it hits a certain
  length, used this so "9" shows as "09" instead of looking broken
- `Math.random()` gives a decimal between 0 and 1 (never quite reaching 1),
  multiply by array length and `Math.floor()` it to get a random valid index
- `.trim()` + `split(/\s+/)` for counting words properly, handles extra spaces
  between words instead of counting empty strings as words

## how today felt different from the last 9 days
no brand new "big" concept today, just combining DOM + events + arrays + a
couple new small built-ins (setInterval, Date, Math.random). this is honestly
the first day that felt like actual "building" instead of "learning a topic" -
which i think means the last 9 days actually stuck

## looking back on all 10 days
- day 1-2 (variables, control flow) - slow start, lots of small confusions
- day 3-5 (functions, arrays, objects) - felt like the real foundation, still
  refer back to these notes sometimes
- day 6-7 (DOM, events) - most fun so far, first time seeing stuff move on screen
- day 8-9 (async, fetch) - hardest jump in difficulty, but async/await clicking
  made it manageable, and fetch tied everything together
- day 10 (mini projects) - proof I can combine it all without a tutorial holding
  my hand the whole way

## what's next
moving on to the actual named projects now - calculator, stopwatch, todo app,
weather app, quiz app. those should lean heavily on everything from these 10 days,
especially DOM/events (all of them) and fetch (weather app specifically)