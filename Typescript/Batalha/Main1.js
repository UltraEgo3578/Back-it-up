"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Capoeirista_1 = require("./Capoeirista");
var PM_1 = require("./PM");
var ask = require("readline-sync");
var batalha = true;
var oponente1 = new Capoeirista_1.Capoeirista("Eddy Gordo");
var oponente2 = new PM_1.PM("Capitão Nascimento");
while (batalha) {
    oponente2.atacar(oponente1);
    while (oponente1.vida > 0) {
        oponente1.atacar(oponente2);
    }
    while (oponente2.vida > 0) {
        oponente2.atacar(oponente1);
    }
    if (oponente1.vida <= 0) {
        console.log("".concat(oponente1, " perdeu para ").concat(oponente2));
    }
    else if (oponente2.vida <= 0) {
        console.log("".concat(oponente2, " perdeu para ").concat(oponente1));
    }
}
