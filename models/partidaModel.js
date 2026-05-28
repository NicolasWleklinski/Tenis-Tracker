var database = require("../database/config")
function salvar(
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
) {

    var instrucaoSql = `
        INSERT INTO partidasVM (
            dataPartida,
            adversario,
            tipoPartida,
            resultado,
            fkusuario,
            set1Usuario,
            set1Adversario,
            set2Usuario,
            set2Adversario,
            set3Usuario,
            set3Adversario
        ) VALUES (
            '${data}',
            '${adversario}',
            '${tipo}',
            '${resultado}',
            1,
            ${set1Usuario},
            ${set1Adv},
            ${set2Usuario},
            ${set2Adv},
            ${set3Usuario},
            ${set3Adv}
        );
    `;

    return database.executar(instrucaoSql);
}
module.exports = {
    salvar
};