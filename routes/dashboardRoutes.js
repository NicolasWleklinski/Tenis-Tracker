var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/kpis", dashboardController.buscarKPIs);

router.get("/graficoLinha",function (req, res) {
        dashboardController.buscarGraficoLinha(req, res);
    }
);

router.get( "/pizza",function (req, res) {
        dashboardController.buscarPizza(req, res);
    }
);


module.exports = router;