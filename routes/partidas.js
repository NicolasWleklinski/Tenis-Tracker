var express = require("express");
var router = express.Router();
var partidaController = require("../controllers/partidaController");

router.post("/salvar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    partidaController.salvar(req, res);
});

module.exports = router;