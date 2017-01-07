//
// LuisPa 2017/01/06
//
// SOLO SE UTILIZA PARA LA GENERACIÓN DEL FICHERO M3U
//
//
// Lista de canales en SD que voy a añadir el fichero m3u. Son los 
// mismos canales que ya tengo en cadenas.js pero la versión "SD" que 
// añado a partir del canal 200 en mi fichero tv.m3u, muy útiles para 
// cuando veo los canales desde dispositivos móviles. 
//
// NOTA: Este fichero está todavía WORK IN PROGRESS !!!!!!!!!!
//
// Cadenas de TV

const cadenassd = [
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.0.77:8208",
    "movistar_id": "TVE",
    "movistar_nombre": "LA 1",
    "movistar_numero": 201,
    "tvh_id": "TVE.es",
    "tvh_m3u": true,
    "tvh_nombre": "La 1",
    "tvh_tag": "SD"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.0.3:8208",
    "movistar_id": "A3",
    "movistar_nombre": "Antena 3",
    "movistar_numero": 203,
    "tvh_id": "A3.es",
    "tvh_m3u": true,
    "tvh_nombre": "Antena 3",
    "tvh_tag": "SD"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.0.4:8208",
    "movistar_id": "C4",
    "movistar_nombre": "Cuatro",
    "movistar_numero": 204,
    "tvh_id": "C4.es",
    "tvh_m3u": true,
    "tvh_nombre": "Cuatro",
    "tvh_tag": "SD"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.0.5:8208",
    "movistar_id": "T5",
    "movistar_nombre": "Telecinco",
    "movistar_numero": 205,
    "tvh_id": "T5.es",
    "tvh_m3u": true,
    "tvh_nombre": "Telecinco",
    "tvh_tag": "SD"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.0.58:8208",
    "movistar_id": "SEXTA",
    "movistar_nombre": "La Sexta",
    "movistar_numero": 206,
    "tvh_id": "SEXTA.es",
    "tvh_m3u": true,
    "tvh_nombre": "La Sexta",
    "tvh_tag": "SD"
  },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.0.74:8208",
    "movistar_id": "FOXGE",
    "movistar_nombre": "Fox",
    "movistar_numero": 213,
    "tvh_id": "FOXGE.es",
    "tvh_m3u": true,
    "tvh_nombre": "FOX",
    "tvh_tag": "SD"
  },





  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.9.131:8208",
  //   "movistar_id": "AXN",
  //   "movistar_nombre": "AXN",
  //   "movistar_numero": 214,
  //   "tvh_id": "AXN.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "AXN",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.87:8208",
  //   "movistar_id": "TNT",
  //   "movistar_nombre": "TNT",
  //   "movistar_numero": 215,
  //   "tvh_id": "TNT.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "TNT",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.174:8208",
  //   "movistar_id": "PCM",
  //   "movistar_nombre": "Comedy Central",
  //   "movistar_numero": 216,
  //   "tvh_id": "PCM.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Comedy Central",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.74:8208",
  //   "movistar_id": "CL13",
  //   "movistar_nombre": "Calle 13",
  //   "movistar_numero": 217,
  //   "tvh_id": "CL13.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Calle 13",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.71:8208",
  //   "movistar_id": "COSMO",
  //   "movistar_nombre": "COSMO",
  //   "movistar_numero": 218,
  //   "tvh_id": "COSMO.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "COSMO",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.9.132:8208",
  //   "movistar_id": "AMC",
  //   "movistar_nombre": "AMC",
  //   "movistar_numero": 219,
  //   "tvh_id": "AMC.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "AMC",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.86:8208",
  //   "movistar_id": "FOXCR",
  //   "movistar_nombre": "Fox Life",
  //   "movistar_numero": 220,
  //   "tvh_id": "FOXCR.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "FOX life",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.79:8208",
  //   "movistar_id": "SET",
  //   "movistar_nombre": "AXN White",
  //   "movistar_numero": 221,
  //   "tvh_id": "SET.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "AXN White",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.75:8208",
  //   "movistar_id": "SCI-FI",
  //   "movistar_nombre": "SYFY",
  //   "movistar_numero": 222,
  //   "tvh_id": "SCI-FI.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "SyFy",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.170:8208",
  //   "movistar_id": "NONSTP",
  //   "movistar_nombre": "Non Stop People",
  //   "movistar_numero": 223,
  //   "tvh_id": "NONSTP.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Non Stop People",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.211:8208",
  //   "movistar_id": "MTV",
  //   "movistar_nombre": "MTV",
  //   "movistar_numero": 224,
  //   "tvh_id": "MTV.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "MTV España",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.84:8208",
  //   "movistar_id": "FDFIC",
  //   "movistar_nombre": "Factoría de Ficción",
  //   "movistar_numero": 225,
  //   "tvh_id": "FDFIC.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Factoría de Ficción",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.107:8208",
  //   "movistar_id": "NEOX",
  //   "movistar_nombre": "Neox",
  //   "movistar_numero": 226,
  //   "tvh_id": "NEOX.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Neox",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.181:8208",
  //   "movistar_id": "ATRESS",
  //   "movistar_nombre": "Atreseries",
  //   "movistar_numero": 227,
  //   "tvh_id": "ATRESS.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Atreseries",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.59:8208",
  //   "movistar_id": "ENERGY",
  //   "movistar_nombre": "Energy",
  //   "movistar_numero": 228,
  //   "tvh_id": "ENERGY.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Energy",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.178:8208",
  //   "movistar_id": "CABECERA_CINE",
  //   "movistar_nombre": "CINE",
  //   "movistar_numero": 230,
  //   "tvh_id": "CABECERA_CINE.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "CINE",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.111:8208",
  //   "movistar_id": "MV1",
  //   "movistar_nombre": "Movistar Estrenos",
  //   "movistar_numero": 231,
  //   "tvh_id": "MV1.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Movistar Estrenos",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.112:8208",
  //   "movistar_id": "CPXTRA",
  //   "movistar_nombre": "Movistar Xtra",
  //   "movistar_numero": 232,
  //   "tvh_id": "CPXTRA.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Movistar Xtra",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.113:8208",
  //   "movistar_id": "CPACCI",
  //   "movistar_nombre": "Movistar Acción",
  //   "movistar_numero": 233,
  //   "tvh_id": "CPACCI.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Movistar Acción",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.114:8208",
  //   "movistar_id": "CPCOME",
  //   "movistar_nombre": "Movistar Comedia",
  //   "movistar_numero": 234,
  //   "tvh_id": "CPCOME.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Movistar Comedia",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.115:8208",
  //   "movistar_id": "CPCOLE",
  //   "movistar_nombre": "Movistar DCine",
  //   "movistar_numero": 235,
  //   "tvh_id": "CPCOLE.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Movistar DCine",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.3.45:8208",
  //   "movistar_id": "DCESP",
  //   "movistar_nombre": "Movistar Cine Español",
  //   "movistar_numero": 236,
  //   "tvh_id": "DCESP.es",
  //   "tvh_m3u": false,
  //   "tvh_nombre": "Movistar Cine Español",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.89:8208",
  //   "movistar_id": "TCM",
  //   "movistar_nombre": "TCM",
  //   "movistar_numero": 237,
  //   "tvh_id": "TCM.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "TCM",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.76:8208",
  //   "movistar_id": "HOLLYW",
  //   "movistar_nombre": "Hollywood",
  //   "movistar_numero": 238,
  //   "tvh_id": "HOLLYW.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Hollywood",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.72:8208",
  //   "movistar_id": "SUNDAN",
  //   "movistar_nombre": "Sundance",
  //   "movistar_numero": 239,
  //   "tvh_id": "SUNDAN.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Sundance Channel",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.39:8208",
  //   "movistar_id": "DARK",
  //   "movistar_nombre": "DARK",
  //   "movistar_numero": 240,
  //   "tvh_id": "DARK.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "DARK",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.91:8208",
  //   "movistar_id": "13TV",
  //   "movistar_nombre": "13 TV",
  //   "movistar_numero": 241,
  //   "tvh_id": "13TV.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "13 TV",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.34:8208",
  //   "movistar_id": "TEN",
  //   "movistar_nombre": "TEN",
  //   "movistar_numero": 242,
  //   "tvh_id": "TEN.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "TEN",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.90:8208",
  //   "movistar_id": "PARCH",
  //   "movistar_nombre": "Paramount Channel",
  //   "movistar_numero": 243,
  //   "tvh_id": "PARCH.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Paramount Channel",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.6.14:8208",
  //   "movistar_id": "CPFUT",
  //   "movistar_nombre": "Movistar Fútbol",
  //   "movistar_numero": 245,
  //   "tvh_id": "CPFUT.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Movistar Fútbol",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.84:8208",
  //   "movistar_id": "CPPART",
  //   "movistar_nombre": "Movistar Partidazo",
  //   "movistar_numero": 246,
  //   "tvh_id": "CPPART.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Movistar Partidazo",
  //   "tvh_tag": "SD"
  // },
  {
    "movistar_epg": false,
    "movistar_fuente": "239.0.0.46:8208",
    "movistar_id": "BELIGA",
    "movistar_nombre": "Bein LaLiga",
    "movistar_numero": "247",
    "tvh_id": "BELIGA.es",
    "tvh_m3u": true,
    "tvh_nombre": "Bein LaLiga",
    "tvh_tag": "SD"
  },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.179:8208",
  //   "movistar_id": "BELIG1",
  //   "movistar_nombre": "Bein LaLiga 1",
  //   "movistar_numero": 248,
  //   "tvh_id": "BELIG1.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Bein LaLiga 1",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.180:8208",
  //   "movistar_id": "BELIG2",
  //   "movistar_nombre": "Bein LaLiga 2",
  //   "movistar_numero": 249,
  //   "tvh_id": "BELIG2.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Bein LaLiga 2",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.9.80:8208",
  //   "movistar_id": "CHUEFA",
  //   "movistar_nombre": "beIN SPORTS ",
  //   "movistar_numero": 250,
  //   "tvh_id": "CHUEFA.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "beIN SPORTS",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.9.81:8208",
  //   "movistar_id": "BEMAX1",
  //   "movistar_nombre": "Bein Max1",
  //   "movistar_numero": 250,
  //   "tvh_id": "BEMAX1.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Bein Max1",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.3.102:8208",
  //   "movistar_id": "BEMAX2",
  //   "movistar_nombre": "Bein Max2",
  //   "movistar_numero": 252,
  //   "tvh_id": "BEMAX2.es",
  //   "tvh_m3u": false,
  //   "tvh_nombre": "Bein Max2",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.179:8208",
  //   "movistar_id": "REALM",
  //   "movistar_nombre": "Real Madrid TV",
  //   "movistar_numero": 253,
  //   "tvh_id": "REALM.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Real Madrid TV",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.3.65:8208",
  //   "movistar_id": "BARNA",
  //   "movistar_nombre": "Barça TV",
  //   "movistar_numero": 254,
  //   "tvh_id": "BARNA.es",
  //   "tvh_m3u": false,
  //   "tvh_nombre": "Barça TV",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.248:8208",
  //   "movistar_id": "CPDEP",
  //   "movistar_nombre": "Movistar Deportes 1",
  //   "movistar_numero": 255,
  //   "tvh_id": "CPDEP.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Movistar Deportes 1",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.245:8208",
  //   "movistar_id": "CPD2",
  //   "movistar_nombre": "Movistar Deportes 2",
  //   "movistar_numero": 256,
  //   "tvh_id": "CPD2.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Movistar Deportes 2",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.246:8208",
  //   "movistar_id": "MVF1",
  //   "movistar_nombre": "Movistar Fórmula 1",
  //   "movistar_numero": 257,
  //   "tvh_id": "MVF1.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Movistar Fórmula 1",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.107:8208",
  //   "movistar_id": "MVMTGP",
  //   "movistar_nombre": "Movistar Moto GP",
  //   "movistar_numero": 258,
  //   "tvh_id": "MVMTGP.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Movistar Moto GP",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.249:8208",
  //   "movistar_id": "GOLF%2B",
  //   "movistar_nombre": "Movistar Golf",
  //   "movistar_numero": 259,
  //   "tvh_id": "GOLF.TV.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Movistar Golf",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.9.135:8208",
  //   "movistar_id": "ESP",
  //   "movistar_nombre": "Eurosport 1",
  //   "movistar_numero": 260,
  //   "tvh_id": "ESP.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Eurosport 1",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.105:8208",
  //   "movistar_id": "ESP2",
  //   "movistar_nombre": "Eurosport 2",
  //   "movistar_numero": 261,
  //   "tvh_id": "ESP2.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Eurosport 2",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.189:8208",
  //   "movistar_id": "GOLHD",
  //   "movistar_nombre": "GOL",
  //   "movistar_numero": 262,
  //   "tvh_id": "GOLHD.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "GOL",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.188:8208",
  //   "movistar_id": "TDEP",
  //   "movistar_nombre": "Teledeporte",
  //   "movistar_numero": 263,
  //   "tvh_id": "TDEP.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Teledeporte",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.97:8208",
  //   "movistar_id": "FUTREP",
  //   "movistar_nombre": "Canal Fútbol Replay",
  //   "movistar_numero": 264,
  //   "tvh_id": "FUTREP.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Canal Fútbol Replay",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.6.54:8208",
  //   "movistar_id": "CAZPES",
  //   "movistar_nombre": "Caza y Pesca",
  //   "movistar_numero": 265,
  //   "tvh_id": "CAZPES.es",
  //   "tvh_m3u": false,
  //   "tvh_nombre": "Caza y Pesca",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.188:8208",
  //   "movistar_id": "IBERAL",
  //   "movistar_nombre": "Iberalia TV",
  //   "movistar_numero": 266,
  //   "tvh_id": "IBERAL.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Iberalia TV",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.191:8208",
  //   "movistar_id": "CFERIA",
  //   "movistar_nombre": "Toros TV",
  //   "movistar_numero": 267,
  //   "tvh_id": "CFERIA.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Toros TV",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.7.1:8208",
  //   "movistar_id": "ARTHUR",
  //   "movistar_nombre": "Multideporte 1",
  //   "movistar_numero": 268,
  //   "tvh_id": "ARTHUR.es",
  //   "tvh_m3u": false,
  //   "tvh_nombre": "Multideporte 1",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.78:8208",
  //   "movistar_id": "NATGEO",
  //   "movistar_nombre": "National Geographic",
  //   "movistar_numero": 270,
  //   "tvh_id": "NATGEO.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "National Geographic",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.9.136:8208",
  //   "movistar_id": "NATGW",
  //   "movistar_nombre": "Nat Geo Wild",
  //   "movistar_numero": 271,
  //   "tvh_id": "NATGW.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Nat Geo Wild",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.19:8208",
  //   "movistar_id": "HIST",
  //   "movistar_nombre": "Historia",
  //   "movistar_numero": 272,
  //   "tvh_id": "HIST.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Historia",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.77:8208",
  //   "movistar_id": "DCR",
  //   "movistar_nombre": "Discovery",
  //   "movistar_numero": 273,
  //   "tvh_id": "DCR.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Discovery Channel",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.82:8208",
  //   "movistar_id": "ODISEA",
  //   "movistar_nombre": "Odisea",
  //   "movistar_numero": 274,
  //   "tvh_id": "ODISEA.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Odisea",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.38:8208",
  //   "movistar_id": "BIOGRA",
  //   "movistar_nombre": "A&E",
  //   "movistar_numero": 275,
  //   "tvh_id": "BIOGRA.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "A&E",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.73:8208",
  //   "movistar_id": "VJR",
  //   "movistar_nombre": "Viajar",
  //   "movistar_numero": 276,
  //   "tvh_id": "VJR.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Viajar",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.32:8208",
  //   "movistar_id": "DCRMAX",
  //   "movistar_nombre": "Discovery Max",
  //   "movistar_numero": 277,
  //   "tvh_id": "DCRMAX.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Discovery Max",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.57:8208",
  //   "movistar_id": "CYM",
  //   "movistar_nombre": "Crimen + Investigación",
  //   "movistar_numero": 278,
  //   "tvh_id": "CYM.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Crimen + Investigación",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.65:8208",
  //   "movistar_id": "CCTV-E",
  //   "movistar_nombre": "CCTV Español",
  //   "movistar_numero": 279,
  //   "tvh_id": "CCTV-E.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "CCTV Español",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.27:8208",
  //   "movistar_id": "CACOC",
  //   "movistar_nombre": "Canal Cocina",
  //   "movistar_numero": 280,
  //   "tvh_id": "CACOC.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Canal Cocina",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.71:8208",
  //   "movistar_id": "DECASA",
  //   "movistar_nombre": "Canal Decasa",
  //   "movistar_numero": 281,
  //   "tvh_id": "DECASA.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Canal Decasa",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.6:8208",
  //   "movistar_id": "DKISS",
  //   "movistar_nombre": "DKISS",
  //   "movistar_numero": 282,
  //   "tvh_id": "DKISS.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "DKISS",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.48:8208",
  //   "movistar_id": "DIVINI",
  //   "movistar_nombre": "Divinity",
  //   "movistar_numero": 283,
  //   "tvh_id": "DIVINI.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Divinity",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.106:8208",
  //   "movistar_id": "NOVA",
  //   "movistar_nombre": "Nova",
  //   "movistar_numero": 284,
  //   "tvh_id": "NOVA.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Nova",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.3.31:8208",
  //   "movistar_id": "MEGA",
  //   "movistar_nombre": "Mega",
  //   "movistar_numero": 285,
  //   "tvh_id": "MEGA.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Mega",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.17:8208",
  //   "movistar_id": "BEMAD",
  //   "movistar_nombre": "BE MAD",
  //   "movistar_numero": 286,
  //   "tvh_id": "BEMAD.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "BEMAD",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.99:8208",
  //   "movistar_id": "GARAGE",
  //   "movistar_nombre": "Garage TV",
  //   "movistar_numero": 287,
  //   "tvh_id": "GARAGE.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Garage TV",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.45:8208",
  //   "movistar_id": "ORBE21",
  //   "movistar_nombre": "Canal Orbe 21",
  //   "movistar_numero": 288,
  //   "tvh_id": "ORBE21.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Canal Orbe 21",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.113:8208",
  //   "movistar_id": "BABY",
  //   "movistar_nombre": "Baby TV",
  //   "movistar_numero": 290,
  //   "tvh_id": "BABY.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Baby TV",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.10:8208",
  //   "movistar_id": "PLAYDC",
  //   "movistar_nombre": "Disney Junior",
  //   "movistar_numero": 291,
  //   "tvh_id": "PLAYDC.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Disney Junior",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.117:8208",
  //   "movistar_id": "PANDA",
  //   "movistar_nombre": "Canal Panda",
  //   "movistar_numero": 292,
  //   "tvh_id": "PANDA.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Canal Panda",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.115:8208",
  //   "movistar_id": "NICKJR",
  //   "movistar_nombre": "NICK JR",
  //   "movistar_numero": 293,
  //   "tvh_id": "NICKJR.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Nick Jr",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.69:8208",
  //   "movistar_id": "NICK",
  //   "movistar_nombre": "Nickelodeon",
  //   "movistar_numero": 294,
  //   "tvh_id": "NICK.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Nickelodeon",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.11:8208",
  //   "movistar_id": "DCHXD",
  //   "movistar_nombre": "Disney XD",
  //   "movistar_numero": 295,
  //   "tvh_id": "DCHXD.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Disney XD",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.173:8208",
  //   "movistar_id": "DCH",
  //   "movistar_nombre": "Disney Channel",
  //   "movistar_numero": 296,
  //   "tvh_id": "DCH.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Disney Channel",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.66:8208",
  //   "movistar_id": "BOING",
  //   "movistar_nombre": "Boing",
  //   "movistar_numero": 297,
  //   "tvh_id": "BOING.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Boing",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.80:8208",
  //   "movistar_id": "CLANTV",
  //   "movistar_nombre": "Clan TVE",
  //   "movistar_numero": 298,
  //   "tvh_id": "CLANTV.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Clan TVE",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.12:8208",
  //   "movistar_id": "40TV",
  //   "movistar_nombre": "Los40",
  //   "movistar_numero": 303,
  //   "tvh_id": "Los40.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Los40",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.75:8208",
  //   "movistar_id": "VH1",
  //   "movistar_nombre": "VH1",
  //   "movistar_numero": 305,
  //   "tvh_id": "VH1.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "VH1",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.4.65:8208",
  //   "movistar_id": "MEZZO",
  //   "movistar_nombre": "Mezzo",
  //   "movistar_numero": 307,
  //   "tvh_id": "MEZZO.es",
  //   "tvh_m3u": false,
  //   "tvh_nombre": "Mezzo",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.3.193:8208",
  //   "movistar_id": "CLASSI",
  //   "movistar_nombre": "Classica HD",
  //   "movistar_numero": 309,
  //   "tvh_id": "CLASSI.es",
  //   "tvh_m3u": false,
  //   "tvh_nombre": "Classica",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.5.3:8208",
  //   "movistar_id": "PBOY",
  //   "movistar_nombre": "Playboy TV",
  //   "movistar_numero": 311,
  //   "tvh_id": "PBOY.es",
  //   "tvh_m3u": false,
  //   "tvh_nombre": "Playboy TV",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.78:8208",
  //   "movistar_id": "24H",
  //   "movistar_nombre": "24 Horas",
  //   "movistar_numero": 312,
  //   "tvh_id": "24H.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "24 Horas",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.30:8208",
  //   "movistar_id": "BBC",
  //   "movistar_nombre": "BBC World",
  //   "movistar_numero": 313,
  //   "tvh_id": "BBC.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "BBC World News",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.40:8208",
  //   "movistar_id": "CNN",
  //   "movistar_nombre": "CNN Int",
  //   "movistar_numero": 314,
  //   "tvh_id": "CNN.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "CNN International",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.7.65:8208",
  //   "movistar_id": "FOXNWS",
  //   "movistar_nombre": "Fox News",
  //   "movistar_numero": 315,
  //   "tvh_id": "FOXNWS.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "FOX News",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.28:8208",
  //   "movistar_id": "ENW",
  //   "movistar_nombre": "Euronews",
  //   "movistar_numero": 316,
  //   "tvh_id": "ENW.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Euronews",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.7.67:8208",
  //   "movistar_id": "FRA EN",
  //   "movistar_nombre": "FRANCE 24",
  //   "movistar_numero": 318,
  //   "tvh_id": "FRA.EN.es",
  //   "tvh_m3u": false,
  //   "tvh_nombre": "France 24",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.7.69:8208",
  //   "movistar_id": "NBC",
  //   "movistar_nombre": "CNBC",
  //   "movistar_numero": 320,
  //   "tvh_id": "NBC.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "CNBC Europe",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.29:8208",
  //   "movistar_id": "BL",
  //   "movistar_nombre": "Bloomberg",
  //   "movistar_numero": 323,
  //   "tvh_id": "BL.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Bloomberg",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.63:8208",
  //   "movistar_id": "INTECO",
  //   "movistar_nombre": "Intereconomía TV",
  //   "movistar_numero": 324,
  //   "tvh_id": "INTECO.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Intereconomía TV",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.85:8208",
  //   "movistar_id": "LIBDIG",
  //   "movistar_nombre": "Libertad Digital",
  //   "movistar_numero": 325,
  //   "tvh_id": "LIBDIG.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "Libertad Digital",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.220:8208",
  //   "movistar_id": "312",
  //   "movistar_nombre": "i24news",
  //   "movistar_numero": 328,
  //   "tvh_id": "312.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "i24news",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.221:8208",
  //   "movistar_id": "CNCWOR",
  //   "movistar_nombre": "CNC World",
  //   "movistar_numero": 329,
  //   "tvh_id": "CNCWOR.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "CNC World",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.3.37:8208",
  //   "movistar_id": "TVG",
  //   "movistar_nombre": "TV Galicia",
  //   "movistar_numero": 351,
  //   "tvh_id": "TVG.es",
  //   "tvh_m3u": false,
  //   "tvh_nombre": "TV Galicia",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.3.36:8208",
  //   "movistar_id": "TVC",
  //   "movistar_nombre": "TV3 Cat",
  //   "movistar_numero": 353,
  //   "tvh_id": "TVC.es",
  //   "tvh_m3u": false,
  //   "tvh_nombre": "TV3 Cat",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.60:8208",
  //   "movistar_id": "ETB",
  //   "movistar_nombre": "ETB Sat",
  //   "movistar_numero": 354,
  //   "tvh_id": "ETB.es",
  //   "tvh_m3u": false,
  //   "tvh_nombre": "ETB Sat",
  //   "tvh_tag": "SD"
  // },
  // {
  //   "movistar_epg": false,
  //   "movistar_fuente": "239.0.0.185:8208",
  //   "movistar_id": "TVE",
  //   "movistar_nombre": "LA 1",
  //   "movistar_numero": 201,
  //   "tvh_id": "TVE.es",
  //   "tvh_m3u": true,
  //   "tvh_nombre": "La 1",
  //   "tvh_tag": "SD"
  // }

];


export default cadenassd;

