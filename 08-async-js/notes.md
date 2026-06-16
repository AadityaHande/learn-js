# Day 8 Notes - Async JS (Callbacks, Promises, async/await)

## sync vs async (had to accept this before anything else made sense)
JS runs top to bottom normally, but some things (setTimeout, api calls, etc.)
don't block the rest of the code - they get scheduled for "later" while
everything else keeps running immediately. this is why `console.log` order
doesn't always match the order things are written in the file

## callbacks
a function passed into another function to run later. simple on their own,
but chaining several in a row to keep things in order creates deep nesting
("callback hell") that gets really hard to read fast. saw this firsthand in
callbacks.js with the step1/step2/step3 example

## promises
represents a value that will exist LATER. 3 states: pending, fulfilled, rejected
- `resolve(value)` - success path, triggers `.then()`
- `reject(reason)` - failure path, triggers `.catch()`
- `.then()` can be CHAINED, which flattens out the nesting mess from callbacks
- `.finally()` runs regardless of success/failure, good for cleanup stuff
- `Promise.all([...])` runs multiple promises at once, waits for all of them,
  but fails immediately if even ONE of them rejects

## async/await
basically syntax sugar on top of promises (not a totally separate concept,
took me a while to realize this). rules i noted:
- put `async` before a function to use `await` inside it
- `await` "pauses" that function until the promise resolves, but doesn't block
  the rest of the app, only that specific function
- `await` only works INSIDE an async function - tried it outside once, got an error
- error handling uses regular `try/catch` instead of `.catch()`, feels more natural

## the big realization today
async/await is literally the same promise stuff underneath, just written to
LOOK synchronous. once i saw the step1/step2/step3 example rewritten with
await, promises finally clicked properly. wish i'd understood this connection
from the start instead of learning them as two separate things

## parallel vs sequential (this mattered more than i expected)
- awaiting things ONE AT A TIME (`await a(); await b();`) runs them in sequence,
  slower if they don't depend on each other
- `Promise.all([a(), b()])` + one await runs them at the SAME time, faster
- only do sequential awaits when the second thing actually NEEDS the result
  of the first one (like Q5/Q6 - getting posts needs the user id first)

## today's biggest confusion
figuring out when to use sequential awaits vs Promise.all took a few tries.
also still not 100% sure how JS handles this stuff "under the hood" (something
about an event loop and a callback queue?) - noting this down to research
properly later, don't want to go too deep into internals right now

## plan for next
API / fetch - actually calling REAL apis instead of fake setTimeout ones,
this is where all the async stuff today should actually pay off