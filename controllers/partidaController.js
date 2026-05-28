var partidaModel = require("../models/partidaModel");

function salvar(req, res) {

    var data = req.body.dataServer;
    var adversario = req.body.adversarioServer;
    var tipo = req.body.tipoServer;
    var resultado = req.body.resultadoServer;
    var set1Usuario = req.body.set1UsuarioServer;
    var set1Adv = req.body.set1AdvServer;
    var set2Usuario = req.body.set2UsuarioServer;
    var set2Adv = req.body.set2AdvServer;
    var set3Usuario = req.body.set3UsuarioServer;
    var set3Adv = req.body.set3AdvServer;

    partidaModel.salvar(
        data,
        adversario,
        tipo,
        resultado,
        set1Usuario,
        set1Adv,
        set2Usuario,
        set2Adv,
        set3Usuario,
        set3Adv
    )
    .then(function(resultado) {
        res.json(resultado);
    })
    .catch(function(erro) {
        console.log(erro);
        res.status(500).json(erro);
    });

}

module.exports={
    salvar
}