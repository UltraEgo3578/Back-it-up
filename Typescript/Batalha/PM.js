"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PM = void 0;
var PM = /** @class */ (function () {
    function PM(nome) {
        this.nome = nome;
        this.vida = 2000;
        this.força = 15;
        this.defesa = 20;
    }
    PM.prototype.atacar = function (inimigo) {
        var dano = this.força - inimigo.defesa;
        if (dano > 0) {
            inimigo.receberDano(dano);
        }
    };
    PM.prototype.receberDano = function (dano) {
        this.vida -= dano;
        if (this.vida < 0)
            this.vida = 0;
    };
    return PM;
}());
exports.PM = PM;
