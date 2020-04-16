# 🐍 Snayke.js [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![snaykejs on NPM](https://img.shields.io/npm/v/snaykejs.svg?color=green&label=snaykejs)](https://www.npmjs.com/package/snaykejs)

A terminal-based Snake implementation written in Javascript

## Instructions

### Clone from repository

```bash
git clone https://github.com/kofosu2289/snayke.git
cd snayke
yarn && yarn play
```

### npm module

Add the `snaykejs` module

```bash
yarn add snaykejs
```

Create the game.

```js
// index.js

const blessed = require('blessed')
const screen = blessed.screen({ smartCSR: true })
const { UserInterface, Game } = require('snekjs')
const ui = new UserInterface(screen, blessed)
const game = new Game(ui)

game.generateDot() // Generate the coordinates of the first dot before the game begins
game.start() // Begin game
```

Run the game.

```bash
node index.js
```

## Author

- [Kenneth Ofosu](https://kofosu.com/)

## License

This project is open source and available under the [MIT License](LICENSE).