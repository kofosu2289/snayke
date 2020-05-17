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
const { UserInterface, Game } = require('snaykejs')
const ui = new UserInterface(blessed, blessed.screen())
const game = new Game(ui)

// Begin game
game.start() 
```

Run the game.

```bash
node index.js
```

## Preview

![snayke.gif](snayke.gif)

## Author

- [Kenneth Ofosu](https://kofosu.com/)

## License

This project is open source and available under the [MIT License](LICENSE).