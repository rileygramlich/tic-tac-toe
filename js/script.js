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
    [0, 1, 2]
    [0, 1, 2]
    [0, 1, 2]
]

// Initializing variable for whose turn it is:
let turn = 'X'

/*----- cached element references -----*/
// store the board item elements in a variable so we can manipulate with event listeners

let boardItemEl = document.querySelector('.board-item')



/*----- event listeners -----*/
// Clicking on a board item changes that board item to X:

boardItemEl.addEventListener('click', function(event) {
    console.log(boardItemEl.textContent)
    boardItemEl.innerHTML = 'X'
})

/*----- functions -----*/
