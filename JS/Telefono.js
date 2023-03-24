"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
class Telefono {
    constructor(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    //NumeroTel
    get numeroTel() {
        return this.numero;
    }
    set numeroTel(numero) {
        this.numero = numero;
    }
    //TipoTel
    get tipoTel() {
        return this.tipo;
    }
    set tipoTel(tipo) {
        this.tipo = tipo;
    }
}
exports.Telefono = Telefono;
