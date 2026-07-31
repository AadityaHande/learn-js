# Project 2 - Stopwatch

built on top of the setInterval/Date stuff from the day 10 digital clock, but
this one needed actual STATE (running vs paused vs reset) instead of just
displaying whatever time it is right now.

## the accuracy problem (this was the main lesson here)
first attempt: just add 10 to a counter every time setInterval fires every 10ms.
seemed fine at first but the time started drifting slightly the longer it ran,
because setInterval doesn't fire at EXACTLY 10ms every single time (other stuff
running in the browser can delay it slightly).

fix: instead of counting up manually, i store the actual timestamp when start
was pressed (`Date.now()`) and calculate elapsed time by comparing it to the
CURRENT timestamp every time the display updates. this way even if setInterval
is a little late firing, the displayed time is still accurate because its
based on real clock time, not a manually incremented counter.

## pause/resume logic
had to store `elapsedTime` separately and add to it every time pause is
pressed, then use THAT as the base when starting again. if i didn't do this,
resuming would just restart from 0 instead of continuing where it left off.
took a couple of buggy attempts before this part worked right.

## laps
simplest part honestly - just grab whatever the display already shows and
stick it in a list item at the top. no separate time calculation needed since
the display is already accurate.

## small additions
- spacebar as a start/pause shortcut, same idea as the calculator's keyboard support
- disabling buttons that don't make sense in the current state (can't pause
  before starting, can't lap while paused) instead of letting them just do nothing

## next project
todo app - probably my first time actually storing a list of "items" that can
be added AND removed dynamically, likely going to need localStorage to make
the list survive a page refresh, which i haven't touched yet