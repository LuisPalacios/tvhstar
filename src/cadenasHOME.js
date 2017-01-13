//
// LuisPa 2017/01/06
//
// Aquí configuro todos los canales de TV que quiero tener disponibles en los 
// dispositivos que van por la red casera (LAN/Ethernet), por lo que voy a 
// configurar las versiones HD de lo mismos (excepto aquellos que solo emiten en SD). 
//
// DISCLAIMER: Seguro que faltarán algunos canales, bien porque no los 
// consumo, mi demarcación o somplemente no los tengo contratados, 
// edita este fichero a tu gusto
//
// URL's interesantes que he usado para investigar nombres los id's
//  http://www.movistarplus.es/diales/
//  http://www1.movistarplus.es/canal/Hollywood/<movistar_id>  (para FRA EN = FRA%20EN)
//  http://www.movistarplus.es/recorte/m-NEO/canal/<movistar_id>.png
//
// Claves utilizadas. Indico cuales se usan para construir el fichero XMLTV
// y cuales para crear los ficheros M3U que usaré para importación dinámica IPTV en Tvheadend
//
//   "movistar_epg": true,                    // Solicitar el EPG de esta cadena. [XMLTV]
//   "movistar_fuente": "239.0.3.37:8208",    // Dirección streaming al crear el m3u para tvheadend. [M3U]
//   "movistar_id": "TVG",                    // ID interno utilizado por Movistar, necesario para pedir el EPG. [XMLTV]
//   "movistar_nombre": "TV Galicia",         // Nombre del canal original que asigna Movistar. [Informativo y control]
//   "movistar_numero": "151",                // Número de canal original que asigna Movistar. [M3U]
//   "tvh_id": "TVG.es",                      // ID interno que pondré en el fichero M3U para tvheadend. [M3U]
//     Es el identificativo del Canal que usa Tvheadend al importar el fichero 
//     XMLTV y su valor DEBE ser compatible con lo que manda el DTD de xmltv:
//     http://xmltv.cvs.sourceforge.net/viewvc/xmltv/xmltv/xmltv.dtd
//      "..Each channel has one id attribute, which must be unique and should
//      preferably be in the form suggested by RFC2838 (the 'broadcast'
//      element of the grammar in that RFC, in other words, a DNS-like name
//      but without any URI scheme).."
//   "tvh_m3u": true,                         // Añadir este canal al fichero M3U para tvheadend. [M3U]
//   "tvh_nombre": "TV Galicia",              // Nombre del canal que pondré en el fichero M3U para tvheadend. [M3U]
//    "tvh_tag": "HD|HOME"                    // Identifica los Channel Tags (etiquetas) que quieres asignar al canal,   [M3U]
//      Puedes poner varios separándolos por el símbolo " | " (pipe). En mi caso etiqueto los canales 
//      de la siguiente forma: 
//      - HD : Aquellos que emiten en HD.
//      - SD : Los que emiten en SD. 
//      - TV : Se lo asigno a todos aquellos canales que quiero que me salgan en las TV's, en principio 
//             todos los que están en este fichero (cadenas.js) que considero como la lista principal 
//             tener en los TV's en mi casa, ya sean HD o SD. La forma de conseguirlo es crar un usuario 
//             para el KODI de la TV y asociar esta etiqueta "TV" a dicho usuario. 
//   "tvh_fuente": "http://user:pass@otro.servidor.com:9981/stream/chanelid/202116655?ticket=FA7504..."   [M3U]
//      Este último campo verás que no lo uso pero lo he implementado porque estuve 
//      haciendo pruebas haciendo que un par de canales tirasen desde OTRO Tvheadend. 
//      Si tenemos este campo en la cadena entonces se usará a la hora de crear el M3U 
//      en vez de [uri_prefix]{movistar_fuente}
//
const cadenasHOME = [
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.5.185:8208",
    "movistar_id": "DESCONOCIDO1",
    "movistar_nombre": "Movistar+",
    "movistar_numero": "0",
    "tvh_id": "Movistar.es",
    "tvh_m3u": false,
    "tvh_nombre": "Movistar+",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.185:8208",
    "movistar_id": "TVE",
    "movistar_nombre": "LA 1",
    "movistar_numero": "1",
    "tvh_id": "TVE.es",
    "tvh_m3u": true,
    "tvh_nombre": "La 1 HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.2:8208",
    "movistar_id": "LA2",
    "movistar_nombre": "LA 2",
    "movistar_numero": "2",
    "tvh_id": "LA2.es",
    "tvh_m3u": true,
    "tvh_nombre": "La 2",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.186:8208",
    "movistar_id": "A3",
    "movistar_nombre": "Antena 3",
    "movistar_numero": "3",
    "tvh_id": "A3.es",
    "tvh_m3u": true,
    "tvh_nombre": "Antena 3 HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.177:8208",
    "movistar_id": "C4",
    "movistar_nombre": "Cuatro",
    "movistar_numero": "4",
    "tvh_id": "C4.es",
    "tvh_m3u": true,
    "tvh_nombre": "Cuatro HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.176:8208",
    "movistar_id": "T5",
    "movistar_nombre": "Telecinco",
    "movistar_numero": "5",
    "tvh_id": "T5.es",
    "tvh_m3u": true,
    "tvh_nombre": "Telecinco HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.187:8208",
    "movistar_id": "SEXTA",
    "movistar_nombre": "La Sexta",
    "movistar_numero": "6",
    "tvh_id": "SEXTA.es",
    "tvh_m3u": true,
    "tvh_nombre": "La Sexta HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.187:8208",
    "movistar_id": "MV3",
    "movistar_nombre": "#0",
    "movistar_numero": "7",
    "tvh_id": "MV3.es",
    "tvh_m3u": true,
    "tvh_nombre": "#0 HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.0.25:8208",
    "movistar_id": "DESCONOCIDO2",
    "movistar_nombre": "Telemadrid",
    "movistar_numero": "8",
    "tvh_id": "Telemadrid.es",
    "tvh_m3u": true,
    "tvh_nombre": "Telemadrid",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.26:8208",
    "movistar_id": "OTRA",
    "movistar_nombre": "La Otra",
    "movistar_numero": "9",
    "tvh_id": "OTRA.es",
    "tvh_m3u": true,
    "tvh_nombre": "La Otra",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.0.184:8208",
    "movistar_id": "CABECERA_SERIES",
    "movistar_nombre": "SERIES",
    "movistar_numero": "10",
    "tvh_id": "CABECERA_SERIES.es",
    "tvh_m3u": true,
    "tvh_nombre": "CABECERA SERIES HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.250:8208",
    "movistar_id": "CPSER",
    "movistar_nombre": "Movistar Series",
    "movistar_numero": "11",
    "tvh_id": "CPSER.es",
    "tvh_m3u": true,
    "tvh_nombre": "Movistar Series HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.83:8208",
    "movistar_id": "MV2",
    "movistar_nombre": "Movistar Series Xtra",
    "movistar_numero": "12",
    "tvh_id": "MV2.es",
    "tvh_m3u": true,
    "tvh_nombre": "Movistar Series Xtra HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.9.134:8208",
    "movistar_id": "FOXGE",
    "movistar_nombre": "Fox",
    "movistar_numero": "13",
    "tvh_id": "FOXGE.es",
    "tvh_m3u": true,
    "tvh_nombre": "FOX HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.9.131:8208",
    "movistar_id": "AXN",
    "movistar_nombre": "AXN",
    "movistar_numero": "14",
    "tvh_id": "AXN.es",
    "tvh_m3u": true,
    "tvh_nombre": "AXN HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.87:8208",
    "movistar_id": "TNT",
    "movistar_nombre": "TNT",
    "movistar_numero": "15",
    "tvh_id": "TNT.es",
    "tvh_m3u": true,
    "tvh_nombre": "TNT HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.174:8208",
    "movistar_id": "PCM",
    "movistar_nombre": "Comedy Central",
    "movistar_numero": "16",
    "tvh_id": "PCM.es",
    "tvh_m3u": true,
    "tvh_nombre": "Comedy Central HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.74:8208",
    "movistar_id": "CL13",
    "movistar_nombre": "Calle 13",
    "movistar_numero": "17",
    "tvh_id": "CL13.es",
    "tvh_m3u": true,
    "tvh_nombre": "Calle 13 HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.71:8208",
    "movistar_id": "COSMO",
    "movistar_nombre": "COSMO",
    "movistar_numero": "18",
    "tvh_id": "COSMO.es",
    "tvh_m3u": true,
    "tvh_nombre": "COSMO HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.9.132:8208",
    "movistar_id": "AMC",
    "movistar_nombre": "AMC",
    "movistar_numero": "19",
    "tvh_id": "AMC.es",
    "tvh_m3u": true,
    "tvh_nombre": "AMC HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.86:8208",
    "movistar_id": "FOXCR",
    "movistar_nombre": "Fox Life",
    "movistar_numero": "20",
    "tvh_id": "FOXCR.es",
    "tvh_m3u": true,
    "tvh_nombre": "FOX life HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.79:8208",
    "movistar_id": "SET",
    "movistar_nombre": "AXN White",
    "movistar_numero": "21",
    "tvh_id": "SET.es",
    "tvh_m3u": true,
    "tvh_nombre": "AXN White HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.75:8208",
    "movistar_id": "SCI-FI",
    "movistar_nombre": "SYFY",
    "movistar_numero": "22",
    "tvh_id": "SCI-FI.es",
    "tvh_m3u": true,
    "tvh_nombre": "SyFy HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.170:8208",
    "movistar_id": "NONSTP",
    "movistar_nombre": "Non Stop People",
    "movistar_numero": "23",
    "tvh_id": "NONSTP.es",
    "tvh_m3u": true,
    "tvh_nombre": "Non Stop People HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.211:8208",
    "movistar_id": "MTV",
    "movistar_nombre": "MTV",
    "movistar_numero": "24",
    "tvh_id": "MTV.es",
    "tvh_m3u": true,
    "tvh_nombre": "MTV",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.84:8208",
    "movistar_id": "FDFIC",
    "movistar_nombre": "Factoría de Ficción",
    "movistar_numero": "25",
    "tvh_id": "FDFIC.es",
    "tvh_m3u": true,
    "tvh_nombre": "Factoría de Ficción",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.107:8208",
    "movistar_id": "NEOX",
    "movistar_nombre": "Neox",
    "movistar_numero": "26",
    "tvh_id": "NEOX.es",
    "tvh_m3u": true,
    "tvh_nombre": "Neox",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.181:8208",
    "movistar_id": "ATRESS",
    "movistar_nombre": "Atreseries",
    "movistar_numero": "27",
    "tvh_id": "ATRESS.es",
    "tvh_m3u": true,
    "tvh_nombre": "Atreseries HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.59:8208",
    "movistar_id": "ENERGY",
    "movistar_nombre": "Energy",
    "movistar_numero": "28",
    "tvh_id": "ENERGY.es",
    "tvh_m3u": true,
    "tvh_nombre": "Energy",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.3.30:8208",
    "movistar_id": "CABECERA_CINE",
    "movistar_nombre": "CINE",
    "movistar_numero": "30",
    "tvh_id": "CABECERA_CINE.es",
    "tvh_m3u": true,
    "tvh_nombre": "CABECERA CINE",
    "tvh_tag": "SD|Wifi"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.111:8208",
    "movistar_id": "MV1",
    "movistar_nombre": "Movistar Estrenos",
    "movistar_numero": "31",
    "tvh_id": "MV1.es",
    "tvh_m3u": true,
    "tvh_nombre": "Movistar Estrenos HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.112:8208",
    "movistar_id": "CPXTRA",
    "movistar_nombre": "Movistar Xtra",
    "movistar_numero": "32",
    "tvh_id": "CPXTRA.es",
    "tvh_m3u": true,
    "tvh_nombre": "Movistar Xtra HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.113:8208",
    "movistar_id": "CPACCI",
    "movistar_nombre": "Movistar Acción",
    "movistar_numero": "33",
    "tvh_id": "CPACCI.es",
    "tvh_m3u": true,
    "tvh_nombre": "Movistar Acción HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.114:8208",
    "movistar_id": "CPCOME",
    "movistar_nombre": "Movistar Comedia",
    "movistar_numero": "34",
    "tvh_id": "CPCOME.es",
    "tvh_m3u": true,
    "tvh_nombre": "Movistar Comedia HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.115:8208",
    "movistar_id": "CPCOLE",
    "movistar_nombre": "Movistar DCine",
    "movistar_numero": "35",
    "tvh_id": "CPCOLE.es",
    "tvh_m3u": true,
    "tvh_nombre": "Movistar DCine HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.3.45:8208",
    "movistar_id": "DCESP",
    "movistar_nombre": "Movistar Cine Español",
    "movistar_numero": "36",
    "tvh_id": "DCESP.es",
    "tvh_m3u": true,
    "tvh_nombre": "Movistar Cine Español HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.89:8208",
    "movistar_id": "TCM",
    "movistar_nombre": "TCM",
    "movistar_numero": "37",
    "tvh_id": "TCM.es",
    "tvh_m3u": true,
    "tvh_nombre": "TCM HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.76:8208",
    "movistar_id": "HOLLYW",
    "movistar_nombre": "Hollywood",
    "movistar_numero": "38",
    "tvh_id": "HOLLYW.es",
    "tvh_m3u": true,
    "tvh_nombre": "Hollywood HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.72:8208",
    "movistar_id": "SUNDAN",
    "movistar_nombre": "Sundance",
    "movistar_numero": "39",
    "tvh_id": "SUNDAN.es",
    "tvh_m3u": true,
    "tvh_nombre": "Sundance Channel HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.39:8208",
    "movistar_id": "DARK",
    "movistar_nombre": "DARK",
    "movistar_numero": "40",
    "tvh_id": "DARK.es",
    "tvh_m3u": true,
    "tvh_nombre": "DARK",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.91:8208",
    "movistar_id": "13TV",
    "movistar_nombre": "13 TV",
    "movistar_numero": "41",
    "tvh_id": "13TV.es",
    "tvh_m3u": true,
    "tvh_nombre": "13 TV",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.34:8208",
    "movistar_id": "TEN",
    "movistar_nombre": "TEN",
    "movistar_numero": "42",
    "tvh_id": "TEN.es",
    "tvh_m3u": true,
    "tvh_nombre": "TEN",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.90:8208",
    "movistar_id": "PARCH",
    "movistar_nombre": "Paramount Channel",
    "movistar_numero": "43",
    "tvh_id": "PARCH.es",
    "tvh_m3u": true,
    "tvh_nombre": "Paramount Channel",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.0.180:8208",
    "movistar_id": "CABECERA DEPORTES",
    "movistar_nombre": "DEPORTES",
    "movistar_numero": "44",
    "tvh_id": "CABECERA_DEPORTES.es",
    "tvh_m3u": true,
    "tvh_nombre": "CABECERA DEPORTES HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.6.14:8208",
    "movistar_id": "CPFUT",
    "movistar_nombre": "Movistar Fútbol",
    "movistar_numero": "45",
    "tvh_id": "CPFUT.es",
    "tvh_m3u": true,
    "tvh_nombre": "Movistar Fútbol HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.84:8208",
    "movistar_id": "CPPART",
    "movistar_nombre": "Movistar Partidazo",
    "movistar_numero": "46",
    "tvh_id": "CPPART.es",
    "tvh_m3u": true,
    "tvh_nombre": "Movistar Partidazo HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.106:8208",
    "movistar_id": "BELIGA",
    "movistar_nombre": "Bein LaLiga",
    "movistar_numero": "47",
    "tvh_id": "BELIGA.es",
    "tvh_m3u": true,
    "tvh_nombre": "Bein LaLiga HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.179:8208",
    "movistar_id": "BELIG1",
    "movistar_nombre": "Bein LaLiga 1",
    "movistar_numero": "48",
    "tvh_id": "BELIG1.es",
    "tvh_m3u": true,
    "tvh_nombre": "Bein LaLiga 1 HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.180:8208",
    "movistar_id": "BELIG2",
    "movistar_nombre": "Bein LaLiga 2",
    "movistar_numero": "49",
    "tvh_id": "BELIG2.es",
    "tvh_m3u": true,
    "tvh_nombre": "Bein LaLiga 2 HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.9.80:8208",
    "movistar_id": "CHUEFA",
    "movistar_nombre": "beIN SPORTS ",
    "movistar_numero": "50",
    "tvh_id": "CHUEFA.es",
    "tvh_m3u": true,
    "tvh_nombre": "beIN SPORTS HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.9.81:8208",
    "movistar_id": "BEMAX1",
    "movistar_nombre": "Bein Max1",
    "movistar_numero": "51",
    "tvh_id": "BEMAX1.es",
    "tvh_m3u": true,
    "tvh_nombre": "Bein Max1 HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.3.102:8208",
    "movistar_id": "BEMAX2",
    "movistar_nombre": "Bein Max2",
    "movistar_numero": "52",
    "tvh_id": "BEMAX2.es",
    "tvh_m3u": true,
    "tvh_nombre": "Bein Max2",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.179:8208",
    "movistar_id": "REALM",
    "movistar_nombre": "Real Madrid TV",
    "movistar_numero": "53",
    "tvh_id": "REALM.es",
    "tvh_m3u": true,
    "tvh_nombre": "Real Madrid TV HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.3.65:8208",
    "movistar_id": "BARNA",
    "movistar_nombre": "Barça TV",
    "movistar_numero": "54",
    "tvh_id": "BARNA.es",
    "tvh_m3u": false,
    "tvh_nombre": "Barça TV",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.248:8208",
    "movistar_id": "CPDEP",
    "movistar_nombre": "Movistar Deportes 1",
    "movistar_numero": "55",
    "tvh_id": "CPDEP.es",
    "tvh_m3u": true,
    "tvh_nombre": "Movistar Deportes 1 HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.245:8208",
    "movistar_id": "CPD2",
    "movistar_nombre": "Movistar Deportes 2",
    "movistar_numero": "56",
    "tvh_id": "CPD2.es",
    "tvh_m3u": true,
    "tvh_nombre": "Movistar Deportes 2 HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.246:8208",
    "movistar_id": "MVF1",
    "movistar_nombre": "Movistar Fórmula 1",
    "movistar_numero": "57",
    "tvh_id": "MVF1.es",
    "tvh_m3u": true,
    "tvh_nombre": "Movistar Fórmula 1 HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.107:8208",
    "movistar_id": "MVMTGP",
    "movistar_nombre": "Movistar Moto GP",
    "movistar_numero": "58",
    "tvh_id": "MVMTGP.es",
    "tvh_m3u": true,
    "tvh_nombre": "Movistar Moto GP HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.249:8208",
    "movistar_id": "GOLF%2B",
    "movistar_nombre": "Movistar Golf",
    "movistar_numero": "59",
    "tvh_id": "GOLF.TV.es",
    "tvh_m3u": true,
    "tvh_nombre": "Movistar Golf HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.9.135:8208",
    "movistar_id": "ESP",
    "movistar_nombre": "Eurosport 1",
    "movistar_numero": "60",
    "tvh_id": "ESP.es",
    "tvh_m3u": true,
    "tvh_nombre": "Eurosport 1 HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.105:8208",
    "movistar_id": "ESP2",
    "movistar_nombre": "Eurosport 2",
    "movistar_numero": "61",
    "tvh_id": "ESP2.es",
    "tvh_m3u": true,
    "tvh_nombre": "Eurosport 2 HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.189:8208",
    "movistar_id": "GOLHD",
    "movistar_nombre": "GOL",
    "movistar_numero": "62",
    "tvh_id": "GOLHD.es",
    "tvh_m3u": true,
    "tvh_nombre": "GOL HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.188:8208",
    "movistar_id": "TDEP",
    "movistar_nombre": "Teledeporte",
    "movistar_numero": "63",
    "tvh_id": "TDEP.es",
    "tvh_m3u": true,
    "tvh_nombre": "Teledeporte HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.97:8208",
    "movistar_id": "FUTREP",
    "movistar_nombre": "Canal Fútbol Replay",
    "movistar_numero": "64",
    "tvh_id": "FUTREP.es",
    "tvh_m3u": true,
    "tvh_nombre": "Canal Fútbol Replay",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.6.54:8208",
    "movistar_id": "CAZPES",
    "movistar_nombre": "Caza y Pesca",
    "movistar_numero": "65",
    "tvh_id": "CAZPES.es",
    "tvh_m3u": false,
    "tvh_nombre": "Caza y Pesca HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.5.188:8208",
    "movistar_id": "IBERAL",
    "movistar_nombre": "Iberalia TV",
    "movistar_numero": "66",
    "tvh_id": "IBERAL.es",
    "tvh_m3u": false,
    "tvh_nombre": "Iberalia TV HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.191:8208",
    "movistar_id": "CFERIA",
    "movistar_nombre": "Toros TV",
    "movistar_numero": "67",
    "tvh_id": "CFERIA.es",
    "tvh_m3u": true,
    "tvh_nombre": "Toros TV HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.78:8208",
    "movistar_id": "NATGEO",
    "movistar_nombre": "National Geographic",
    "movistar_numero": "70",
    "tvh_id": "NATGEO.es",
    "tvh_m3u": true,
    "tvh_nombre": "National Geographic HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.9.136:8208",
    "movistar_id": "NATGW",
    "movistar_nombre": "Nat Geo Wild",
    "movistar_numero": "71",
    "tvh_id": "NATGW.es",
    "tvh_m3u": true,
    "tvh_nombre": "Nat Geo Wild HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.19:8208",
    "movistar_id": "HIST",
    "movistar_nombre": "Historia",
    "movistar_numero": "72",
    "tvh_id": "HIST.es",
    "tvh_m3u": true,
    "tvh_nombre": "Historia",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.77:8208",
    "movistar_id": "DCR",
    "movistar_nombre": "Discovery",
    "movistar_numero": "73",
    "tvh_id": "DCR.es",
    "tvh_m3u": true,
    "tvh_nombre": "Discovery Channel HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.82:8208",
    "movistar_id": "ODISEA",
    "movistar_nombre": "Odisea",
    "movistar_numero": "74",
    "tvh_id": "ODISEA.es",
    "tvh_m3u": true,
    "tvh_nombre": "Odisea HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.38:8208",
    "movistar_id": "BIOGRA",
    "movistar_nombre": "A&E",
    "movistar_numero": "75",
    "tvh_id": "BIOGRA.es",
    "tvh_m3u": true,
    "tvh_nombre": "A&E",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.5.73:8208",
    "movistar_id": "VJR",
    "movistar_nombre": "Viajar",
    "movistar_numero": "76",
    "tvh_id": "VJR.es",
    "tvh_m3u": true,
    "tvh_nombre": "Viajar HD",
    "tvh_tag": "HD|HOME"
  }, 
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.32:8208",
    "movistar_id": "DCRMAX",
    "movistar_nombre": "Discovery Max",
    "movistar_numero": "77",
    "tvh_id": "DCRMAX.es",
    "tvh_m3u": true,
    "tvh_nombre": "Discovery Max",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.57:8208",
    "movistar_id": "CYM",
    "movistar_nombre": "Crimen + Investigación",
    "movistar_numero": "78",
    "tvh_id": "CYM.es",
    "tvh_m3u": true,
    "tvh_nombre": "Crimen & Investigación",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.65:8208",
    "movistar_id": "CCTV-E",
    "movistar_nombre": "CCTV Español",
    "movistar_numero": "79",
    "tvh_id": "CCTV-E.es",
    "tvh_m3u": true,
    "tvh_nombre": "CCTV Español",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.27:8208",
    "movistar_id": "CACOC",
    "movistar_nombre": "Canal Cocina",
    "movistar_numero": "80",
    "tvh_id": "CACOC.es",
    "tvh_m3u": true,
    "tvh_nombre": "Canal Cocina",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.71:8208",
    "movistar_id": "DECASA",
    "movistar_nombre": "Canal Decasa",
    "movistar_numero": "81",
    "tvh_id": "DECASA.es",
    "tvh_m3u": true,
    "tvh_nombre": "Canal Decasa",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.6:8208",
    "movistar_id": "DKISS",
    "movistar_nombre": "DKISS",
    "movistar_numero": "82",
    "tvh_id": "DKISS.es",
    "tvh_m3u": true,
    "tvh_nombre": "DKISS",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.48:8208",
    "movistar_id": "DIVINI",
    "movistar_nombre": "Divinity",
    "movistar_numero": "83",
    "tvh_id": "DIVINI.es",
    "tvh_m3u": true,
    "tvh_nombre": "Divinity",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.106:8208",
    "movistar_id": "NOVA",
    "movistar_nombre": "Nova",
    "movistar_numero": "84",
    "tvh_id": "NOVA.es",
    "tvh_m3u": true,
    "tvh_nombre": "Nova",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.3.31:8208",
    "movistar_id": "MEGA",
    "movistar_nombre": "Mega",
    "movistar_numero": "85",
    "tvh_id": "MEGA.es",
    "tvh_m3u": true,
    "tvh_nombre": "Mega",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.17:8208",
    "movistar_id": "BEMAD",
    "movistar_nombre": "BE MAD",
    "movistar_numero": "86",
    "tvh_id": "BEMAD.es",
    "tvh_m3u": true,
    "tvh_nombre": "BEMAD",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.99:8208",
    "movistar_id": "GARAGE",
    "movistar_nombre": "Garage TV",
    "movistar_numero": "87",
    "tvh_id": "GARAGE.es",
    "tvh_m3u": true,
    "tvh_nombre": "Garage TV",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.45:8208",
    "movistar_id": "ORBE21",
    "movistar_nombre": "Canal Orbe 21",
    "movistar_numero": "88",
    "tvh_id": "ORBE21.es",
    "tvh_m3u": true,
    "tvh_nombre": "Canal Orbe 21",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.113:8208",
    "movistar_id": "BABY",
    "movistar_nombre": "Baby TV",
    "movistar_numero": "90",
    "tvh_id": "BABY.es",
    "tvh_m3u": true,
    "tvh_nombre": "Baby TV",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.10:8208",
    "movistar_id": "PLAYDC",
    "movistar_nombre": "Disney Junior",
    "movistar_numero": "91",
    "tvh_id": "PLAYDC.es",
    "tvh_m3u": true,
    "tvh_nombre": "Disney Junior",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.117:8208",
    "movistar_id": "PANDA",
    "movistar_nombre": "Canal Panda",
    "movistar_numero": "92",
    "tvh_id": "PANDA.es",
    "tvh_m3u": true,
    "tvh_nombre": "Canal Panda",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.115:8208",
    "movistar_id": "NICKJR",
    "movistar_nombre": "NICK JR",
    "movistar_numero": "93",
    "tvh_id": "NICKJR.es",
    "tvh_m3u": true,
    "tvh_nombre": "Nick Jr",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.69:8208",
    "movistar_id": "NICK",
    "movistar_nombre": "Nickelodeon",
    "movistar_numero": "94",
    "tvh_id": "NICK.es",
    "tvh_m3u": true,
    "tvh_nombre": "Nickelodeon",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.11:8208",
    "movistar_id": "DCHXD",
    "movistar_nombre": "Disney XD",
    "movistar_numero": "95",
    "tvh_id": "DCHXD.es",
    "tvh_m3u": true,
    "tvh_nombre": "Disney XD",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.173:8208",
    "movistar_id": "DCH",
    "movistar_nombre": "Disney Channel",
    "movistar_numero": "96",
    "tvh_id": "DCH.es",
    "tvh_m3u": true,
    "tvh_nombre": "Disney Channel HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.66:8208",
    "movistar_id": "BOING",
    "movistar_nombre": "Boing",
    "movistar_numero": "97",
    "tvh_id": "BOING.es",
    "tvh_m3u": true,
    "tvh_nombre": "Boing",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.80:8208",
    "movistar_id": "CLANTV",
    "movistar_nombre": "Clan TVE",
    "movistar_numero": "98",
    "tvh_id": "CLANTV.es",
    "tvh_m3u": true,
    "tvh_nombre": "Clan TVE",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.12:8208",
    "movistar_id": "40TV",
    "movistar_nombre": "Los40",
    "movistar_numero": "103",
    "tvh_id": "Los40.es",
    "tvh_m3u": true,
    "tvh_nombre": "Los40",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.75:8208",
    "movistar_id": "VH1",
    "movistar_nombre": "VH1",
    "movistar_numero": "105",
    "tvh_id": "VH1.es",
    "tvh_m3u": true,
    "tvh_nombre": "VH1",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.4.65:8208",
    "movistar_id": "MEZZO",
    "movistar_nombre": "Mezzo",
    "movistar_numero": "107",
    "tvh_id": "MEZZO.es",
    "tvh_m3u": false,
    "tvh_nombre": "Mezzo HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "39.0.9.137:8208",
    "movistar_id": "CLASSI",
    "movistar_nombre": "Classica HD",
    "movistar_numero": "109",
    "tvh_id": "CLASSI.es",
    "tvh_m3u": false,
    "tvh_nombre": "Classica HD",
    "tvh_tag": "HD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.78:8208",
    "movistar_id": "24H",
    "movistar_nombre": "24 Horas",
    "movistar_numero": "112",
    "tvh_id": "24H.es",
    "tvh_m3u": true,
    "tvh_nombre": "24 Horas",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.30:8208",
    "movistar_id": "BBC",
    "movistar_nombre": "BBC World",
    "movistar_numero": "113",
    "tvh_id": "BBC.es",
    "tvh_m3u": true,
    "tvh_nombre": "BBC World News",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.40:8208",
    "movistar_id": "CNN",
    "movistar_nombre": "CNN Int",
    "movistar_numero": "114",
    "tvh_id": "CNN.es",
    "tvh_m3u": true,
    "tvh_nombre": "CNN International",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.7.65:8208",
    "movistar_id": "FOXNWS",
    "movistar_nombre": "Fox News",
    "movistar_numero": "115",
    "tvh_id": "FOXNWS.es",
    "tvh_m3u": true,
    "tvh_nombre": "FOX News",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.28:8208",
    "movistar_id": "ENW",
    "movistar_nombre": "Euronews",
    "movistar_numero": "116",
    "tvh_id": "ENW.es",
    "tvh_m3u": true,
    "tvh_nombre": "Euronews",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.7.66:8208",
    "movistar_id": "ALJAZE",
    "movistar_nombre": "Al Jazeera",
    "movistar_numero": "117",
    "tvh_id": "ALJAZE.es",
    "tvh_m3u": true,
    "tvh_nombre": "Al Jazeera",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.7.67:8208",
    "movistar_id": "FRA EN",
    "movistar_nombre": "FRANCE 24",
    "movistar_numero": "118",
    "tvh_id": "FRA.EN.es",
    "tvh_m3u": true,
    "tvh_nombre": "France 24",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.7.67:8208",
    "movistar_id": "RTESP",
    "movistar_nombre": "RT Español",
    "movistar_numero": "119",
    "tvh_id": "RTESP.es",
    "tvh_m3u": true,
    "tvh_nombre": "RT Español",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.7.69:8208",
    "movistar_id": "NBC",
    "movistar_nombre": "CNBC",
    "movistar_numero": "120",
    "tvh_id": "NBC.es",
    "tvh_m3u": true,
    "tvh_nombre": "CNBC Europe",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.31:8208",
    "movistar_id": "TV5",
    "movistar_nombre": "TV5MONDE",
    "movistar_numero": "122",
    "tvh_id": "TV5.es",
    "tvh_m3u": true,
    "tvh_nombre": "TV5MONDE",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.29:8208",
    "movistar_id": "BL",
    "movistar_nombre": "Bloomberg",
    "movistar_numero": "123",
    "tvh_id": "BL.es",
    "tvh_m3u": true,
    "tvh_nombre": "Bloomberg",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.63:8208",
    "movistar_id": "INTECO",
    "movistar_nombre": "Intereconomía TV",
    "movistar_numero": "124",
    "tvh_id": "INTECO.es",
    "tvh_m3u": true,
    "tvh_nombre": "Intereconomía TV",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.85:8208",
    "movistar_id": "LIBDIG",
    "movistar_nombre": "Libertad Digital",
    "movistar_numero": "125",
    "tvh_id": "LIBDIG.es",
    "tvh_m3u": true,
    "tvh_nombre": "Libertad Digital",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.220:8208",
    "movistar_id": "312",
    "movistar_nombre": "i24news",
    "movistar_numero": "128",
    "tvh_id": "312.es",
    "tvh_m3u": true,
    "tvh_nombre": "i24news",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": true,
    "movistar_fuente": "239.0.0.221:8208",
    "movistar_id": "CNCWOR",
    "movistar_nombre": "CNC World",
    "movistar_numero": "129",
    "tvh_id": "CNCWOR.es",
    "tvh_m3u": true,
    "tvh_nombre": "CNC World",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.8.3:8208",
    "movistar_id": "TELEFE",
    "movistar_nombre": "Telefe Internacional",
    "movistar_numero": "134",
    "tvh_id": "TELEFE.es",
    "tvh_m3u": false,
    "tvh_nombre": "Telefe Internacional",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.8.193:8208",
    "movistar_id": "GALAV",
    "movistar_nombre": "Canal de las Estrellas",
    "movistar_numero": "135",
    "tvh_id": "GALAV.es",
    "tvh_m3u": false,
    "tvh_nombre": "Canal de las Estrellas",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.7.129:8208",
    "movistar_id": "CARACO",
    "movistar_nombre": "Caracol TV",
    "movistar_numero": "136",
    "tvh_id": "CARACO.es",
    "tvh_m3u": false,
    "tvh_nombre": "Caracol TV",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.8.2:8208",
    "movistar_id": "TVREC",
    "movistar_nombre": "TV RECORD",
    "movistar_numero": "137",
    "tvh_id": "TVREC.es",
    "tvh_m3u": false,
    "tvh_nombre": "TV Record",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.8.1:8208",
    "movistar_id": "CHILE",
    "movistar_nombre": "TV Chile",
    "movistar_numero": "138",
    "tvh_id": "CHILE.es",
    "tvh_m3u": false,
    "tvh_nombre": "TV Chile",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.7.131:8208",
    "movistar_id": "COLOMB",
    "movistar_nombre": "TV Colombia",
    "movistar_numero": "139",
    "tvh_id": "COLOMB.es",
    "tvh_m3u": false,
    "tvh_nombre": "TV Colombia",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.8.68:8208",
    "movistar_id": "AZMUND",
    "movistar_nombre": "AZ Mundo",
    "movistar_numero": "140",
    "tvh_id": "AZMUND.es",
    "tvh_m3u": false,
    "tvh_nombre": "AZ Mundo",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.8.67:8208",
    "movistar_id": "CUBAV",
    "movistar_nombre": "Cubavisión",
    "movistar_numero": "141",
    "tvh_id": "CUBAV.es",
    "tvh_m3u": false,
    "tvh_nombre": "Cubavisión",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.8.69:8208",
    "movistar_id": "TLESUR",
    "movistar_nombre": "Telesur",
    "movistar_numero": "142",
    "tvh_id": "TLESUR.es",
    "tvh_m3u": false,
    "tvh_nombre": "Telesur",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.0.1:8208",
    "movistar_id": "ANTV",
    "movistar_nombre": "Canal Sur Andalucía",
    "movistar_numero": "150",
    "tvh_id": "ANTV.es",
    "tvh_m3u": false,
    "tvh_nombre": "Canal Sur Andalucía",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.3.37:8208",
    "movistar_id": "TVG",
    "movistar_nombre": "TV Galicia",
    "movistar_numero": "151",
    "tvh_id": "TVG.es",
    "tvh_m3u": false,
    "tvh_nombre": "TV Galicia",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.3.36:8208",
    "movistar_id": "TVC",
    "movistar_nombre": "TV3 Cat",
    "movistar_numero": "153",
    "tvh_id": "TVC.es",
    "tvh_m3u": false,
    "tvh_nombre": "TV3 Cat",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.0.60:8208",
    "movistar_id": "ETB",
    "movistar_nombre": "ETB Sat",
    "movistar_numero": "154",
    "tvh_id": "ETB.es",
    "tvh_m3u": false,
    "tvh_nombre": "ETB Sat",
    "tvh_tag": "SD|HOME"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.0.81:8208",
    "movistar_id": "ARAGON",
    "movistar_nombre": "Aragón TV Int",
    "movistar_numero": "155",
    "tvh_id": "ARAGON.es",
    "tvh_m3u": false,
    "tvh_nombre": "Aragón TV Int",
    "tvh_tag": "SD|HOME"
  }
];


export default cadenasHOME;

