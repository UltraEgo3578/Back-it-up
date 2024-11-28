"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Capoeirista = void 0;
var Capoeirista = /** @class */ (function () {
    function Capoeirista(nome) {
        this.nome = nome;
        this.vida = 2000;
        this.força = 20;
        this.defesa = 10;
    }
    Capoeirista.prototype.atacar = function (inimigo) {
        var dano = this.força - inimigo.defesa;
        if (dano > 0) {
            inimigo.receberDano(dano);
        }
    };
    Capoeirista.prototype.receberDano = function (dano) {
        this.vida -= dano;
        if (this.vida < 0)
            this.vida = 0;
    };
    return Capoeirista;
}());
exports.Capoeirista = Capoeirista;
