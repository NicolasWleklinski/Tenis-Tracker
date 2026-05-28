var dashboardModel =
require("../models/dashboardModel");

function buscarKPIs(req, res) {

    var idUsuario = 1;

    dashboardModel.buscarKPIs(idUsuario).then(resultado => {
            res.json(resultado);
        }).catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
}



function buscarGraficoLinha(req, res) {

    dashboardModel.buscarGraficoLinha().then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro);
    });

}



function buscarPizza(req, res) {

    dashboardModel.buscarPizza().then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro);
    });
}



module.exports = {
    buscarKPIs,
    buscarGraficoLinha,
    buscarPizza
};