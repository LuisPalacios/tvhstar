//
// LuisPa 2017/01/06
//
// SOLO SE UTILIZA PARA LA GENERACIÓN DEL FICHERO M3U
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

const cadenas_din = [
  // {
  //   "movistar_numero": "8",
  //   "tvh_nombre": "Telemadrid HD",
  //   "tvh_tag": "HD",
  //   "tvh_fuente": "http://mi.servidor.home:1234"
  // }
];

export default cadenas_din;
