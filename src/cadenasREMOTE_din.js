//
// LuisPa 2017/01/06
//
// Este fichero solo se utiliza para la generación del M3U, no para EPG. 
//
// Va a sobreescribir algunos parámetros del mismo canal que
// ya se haya leido en cadenas.js o cadenas_sd.js.
//
// De esta forma NO toco los canales oficiales que recibo
// desde otro sitio y así no modifico el fichero original
//
// Un ejempo de uso: cuando tenemos generación dinámica
// desde otro sitio, por ejemplo en este caso el canal HD
// de telmadrid lo cojemos desde otra fuente (TDT por ejemplo) 
//

// Cadenas de TV

const cadenasREMOTE_din = [
  // {
  //   "tvh_nombre": "Telemadrid",
  //   "tvh_fuente": "http://mi.hdhomerun.com:1234"
  // }
];

export default cadenasREMOTE_din;
