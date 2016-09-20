# JavaScript bind() Lab

## Overview

In this lab, you'll use and be able to identify when to use `bind()`. 

## Tick, tock...
![Old clock](https://media.giphy.com/media/JUvTQ9K4QM6vC/giphy.gif)

That's it. We've had to repair this old clock too many times now. Let's create a digital one instead!
 
1. Create an object called `digitalClock`
2. This object should have two properties:
    1. `time`: the current time in _seconds_, rounded off (Hint: take a look at `Date`)
    2. `startTicking`: a method that increases the `time` property with one second every second. Use `.bind()` or ES2015 arrow functions to correctly set the property!

## So much for free speech
![Fox Censor](https://media.giphy.com/media/NZ1e0alYFBKh2/giphy.gif)

Let's automate the censoring process for Fox TV!

1. Create a function called `censor`. This function takes two arguments: the word being censored, and the string that should be sanitized. Don't worry about case matching for this exercise.
2. The `censor` function should return the input string, with the censored word being replaced with `'BLEEP'`.
3. Create a `violenceCensor` function (using `.bind()` and the `censor()` function) that will censor the word `'violence'`.
4. Create a `drugsCensor` function (using `.bind()` and the `censor()` function) that will censor the word `'drugs'`.

## Resources
- [MDN: Bind](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
- [When and how to bind your functions](http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/)

<p class='util--hide'>View <a href='https://learn.co/lessons/javascript-bind-lab'>Bind Lab</a> on Learn.co and start learning to code for free.</p>
