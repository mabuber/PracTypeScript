"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    constructor(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    //DireccionMail
    get direccionMail() {
        return this.direccion;
    }
    set direccionMail(direccion) {
        this.direccion = direccion;
    }
    //TipoMail
    get tipoMail() {
        return this.tipo;
    }
    set tipoMail(tipo) {
        this.tipo = tipo;
    }
}
exports.Mail = Mail;
