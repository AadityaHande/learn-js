# Day 9 Notes - Fetch / APIs

## using jsonplaceholder.typicode.com
free fake REST api, no signup or api key needed, perfect for practice. it has
/users, /posts, /comments, /albums etc, and "supports" POST/PUT/DELETE even
though nothing is actually saved permanently (it just fakes a response back)

## basic fetch flow
```
fetch(url)
  .then(response => response.json())
  .then(data => // actual data here)
```
important thing i kept forgetting: `fetch()` alone does NOT give you the data.
it gives you a `response` object first, and you have to call `.json()` on
THAT (which is also a promise) to actually get usable data. two steps, not one

## async/await version
```
let response = await fetch(url);
let data = await response.json();
```
same 2-step thing as above, just reads cleaner. this is the version i'll
probably use most going forward, matches what clicked for me on day 8

## checking if a request actually worked
`response.ok` (true/false) and `response.status` (like 200, 404, 500) - should
check this before trusting the data, especially for real apis that might 404.
jsonplaceholder doesn't really fail like a real api would since its fake, but
noting the pattern down for when i use a real api later

## sending data (POST)
had to pass a second argument (options object) to fetch:
- `method: "POST"`
- `headers: { "Content-Type": "application/json" }`
- `body: JSON.stringify(myObject)` - MUST stringify, fetch won't do it automatically.
  sent a plain object without stringify first and the request just broke silently

## the 4 main methods (CRUD)
- GET - read data (default if you don't specify a method)
- POST - create new data
- PUT - update/replace existing data
- DELETE - remove data

## combining everything from the past 9 days today
today's practice used: map/filter (day 4), async/await + Promise.all (day 8),
DOM + events for the button-triggered fetches (day 6/7). felt like the first
time all the separate days actually combined into something that feels closer
to a real feature instead of an isolated concept

## today's biggest confusion
almost none this time honestly, mostly because yesterday's async/await stuff
carried over directly. the only new thing was remembering `response.json()`
as a separate await step, and stringifying the body for POST requests

## 9 days in - how it's going
variables/data types felt easy, control flow + functions needed more repeats,
arrays/objects clicked well, DOM+events was the most "fun" since stuff shows
on screen, async+fetch felt like the biggest jump in difficulty but also the
most rewarding once it worked

## plan for day 10 (last topic day before doing real projects)
small mini builds that combine everything - not full apps yet, just quick
projects to prove i can actually use all of this together without hand-holding