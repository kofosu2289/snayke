const blessed = require('blessed')
const { UserInterface } = require('./UserInterface')
const { Game } = require('./Game')

const screen = blessed.screen({ smartCSR: true })
const ui = new UserInterface(screen, blessed)
const game = new Game(ui)

// Generate the coordinates of the first dot before the game begins
game.generateDot()

// Begin game
game.start()
