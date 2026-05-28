var database = require("../database/config");

function buscarKPIs(idUsuario) {

    var instrucaoSql = `
        SELECT
            SUM(CASE
                WHEN resultado = 'vitoria'
                THEN 1
                ELSE 0 END) AS vitorias,
            SUM(CASE
                WHEN resultado = 'derrota'
                THEN 1
                ELSE 0
            END) AS derrotas
        FROM partidasVM
        WHERE fkusuario = ${idUsuario};
    `;

    return database.executar(instrucaoSql);
}



function buscarPizza() {

    var instrucaoSql = `
        SELECT
            SUM(CASE
                WHEN resultado = 'vitoria'
                THEN 1
                ELSE 0
                END) AS vitorias,
            SUM(CASE
                WHEN resultado = 'derrota'
                THEN 1
                ELSE 0
            END) AS derrotas
        FROM partidasVM
        WHERE fkusuario = 1;

    `;
    return database.executar(instrucaoSql);
}

function buscarGraficoLinha(idPartida) {
    var instrucaoSql = `
        SELECT dataPartida, resultado
        FROM partidasVM
        WHERE fkusuario = 1
        order by idPartida;

    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarKPIs,
    buscarGraficoLinha,
    buscarPizza
};