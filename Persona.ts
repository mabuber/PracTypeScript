import {Mail} from './Mail';
import {Direccion} from './Direccion';
import {Telefono} from './Telefono';

export class Persona {
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private dni: string;
    private cumpleanhos: Date;
    private color: string;
    private sexo: string;
    private direcciones: Array<Direccion>;
    private mails: Array<Mail>;
    private telefonos: Array<Telefono>;
    private notas: string;
    
    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanhos: Date, color: string, sexo: string, direcciones: Array<Direccion>, mails: Array<Mail>, telefonos: Array<Telefono>, notas:string){
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
    public getNombre() {
        return this.nombre;
    }
     set Nombre(nombre: string) {
        this.nombre = nombre;
    }

//Apellidos
    get Apellidos(){
        return this.apellidos;
    }
    set Apellidos(apellidos: string) {
        this.apellidos = apellidos;
    }

//Edad
    get Edad() {
        return this.edad;
    }
    set Edad(edad: number) {
        this.edad = edad;
    }

//DNI
    get DNI() {
        return this.dni;
    }
    set DNI(dni: string) {
        this.dni = dni;
    }

//Cumpleanhos
    get Cumpleanhos() {
        return this.cumpleanhos;
    }
    set Cumpleanhos(cumpleanhos: Date){
        this.cumpleanhos = cumpleanhos;
    }

//ColorFavorito
    get ColorFav() {
        return this.color;
    }
    set ColorFav(color: string) {
        this.ColorFav = color;
    }

//Sexo
    get Sexo() {
        return this.sexo;
    }
    set Sexo(sexo: string) {
        this.sexo = sexo;
    }

//Direcciones
    get Direcciones() {
        return this.direcciones;
    }
    set Direcciones(direcciones: Array<Direccion>) {
        this.direcciones = direcciones;
    }

//Mails
    get Mails(){
        return this.mails;
    }
    set Mails(mails: Array<Mail>) {
        this.mails = mails;
    }

//Telefonos
    get Telefonos() {
        return this.telefonos;
    }
    set Telefonos(telefonos: Array<Telefono>) {
        this.telefonos = telefonos;
    }

//Notas
    get Notas() {
        return this.notas;
    }
    set Notas(notas: string) {
        this.notas = notas;
    }

//Métodos
    anadirMail(mail:Mail) {
    this.mails.push(mail)
    }
    anadirDireccion(direccion:Direccion) {
    this.direcciones.push(direccion)
    }
    anadirTelefono(telefono:Telefono) {
    this.telefonos.push(telefono)
    }
}