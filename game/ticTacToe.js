let prompt = require('prompt')

let board = {
  1 : '',
  2 : '',
  3 : '',
  4 : '',
  5 : '',
  6 : '',
  7 : '',
  8 : '',
  9 : ''
}

const player1 = 'X'
const player2 = 'O'

let winners = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]

function printBoard () {
  console.log( ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '' + '\n' +
               '---------\n' +
               ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '' + '\n' +
               '---------\n' +
               ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '')
}

function place (tic, position) {
  board[position] += tic
}

// printBoard()
function turn (player) {
  prompt.start()
  console.log("It's your turn " + player)
  prompt.get(['position'], function(err, result) {
    if(result.position == '') {
      place(player, position)
      printBoard()
    }
  })
}

turn(player1)
