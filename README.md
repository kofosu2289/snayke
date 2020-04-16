# 🐍 no step on snayke [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![snaykejs on NPM](https://img.shields.io/npm/v/snaykejs.svg?color=green&label=snaykejs)](https://www.npmjs.com/package/snaykejs)

Snake written in JavaScript for the terminal (Node.js)

## Instructions

### Clone from repository

```bash
git clone https://github.com/kofosu2289/snayke.git
cd snek
npm install && npm start
```

### npm module

Install the snayke package:

```bash
npm install -g snaykejs
```

Create `play.js`

```js
// play.js

const blessed = require('blessed')
const screen = blessed.screen({ smartCSR: true })
const { Interface, Game } = require('snaykejs')
const ui = new Interface(screen, blessed)
const game = new Game(ui)

function tick() {
  if (game.gameOver()) {
    // Show game over screen on collision and end game
    ui.gameOverScreen()
    ui.render()

    return
  }

  ui.clearScreen()
  ui.clearDirection()

  game.renderDot()
  game.moveSnake()
  game.renderSnake()

  ui.render()
}

// Iterate every 50ms
function main() {
  setInterval(tick, 50)
}

// Generate the coordinates of the first dot before the game begins
game.generateDot()

// Begin game
main()
```

Run the game.

```bash
node play.js
```
