"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleanhos, color, sexo, direcciones, mails, telefonos, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanhos = cumpleanhos;
        this.color = color;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }
    //Nombre
    getNombre() {
        return this.nombre;
    }
    set Nombre(nombre) {
        this.nombre = nombre;
    }
    //Apellidos
    get Apellidos() {
        return this.apellidos;
    }
    set Apellidos(apellidos) {
        this.apellidos = apellidos;
    }
    //Edad
    get Edad() {
        return this.edad;
    }
    set Edad(edad) {
        this.edad = edad;
    }
    //DNI
    get DNI() {
        return this.dni;
    }
    set DNI(dni) {
        this.dni = dni;
    }
    //Cumpleanhos
    get Cumpleanhos() {
        return this.cumpleanhos;
    }
    set Cumpleanhos(cumpleanhos) {
        this.cumpleanhos = cumpleanhos;
    }
    //ColorFavorito
    get ColorFav() {
        return this.color;
    }
    set ColorFav(color) {
        this.ColorFav = color;
    }
    //Sexo
    get Sexo() {
        return this.sexo;
    }
    set Sexo(sexo) {
        this.sexo = sexo;
    }
    //Direcciones
    get Direcciones() {
        return this.direcciones;
    }
    set Direcciones(direcciones) {
        this.direcciones = direcciones;
    }
    //Mails
    get Mails() {
        return this.mails;
    }
    set Mails(mails) {
        this.mails = mails;
    }
    //Telefonos
    get Telefonos() {
        return this.telefonos;
    }
    set Telefonos(telefonos) {
        this.telefonos = telefonos;
    }
    //Notas
    get Notas() {
        return this.notas;
    }
    set Notas(notas) {
        this.notas = notas;
    }
    //Métodos
    anadirMail(mail) {
        this.mails.push(mail);
    }
    anadirDireccion(direccion) {
        this.direcciones.push(direccion);
    }
    anadirTelefono(telefono) {
        this.telefonos.push(telefono);
    }
}
exports.Persona = Persona;
