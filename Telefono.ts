export class Telefono {
    private tipo: string;
    private numero: number;
  
    constructor(tipo: string, numero: number ) {
      this.tipo = tipo;
      this.numero = numero;
    }

//NumeroTel
    get numeroTel() {
      return this.numero;
    }
    set numeroTel(numero: number) {
        this.numero = numero;
    }

//TipoTel
    get tipoTel() {
      return this.tipo;
    }
    set tipoTel(tipo: string) {
      this.tipo = tipo;
    }
  }