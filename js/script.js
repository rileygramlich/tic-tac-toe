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

let boardItemEls = document.querySelectorAll('.board')

/*----- cached element references -----*/
// store the board item elements in a variable so we can manipulate with event listeners


document.querySelector('.board').addEventListener('click', function(event) {
    makeMove(event)
    console.log(board)
    render()
})

// board[0][0] = document.getElementById('0-0').
// board[0][1] = document.getElementById('0-1')
// board[0][2] = document.getElementById('0-2')
// board[1][0] = document.getElementById('1-0')
// board[1][1] = document.getElementById('1-1')
// board[1][2] = document.getElementById('1-2')
// board[2][0] = document.getElementById('2-0')
// board[2][1] = document.getElementById('2-1')
// board[2][2] = document.getElementById('2-2')

// console.log(board[0][0])

/*----- event listeners -----*/
// Clicking on a board item changes that board item to X:


// boardItemEls.addEventListener('click', function(event) {
//     let turn = 'X'
//     makeMove(event)
// })

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
    // console.log(turn)
    if (turn === 'X') {
        board[x][y] = 'X'
        turn = 'O'
        return
    } else {
        board[x][y] = 'O'
        turn = 'X'
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

console.log(board)
render()


//     board.forEach(function(row, x) {
//     row.forEach(function(square, y {
//         console.log(board[x][y])
//         // fill in that element with the value in the array
//     }))
// })