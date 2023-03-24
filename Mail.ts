export class Mail {
    private tipo: string;
    private direccion: string;
  
    constructor(tipo: string, direccion: string ) {
      this.tipo = tipo;
      this.direccion = direccion;
    }

//DireccionMail
    get direccionMail() {
      return this.direccion;
    }
    set direccionMail(direccion: string) {
        this.direccion = direccion;
    }

//TipoMail
    get tipoMail() {
      return this.tipo;
    }
    set tipoMail(tipo: string) {
      this.tipo = tipo;
    }
  }