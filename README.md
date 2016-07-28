# JavaScript bind() Lab

## Objectives

1. Practice using `bind()`
2. Explain when to use `bind()`

## Overview

`bind()` can be a bit wonky to get used to, so we should give students plenty of
practice.

Maybe we have some Pokémon

```javascript
class Pokemon {
  // `evolutions` might be an object with level-name pairs
  constructor(name, level, evolutions) {
    this.name = name
    this.level = level
    this.evolutions = evolutions
  }

  attemptEvolution() {
    const evolution = this.evolutions[this.level]

    if (evolution &&
        confirm(`${this.name} is about to evolve into ${evolution} — is that okay?`)) {
      alert(`${this.name} is evolving!`)

      // We could also do this with `bind()`!
      setTimeout(() => {
        alert(`${this.name} evolved into ${evolution}!`)
        this.name = evolution
      }, 1000)
    }
  }

  levelUp() {
    this.level = this.level + 1

    this.attemptEvolution()
  }
}
```

Note that the evolution function can be fixed with `bind()` or an arrow function
— we should show students both solutions (the arrow function is probably
preferable in this case, though).

But what if we have a Pokémon that evolves with a Moon Stone?

```javascript
function useMoonStone() {
  const level = this.level

  this.level = 'moonStone'

  this.attemptEvolution()

  this.level = level
}
```

This function obviously won't work out of the box, but we can use it like so

```javascript
const clefairy = new Pokemon('Clefairy', 2, { moonStone: 'Clefable' })

clefairy.evolve = useMoonStone.bind(clefairy)

clefairy.evolve()
```

(This is super contrived, but kind of fun, right?)

## Resources

- [When and how to bind your functions](http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/)
