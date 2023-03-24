"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    constructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    //CalleDir
    get calleDir() {
        return this.calle;
    }
    set calleDir(calle) {
        this.calle = calle;
    }
    //NumeroDir
    get numeroDir() {
        return this.numero;
    }
    set numeroDir(numero) {
        this.numero = numero;
    }
    //PisoDir
    get pisoDir() {
        return this.piso;
    }
    set pisoDir(piso) {
        this.piso = piso;
    }
    //LetraDir
    get letraDir() {
        return this.letra;
    }
    set letraDir(letra) {
        this.letra = letra;
    }
    //CodigoPostalDir
    get codigoPostalDir() {
        return this.codigoPostal;
    }
    set codigoPostalDir(codigoPostal) {
        this.codigoPostal = codigoPostal;
    }
    //PoblacionDir
    get poblacionDir() {
        return this.poblacion;
    }
    set poblacionDir(poblacion) {
        this.poblacion = poblacion;
    }
    //ProvinciaDir
    get provinciaDir() {
        return this.provincia;
    }
    set provinciaDir(provincia) {
        this.provincia = provincia;
    }
}
exports.Direccion = Direccion;
