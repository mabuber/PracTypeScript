import {Mail} from './Mail';
import {Direccion} from './Direccion';
import {Telefono} from './Telefono';
import {Persona} from './Persona';


//Primera Entrada: Tania

const TaniaCasa = new Direccion("Plaza de Galatea", 6, 6,"Puerta A", 15002, "A Coruna", "A Coruna");
const TaniaTrabajo = new Direccion("Calle Monelos", 12, 2,"D", 15142, "Arteixo", "A Coruna");
const TaniaMailTrabajo = new Mail("Trabajo","TaniaRamos@consultoriaHF.com");
const TaniaMail = new Mail("Personal","TaniaRamos@hotmail.com");
const TaniaMovil = new Telefono("Movil",600900600);

const Tania = new Persona('Tania', 'Ramos Delgado', 27, '12345678B', new Date(1996, 1, 1), 'Amarillo','Femenino',
[TaniaCasa, TaniaTrabajo], [TaniaMailTrabajo, TaniaMail], [TaniaMovil], "Nota: No contactar por las mañanas.");


//Segunda Entrada: Adrian

const AdrianCasa = new Direccion("Calle de las Flores", 1, 2,"B", 15140, "Arteixo", "A Coruna");
const AdrianTrabajo = new Direccion("Calle Herradurías", 6, 3,"A", 15004, "A Coruna", "A Coruna");
const AdrianMail = new Mail("Personal","AdrianGarcia@gmail.com");
const AdrianMovil = new Telefono("Movil",600476600);

const Adrian = new Persona('Adrian', 'Garcia Ferreño', 33, '98765432A', new Date(1989, 4, 4), 'Rojo','Masculino',
[AdrianCasa, AdrianTrabajo], [AdrianMail], [AdrianMovil], "Nota: Se va a mudar pronto.");


//Tercera Entrada: Eugenia

const EugeniaCasa = new Direccion("Calle Mallos", 35, 2,"B", 15005, "A Coruna", "A Coruna");
const EugeniaTrabajo = new Direccion("Calle Monelos", 12, 2,"D", 15142, "Arteixo", "A Coruna");
const EugeniaMailTrabajo = new Mail("Trabajo","EugeniaSanchez@consultoriaHF.com");
const EugeniaMail = new Mail("Personal","EugeniaSanZ@gmail.com");
const EugeniaMovil = new Telefono("Movil",600555600);
const EugeniaFijo = new Telefono("Fijo",981585600);

const Eugenia = new Persona('Eugenia', 'Sanchez Loriga', 28, '23456871Z', new Date(1995, 3, 1), 'Verde','Femenino',
[EugeniaCasa, EugeniaTrabajo], [EugeniaMailTrabajo, EugeniaMail], [EugeniaMovil, EugeniaFijo], 
"Nota: Pendiente pedir movil de trabajo.");


//Modificacion

console.log("Contactos:");
console.log(Tania, Adrian, Eugenia);


const agenda: Array<Persona> = new Array(Tania, Adrian, Eugenia);
const BuscarDNI: string = "98765432A";
const ModificarEntrada: Persona = agenda.find((persona) => persona.DNI===BuscarDNI) as Persona;

const direccionNueva = new Direccion( "Calle Dr. Fleming", 22, 3, "A", 15001, "A Coruna","A Coruna");
ModificarEntrada.anadirDireccion(direccionNueva);
const mailNuevo = new Mail( "Trabajo", "AdrianGarcia@consultoriaHF.com");
ModificarEntrada.anadirMail(mailNuevo);
const telefonoNuevo = new Telefono("Fijo", 881400321);
ModificarEntrada.anadirTelefono(telefonoNuevo);


console.log("Contactos:");
console.log(Tania, Adrian, Eugenia);