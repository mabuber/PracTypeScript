export class Direccion {
    private calle: string;
    private numero: number;
    private piso: number;
    private letra: string;
    private codigoPostal: number;
    private poblacion: string;
    private provincia: string;
   
    constructor(calle: string, numero: number, piso: number, letra: string, codigoPostal: number, poblacion: string, provincia: string){
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
    set calleDir(calle: string) {
      this.calle = calle;
    }
  
  //NumeroDir
    get numeroDir() {
      return this.numero;
    }
    set numeroDir(numero: number) {
      this.numero = numero;
    }

  //PisoDir
    get pisoDir() {
      return this.piso;
    }
    set pisoDir(piso: number) {
      this.piso = piso;
    }
  
  //LetraDir
    get letraDir() {
      return this.letra;
    }
    set letraDir(letra: string) {
      this.letra = letra;
    }
  //CodigoPostalDir
    get codigoPostalDir() {
      return this.codigoPostal;
    }
    set codigoPostalDir(codigoPostal: number) {
      this.codigoPostal = codigoPostal;
    }
  
  //PoblacionDir
    get poblacionDir() {
      return this.poblacion;
    }
    set poblacionDir(poblacion: string) {
      this.poblacion = poblacion;
    }

  //ProvinciaDir
    get provinciaDir() {
      return this.provincia;
    }
    set provinciaDir(provincia: string) {
      this.provincia = provincia;
    }
  }