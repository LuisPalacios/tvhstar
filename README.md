## Introducción

Descarga periódica de la programación (EPG) de Movistar TV a un fichero XMLTV (guia.xml) para que
pueda ser consumo por Tvheadend. Está vinculado al apunte [Tvheadend y Movistar TV (2016)](http://www.luispa.com/archivos/4571),
tenlo en cuenta para entender el contexto y nombres de directorios utilizados.

Movistar TV tiene una página desde la cual se puede [Exportar la Programación](http://comunicacion.movistarplus.es/guiaProgramacion/exportarProgramacion),
puedes seleccionar qué cadenas y formato (xml, csv, excel, texto) prefieres. El formato XML es propietario
y no vale para Tvheadend. 

`tvhstar` descarga automáticamente la programación (una vez al día) utilizando
una petición web de tipo POST parametrizado y convierte lo que recibe (XML movistar) a XMLTV (compatible con Tvheadend). 

## Instalación

Está desarrollado en Javascript y pensado para ejecutarse como daemon en node.js, 
probado con la versión 6.9.x tanto en Mac OS como en Linux. En mi caso lo voy a montar
en el mismo servidor donde tengo instalado Tvheadend (linux basado en Gentoo). Primero instalo node.js:

    ~ # cat /etc/portage/package.accept_keywords
    :
    # node 6.9
    =dev-libs/libuv-1.10.0 ~amd64
    =net-libs/nodejs-6.9.2 ~amd64
    
    ~ # emerge -v nodejs

Preparo el proyecto, librerías y ejecuto el build: 

    ~ $ git clone https://github.com/LuisPalacios/tvhstar.git
    ~ $ cd tvhstar
    tvhstar $ npm install

## Configuración

Deberías revisar y modificar dos ficheros antes de ejecutar el programa: 

    * src/server.js -> objeto "progPreferences"
    * src/cadenas.js

Un parámetro interesante es el fichero de salida del XMLTV, si ejecutas node.js en el mismo equipo donde está Tvheadend y con el mismo usuario donde tienes tu fichero guia.xml, basta con indicar el path directo

    ficheroXMLTV: '/home/luis/guia/guia.xml',


### Cadenas

En `src/cadenas.js` mantengo mi lista de todos los canales de Movistar TV y 
los parámetros más importantes para vincular el servicio y Tvheadend. Me
faltan algunos canales que no he configurado por mi demarcación o porque
no los tengo contratados. 

    "movistar_epg": true,                      Solicitar esta cadena al recoger el EPG
    "movistar_fuente": "239.0.3.37:8208",      Dirección streaming al crear el m3u para tvheadend
    "movistar_id": "TVG",                      ID interno utilizado por Movistar, necesario para pedir el EPG
    "movistar_nombre": "TV Galicia",           Nombre del canal original que asigna Movistar
    "movistar_numero": "151",                  Número de canal original que asigna Movistar
    "tvh_id": "TVG.es",                        ID interno que pondré en el fichero M3U para tvheadend
      Es el identificativo del Canal que usa Tvheadend al importar el fichero 
      XMLTV y su valor DEBE ser compatible con lo que manda el DTD de xmltv:
      http: xmltv.cvs.sourceforge.net/viewvc/xmltv/xmltv/xmltv.dtd
       "..Each channel has one id attribute, which must be unique and should
       preferably be in the form suggested by RFC2838 (the 'broadcast'
       element of the grammar in that RFC, in other words, a DNS-like name
       but without any URI scheme).."
    "tvh_m3u": true,                           Añadiré este canal el fichero M3U para tvheadend
    "tvh_nombre": "TV Galicia",                Nombre del canal que pondré en el fichero M3U para tvheadend
    "tvh_fuente": "http://user:pass@otro.servidor.com:9981/stream/chanelid/202116655?ticket=FA7504AB2F89C45785826A7EFF510F0AD5285DD9&profile=pass"
       Este último campo verás que no lo uso pero lo he implementado porque estuve 
       haciendo pruebas haciendo que un par de canales tirasen desde OTRO Tvheadend. 
       Si tenemos este campo en la cadena entonces se usará a la hora de crear el M3U 
       en vez de [uri_prefix]{movistar_fuente}
 



## Construcción

Construyo la versión antes de poder ejecutar. 

    tvhstar $ npm run build


## Ejecución

En el directorio tvhstar/build tendrás lo necesario para ejecutar el programa. Puedes hacerlo 
manualmente o a través del método que prefieras (crontab, systemd, ...), 
a continuación una ejecución manual en el terminal. 

    tvhstar $ npm run start

Cuando veas que ha terminado el primer ciclo podrás copiar el fichero resultante al
sitio donde Tvheadend espera el fichero. En mi caso es el siguiente: 

    tvhstar $ cp guia.movistar-xmltv.xml /home/luis/guia

Alternativa: Modifica la variable `ficheroXMLTV` en `server.js` para que apunte al fichero directamente. 


## M3U

Como "extra" también verás que creo un fichero IPTV (tv.m3u) partiendo de los canales descritos en 
`cadenas.js`. Por cierto, tienes los canales actualizados a fecha 6/1/2017 así que puedes usarlo
con tu Tvheadend actual.

    tvhstar $ sudo cp tv.m3u /etc/tvheadend     
    
Recuerda que el directorio de Tvheadend puede ser distinto en tu caso.  
  

## Información adicional

### movistar_id

La clave 'movistar_id' (`src/cadenas.js`) es un campo importante porque es el que define el 'id' interno 
que utiliza movistar para identificar cada uno de sus canales al realizar el POST.
Dejo documentado (para no olvidarme) cómo saqué dichos id's: 
    
Desde un Terminal preparo `tcpdump` en mi Mac como root:

    # tcpdump -s 0 -A 'tcp dst port 80 and (tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x504f5354)'
    
En paralelo, desde un browser pido la programación solo del día de HOY 
seleccionando Todos los canales y solicito una esportación a cualquier formato desde aquí:

    http://comunicacion.movistarplus.es/guiaProgramacion/exportarProgramacion`

En el terminal veré como captura la petición POST. Copio/Pego la última línea a 'cadena.txt'. 
La línea que empieza por: `fechaInicio=2017-01-05&fechaFin=2017-01-05&genero=0...`
    
Postproceso 'cadena.txt' para tener los ids
 
    `$ cat cadena.txt| tr "&" "\n" | grep 'cadena%5B' | tr -d "cadena%5B%5D=" | awk 'BEGIN { print "cadena: [" } {print "\047"$0"\047\054"} END {print " ]"}'`

