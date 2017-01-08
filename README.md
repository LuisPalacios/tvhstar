## Introducción

Descarga periódica de la programación (EPG) de Movistar TV a un fichero XMLTV (guia.xml) para que
pueda ser consumido por Tvheadend. Está vinculado al apunte [Tvheadend y Movistar TV (2016)](http://www.luispa.com/archivos/4571),
tenlo en cuenta para entender el contexto y nombres de directorios utilizados.

Movistar TV tiene una página desde la cual se puede [Exportar la Programación](http://comunicacion.movistarplus.es/guiaProgramacion/exportarProgramacion),
puedes seleccionar qué cadenas y formato (xml, csv, excel, texto) prefieres. El formato XML es propietario
y no vale para Tvheadend. 

`tvhstar` descarga automáticamente la programación (una vez al día) utilizando
una petición web de tipo POST parametrizado y convierte lo que recibe (XML movistar) a XMLTV (compatible con Tvheadend). 

El estado de este proyecto es el siguiente: 

    - El programa ya funciona, 1) descarga el EPG y lo convierte a XMLTV y 2) crea un fichero tv.m3u, ambos compatibles con Tvheadend
    - El directorio `picons` lo estoy actualizando, subiendo nuevas versiones de los logos con más resolución. 
    - El fichero donde se configuran los canales principales (`cadenas.js`) solo tiene las versiones HD, agunos tags
      los tengo que corregir. Además le faltan canales, bien porque no los consumo, no los tengo contratados o 
      son de otra demarcación. Editalo a tu gusto. 
    - He añadido un fichero nuevo llamado `cadenas_sd.js` que está todavía verde (me falta añadir muchos canales), está
      dedicado a poner en el la versión SD de los canales del fichero principal (`cadenas.js`), pero empezando en un 
      número de canal muy alto (201). El caso de uso son las tablets o móviles por wifi que funcionan 
      mejor con streams de ~2Mbps (SD) que con los streams de ~10Mbps (HD). 

Pendientes: 

    - Conseguir que se interprete "tvh_tag" cuando Tvheadend lee el fichero `tv.m3u`
    - Terminar `canales.js`, corregir canales marcados con `HD` que en realidad son `SD`
    - Terminar `canales_sd.js`, hacer una lista definitiva de los canales equivalentes en `SD`


## Instalación

Está desarrollado en Javascript y pensado para ejecutarse como daemon en node.js, cuidado que con la versión 
4.6.x no me ha funcionado, lo he probado con la versión 6.9.x tanto en Mac OS como en Linux y funcionan 
correctamente. En mi caso lo voy a montar en el mismo linux donde tengo instalado Tvheadend (linux basado en
Gentoo). Primero tienes que instalar node.js, en mi caso: 

    ~ # cat /etc/portage/package.accept_keywords
    :
    # node 6.9
    =dev-libs/libuv-1.10.0 ~amd64
    =net-libs/nodejs-6.9.2 ~amd64
    
    ~ # emerge -v nodejs

Después preparo el proyecto, librerías. Ejecuto `npm install` que creará el directorio node_modules con
con todas las dependencias.

    ~ $ git clone https://github.com/LuisPalacios/tvhstar.git
    ~ $ cd tvhstar
    tvhstar $ npm install

## Configuración

Antes de hacer el build deberías revisar y modificar dos ficheros 

    * src/server.js -> objeto "progPreferences"
    * src/cadenas.js

`server.js`: Un parámetro interesante es el fichero de salida del XMLTV. En mi caso que ejecuto node.js en el mismo 
equipo donde está Tvheadend parametrizo que deje el fichero ya en su sitio final: 

    ficheroXMLTV: '/home/luis/guia/guia.xml',

`cadenas.js`: aquí mantengo mi lista de todos los canales de Movistar TV y 
los parámetros más importantes para vincular el servicio y Tvheadend. Me
faltan algunos canales que no he configurado por mi demarcación o porque
no los tengo contratados. Para cada cadena/canal asigno un monto de parámetros, 
algunos los uso para el fichero m3u (para crear los canales dinámicos
en tvheadend) y otros para crear el xmltv (para el epg que usará tvheadend)

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
 

## Construcción (build)

Una vez que hayas revisado los ficheros anteriores ya puedes construir el programa: 

    tvhstar $ npm run build


## Ejecución

Para ejecutar el programa puedes optar por una ejecución manual la primera vez. Después
te recomiendo que lo programes para quedarse como un daemon en tu sistema. No olvides
revisar la variable `ficheroXMLTV` en `server.js` para que apunte 
al directorio final donde quieres dejar tu fichero XMLTV resultante. 

### Ejecución manual

En el directorio tvhstar/build tendrás lo necesario para ejecutar el programa.

    tvhstar $ npm run start


### Ejecuión vía systemd

He dejado un ejemplo de fichero `.service` que puedes utilizar. 

    tvhstar $ chmod 755 tvhstar.sh

Instala el servicio

    tvhstar # cp tvhstar.service /etc/systemd/system
    tvhstar # systemctl enable tvhstar.service
    tvhstar # systemctl start tvhstar.service


## M3U

Como "extra" también verás que creo un fichero IPTV (tv.m3u) partiendo de los canales descritos en 
`cadenas.js`. Por cierto, tienes los canales actualizados a fecha 6/1/2017 así que puedes usarlo
con tu Tvheadend actual.

    tvhstar $ sudo cp /tmp/tv.m3u /etc/tvheadend     
    
Recuerda que el directorio de Tvheadend puede ser distinto en tu caso.  
  
## PICONS (2017)

Copio en el directorio `picons` los logos de los canales para poder copiarlos a tvheadend tal como 
describo en el apunte [Tvheadend y Movistar TV (2016)](http://www.luispa.com/archivos/4571). Los
logos están actualizados a fecha enero de 2017, pero todavía me faltan unos cuantos que
estoy consiguiendo desde http://picons.eu (proyecto buenísimo con versiones en alta calidad)


## Información adicional

### Lista actualizada sobre los canales

Dejo aquí un par de formas de donde sacar los canales actualizados. Yo utilizo la primera. 

- [LISTA ACTUALIZADA DE CANALES PARA VLC](http://www.adslzone.net/postt350532.html) desde ADSL ZONE. 
La forma en la que me bajo el fichero para poder usarlo con un editor es la siguiente, nota
que uso el programa [html2text.py](https://github.com/aaronsw/html2text)
    
      $ curl -o adslzone.html http://www.adslzone.net/postt350532.html
      
      $ html2text.py salida.html | grep -E '(EXTINF|rtp)' > adslzone.m3u

- Usar el servicio SD&S (Service Discovery & Selection) de Movistar TV para recoger la información
  de canales. Aquí tenéis el [movistartv2xmltv](https://github.com/ese/movistartv2xmltv) que 
  creo que ya no funciona, pero puede ser buena base para que alguien haga una actualización :-)


### Qué es el movistar_id

La clave 'movistar_id' (que verás en `src/cadenas.js`) es un campo importante porque es el que define el 'id' interno 
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

