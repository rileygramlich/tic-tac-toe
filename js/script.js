// making sure JS file is loading in:
console.log('connected')

/*----- constants -----*/
const players = {
    'X': {
        name: '',
        moves: 0
    },
    'O': {
        name: '',
        moves: 0
    }
};

/*----- app's state (variables) -----*/
let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

// Initializing variable for whose turn it is:
let turn = 'X'

// Initialize winner to null
let winner = null


/*----- cached element references -----*/
// store the board item elements in a variable so we can manipulate with event listeners
let boardItemEls = document.querySelectorAll('.board')
let boardEl = document.querySelector('.board')
let buttonEl = document.querySelector('#replay-btn')
let turnEl = document.querySelector('#display-turn')

console.log(buttonEl)


/*----- event listeners -----*/
// Clicking on a board item changes that board item to X:
boardEl.addEventListener('click', function(event) {
    makeMove(event)
    console.log(board)
    render()
})

buttonEl.addEventListener('click', function() {
    console.log('Initializing replay')
    init()
})


/*----- functions -----*/
// function addX(event) {
//     console.log('Adding an X')
//     console.log(x, y)
//     board[x][y] = 'X'
//     return
// }

// function addO(event) {
//     board[x][y] = 'Y'
//     return
// }

function makeMove(event) {
    console.log('clicked')
    event.preventDefault
    let item = event.target
    let coords = item.id.split('-')
    if (item.tagName !== 'DIV') return
    console.log(item.id)
    console.log(coords)
    let x = coords[0]
    let y = coords[1]
    console.log(turn)
    if (board[x][y] !== null) {
        return
    } else {
        if (turn === 'X') {
            board[x][y] = 'X'
            turn = 'O'
            changeTurn()
            return
        } else {
            board[x][y] = 'O'
            turn = 'X'
            changeTurn()
        }
    }
}

function render(event) {
    // let item = event.target
    // console.log(board)
    // console.log(boardItemEls)
    document.getElementById('0-0').innerText = board[0][0]
    board.forEach(function(row, x) {
        row.forEach(function(square, y) {
            // console.log(square)
            // console.log(x, y)
            document.getElementById(`${x}-${y}`).innerText = board[x][y]
        })
    })
}

function init() {
    board = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]
    turn = 'X'
    changeTurn()
    render()
}

function changeTurn() {
    turnEl.innerHTML = `It is ${turn}'s turn.`    
}

render()