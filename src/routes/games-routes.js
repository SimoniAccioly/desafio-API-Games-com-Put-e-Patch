const express = require("express");
const router = express.Router();
const controller = require("../controllers/games-controllers");
const cors = require("cors");

/**
@route ATUALIZAR um dado
@desc Atualizar o dado Name pelo seu identificador enviando todos os dados do objeto
@access Public 
@endpoint http://localhost:porta/jogos/:id
**/
router.put("/jogos/:id", cors(), controller.alterar);

/**
@route ATUALIZAR um dado
@desc Atualizar o dado Name pelo seu identificador enviando apenas a chave e o valor do objeto a ser atualizado.
@access Public 
@endpoint http://localhost:porta/jogos/:id
**/
router.patch("/jogos/:id", cors(), controller.alterar);

/**
@route ATUALIZAR um dado
@desc Atualizar o dado Company pelo seu identificador enviando todos os dados do objeto
@access Public 
@endpoint http://localhost:porta/jogos/:id
**/
router.put("/jogos/:id", cors(), controller.alterar);

/**
@route ATUALIZAR um dado
@desc Atualizar o dado Company pelo seu identificador enviando apenas a chave e o valor do objeto a ser atualizado.
@access Public 
@endpoint http://localhost:porta/jogos/:id
**/
router.patch("/jogos/:id", cors(), controller.alterar);

module.exports = router;
