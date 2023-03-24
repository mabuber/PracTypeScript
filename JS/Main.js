"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mail_1 = require("./Mail");
const Direccion_1 = require("./Direccion");
const Telefono_1 = require("./Telefono");
const Persona_1 = require("./Persona");
//Primera Entrada: Tania
const TaniaCasa = new Direccion_1.Direccion("Plaza de Galatea", 6, 6, "Puerta A", 15002, "A Coruna", "A Coruna");
const TaniaTrabajo = new Direccion_1.Direccion("Calle Monelos", 12, 2, "D", 15142, "Arteixo", "A Coruna");
const TaniaMailTrabajo = new Mail_1.Mail("Trabajo", "TaniaRamos@consultoriaHF.com");
const TaniaMail = new Mail_1.Mail("Personal", "TaniaRamos@hotmail.com");
const TaniaMovil = new Telefono_1.Telefono("Movil", 600900600);
const Tania = new Persona_1.Persona('Tania', 'Ramos Delgado', 27, '12345678B', new Date(1996, 1, 1), 'Amarillo', 'Femenino', [TaniaCasa, TaniaTrabajo], [TaniaMailTrabajo, TaniaMail], [TaniaMovil], "Nota: No contactar por las mañanas.");
//Segunda Entrada: Adrian
const AdrianCasa = new Direccion_1.Direccion("Calle de las Flores", 1, 2, "B", 15140, "Arteixo", "A Coruna");
const AdrianTrabajo = new Direccion_1.Direccion("Calle Herradurías", 6, 3, "A", 15004, "A Coruna", "A Coruna");
const AdrianMail = new Mail_1.Mail("Personal", "AdrianGarcia@gmail.com");
const AdrianMovil = new Telefono_1.Telefono("Movil", 600476600);
const Adrian = new Persona_1.Persona('Adrian', 'Garcia Ferreño', 33, '98765432A', new Date(1989, 4, 4), 'Rojo', 'Masculino', [AdrianCasa, AdrianTrabajo], [AdrianMail], [AdrianMovil], "Nota: Se va a mudar pronto.");
//Tercera Entrada: Eugenia
const EugeniaCasa = new Direccion_1.Direccion("Calle Mallos", 35, 2, "B", 15005, "A Coruna", "A Coruna");
const EugeniaTrabajo = new Direccion_1.Direccion("Calle Monelos", 12, 2, "D", 15142, "Arteixo", "A Coruna");
const EugeniaMailTrabajo = new Mail_1.Mail("Trabajo", "EugeniaSanchez@consultoriaHF.com");
const EugeniaMail = new Mail_1.Mail("Personal", "EugeniaSanZ@gmail.com");
const EugeniaMovil = new Telefono_1.Telefono("Movil", 600555600);
const EugeniaFijo = new Telefono_1.Telefono("Fijo", 981585600);
const Eugenia = new Persona_1.Persona('Eugenia', 'Sanchez Loriga', 28, '23456871Z', new Date(1995, 3, 1), 'Verde', 'Femenino', [EugeniaCasa, EugeniaTrabajo], [EugeniaMailTrabajo, EugeniaMail], [EugeniaMovil, EugeniaFijo], "Nota: Pendiente pedir movil de trabajo.");
//Modificacion
console.log("Contactos:");
console.log(Tania, Adrian, Eugenia);
const agenda = new Array(Tania, Adrian, Eugenia);
const BuscarDNI = "98765432A";
const ModificarEntrada = agenda.find((persona) => persona.DNI === BuscarDNI);
const direccionNueva = new Direccion_1.Direccion("Calle Dr. Fleming", 22, 3, "A", 15001, "A Coruna", "A Coruna");
ModificarEntrada.anadirDireccion(direccionNueva);
const mailNuevo = new Mail_1.Mail("Trabajo", "AdrianGarcia@consultoriaHF.com");
ModificarEntrada.anadirMail(mailNuevo);
const telefonoNuevo = new Telefono_1.Telefono("Fijo", 881400321);
ModificarEntrada.anadirTelefono(telefonoNuevo);
console.log("Contactos:");
console.log(Tania, Adrian, Eugenia);
