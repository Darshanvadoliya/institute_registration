let boardService = require('./board.service')

let addBoard = async (data) =>{
    return await boardService.addBoard(data)
}

// view Board
let viewBoard = async (data) =>{
    return await boardService.viewBoard(data)
}
module.exports = {
    addBoard,
    viewBoard,
}