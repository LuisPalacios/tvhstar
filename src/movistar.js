//
//  LuisPa 2017/01/05
//
//  Controlador que trata con el servidor de Movistar Plus
//
'use strict';

// Imports
import rp from 'request-promise';
import fs from 'fs';

// Mis imports
import Utils from './utils';

// Controlador
const movistar = {

  // Send an API Rest Query to the remote pacoapp-db-mongo to
  // create all the items that I've passed.
  //
  requestEPG: function (progPreferences) {

    // Aseguremos...
    if (!progPreferences || !progPreferences.urlMovistar ||
      !progPreferences.cadenas || !progPreferences.diasInicioFin) {
      console.error('ERROR INTERNO GRAVE!! Movistar.requestEPG necesita argumentos.')
      process.exit();
    }

    // Creo el array con los id's
    let arrayCadenas = [];
    progPreferences.cadenas.map(cadena => {
      if (cadena.movistar_epg) {
        arrayCadenas.push(cadena.movistar_id)
      }
    });

    // Preparo la petición
    let options = {
      method: 'POST',
      uri: progPreferences.urlMovistar,
      form: {
        fechaInicio: progPreferences.diasInicioFin.fechaInicio,
        fechaFin: progPreferences.diasInicioFin.fechaFin,
        genero: '0',
        selPredefinicion: '0',
        formato: 'xml',
        cadena: arrayCadenas,
      },
      headers: {
        /* 'content-type': 'application/x-www-form-urlencoded' */ // Set automatically
      },
      resolveWithFullResponse: true,
    }

    // Realizamos la petición
    console.log(`  => Se solicita el EPG para ${options.form.cadena.length} canales`)
    return new Promise((resolve, reject) => {
      rp(options)
        .then((response) => {
          console.log(`  => OK, se ha recibido el EPG correctamente`);
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

}

export default movistar;
