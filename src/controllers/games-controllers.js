const games = require('../models/games.json')


const alterar = (request, response)=>{ 
    const gameAtualizado = request.body 
    const id = parseInt(request.params.id) 
    const gamesParaAtualizar = games.find(games=>games.id == id)

    Object.keys(gameAtualizado).forEach((key)=>{
        gamesParaAtualizar[key] = gameAtualizado[key]
    }) 
    response.status(200).send(games)
}


module.exports = {
    alterar
}
