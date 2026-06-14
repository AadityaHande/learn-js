# Day 6 Notes - DOM Basics

## setup
had to actually run this in a browser, not just node. opened index.html directly
and used the browser console + inspect element to check things. console.log alone
in a normal js file doesn't do anything without an actual html page linked to it

## selecting elements
- `getElementById` - single element, fastest, use for unique things like a specific button
- `querySelector` - first match, works with ANY css selector (.class, #id, tag)
- `querySelectorAll` - ALL matches, returns a NodeList (works with forEach but isn't
  a true array, tried using .map on one directly and it broke, had to look up why)
- older methods (`getElementsByClassName`, `getElementsByTagName`) exist too but
  everyone online seems to just use querySelector now so sticking with that

## textContent vs innerHTML
- `textContent` = only plain text, safe
- `innerHTML` = can inject actual html tags, but apparently risky if the content
  comes from user input (something about XSS, need to look into that properly later)

## styles and classes
- `.style.propertyName` changes ONE style directly (camelCase for things like
  `backgroundColor` not `background-color`)
- `.classList.add/remove/toggle/contains` - better than inline styles for most
  real use cases, especially toggle for on/off states

## creating elements
1. `document.createElement("tag")`
2. set its content/attributes
3. `parentElement.appendChild(newElement)` to actually put it on the page
kept forgetting step 3 at first and wondering why nothing showed up

## insertAdjacentHTML
lets me add html without wiping out existing content, unlike setting innerHTML
on a parent which deletes everything already there first. used this to build
a list of skills from an array using map+join, felt satisfying to combine day 4
stuff with today's stuff

## DOM tree navigation
`parentElement`, `children`, `firstElementChild`, `lastElementChild` - useful
for moving around without needing a specific selector for every single element

## today's biggest confusion
NodeList vs actual Array. still not 100% sure why forEach works on NodeLists
but map/filter don't directly, need to look this up properly, for now just
converting with `Array.from()` if i need the extra methods

## plan for tomorrow
events - actually making buttons DO something when clicked, this is the part
i've been most excited to learn since starting this whole thing