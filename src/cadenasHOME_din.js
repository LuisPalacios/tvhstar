//
// LuisPa 2017/01/06
//
// Este fichero solo se utiliza para la generación del M3U, no para EPG. 
//
// El objetivo de este fichero es sobreescribir la fuente de uno o
// más canales presenetes en cadenasHOME.js. 
//
// ¿Cómo funciona?: Cuando arranca el programa se lee el array
// cadenasHOME y luego se buscan y reemplazan las fuentes de los
// canales aquí presentes por la URL designada. 
//
// ¿porqué? un caso de uso es que así no toco la configuración 
// principal cuando estoy haciendo pruebas o cuando recibo el mismo
// canal desde otra fuente mejor, por ejemplo el canal HD de telemadrid 
// lo cojo desde otra fuente (TDT vía hdhomerun) 
//

// Cadenas de TV

const cadenasHOME_din = [
  // {
  //   "tvh_nombre": "Telemadrid HD",
  //   "tvh_fuente": "http://mi.hdhomerun.com:1234"
  // }
];

export default cadenasHOME_din;
