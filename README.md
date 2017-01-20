## Introducción

Este proyecto realiza varias funciones:

- Descarga periódica de la programación de TV (EPG) desde la web de Movistar y creación de un fichero XMLTV compatible con Tvheadend
- Creación de los ficheros tvHOME.m3u y tvREMOTE.m3u para ser consumidos por Tvheadend como fuentes para redes IPTV dinámicas
- Logos de los programas de TV en formato 800x400 para ser consumidos por Tvheadend y sus clientes.

### Descarga del EPG

Una vez descargado el EPG se convierte a fichero XMLTV (guia.xml) para que pueda ser 
consumido por Tvheadend. Está vinculado al apunte [Tvheadend y Movistar TV (2016)](http://www.luispa.com/archivos/4571),
tenlo en cuenta para entender el contexto y nombres de directorios utilizados.

Movistar TV tiene una página desde la cual se puede [Exportar la Programación](http://comunicacion.movistarplus.es/guiaProgramacion/exportarProgramacion),
puedes seleccionar qué cadenas y formato (xml, csv, excel, texto) prefieres. El formato XML es propietario
y no vale para Tvheadend. `tvhstar` descarga automáticamente la programación (una vez al día) utilizando
una petición web de tipo POST parametrizado y convierte lo que recibe (XML movistar) a 
XMLTV (compatible con Tvheadend). 

Dado que en la web de Movistar no se incluye la CATEGORÍA de cada pase (programa) he incluido una 
interpretación muy "personal" en los fuentes. Aprovecha varios "indicadores" para intentar 
categorizar los pases. En unos casos es fácil (El título empieza por "Cine*") y en otros menos, 
por ejemplo asigno la categoría a todos los pases de los canales temáticos (Canal Futbol: "todos
los pases son "Sport"). Si esto no te convence echa un ojo al fuente ./src/utils.js y verás una 
sección llamada "INICIO ZONA PERSONALIZADA !!!" para adaptarlo a tus gustos.


### Ficheros de configuración

- `cadenasHOME.js`: Se utiliza para configurar el EPG y también para crear el fichero
`tvHOME.m3u` - Aquí configuro todos los canales de TV que quiero tener disponibles en los 
dispositivos que van por la red casera (LAN/Ethernet), por lo que voy a configurar las 
versiones HD de lo mismos (excepto aquellos que solo emiten en SD). 

- `cadenasREMOTE.js`: Se utiliza para crear el fichero `tvREMOTE.m3u` - Aquí configura todos
los canales de TV en su versión SD, de modo que puedan ser consumidos por dispositivos con 
un ancho de banda inferior, como por ejemplo por la red WiFi casera donde 
las tablets o móviles funcionarán mucho mejor con streams de ~2Mbps (SD) que con los 
streams de ~10Mbps (HD).


### Ficheros picons

El directorio `picons` contiene todos los canales que están dados de alta en los ficheros 
cadenas*.js, con el nombre del fichero en minúsculas, sin espacios, ni caracteres diacríticos, 
para ser consumidos de forma automática por Tvheadend (siguiendo las instrucciones del 
apunte [Tvheadend y Movistar TV (2016)](http://www.luispa.com/archivos/4571) antes mencionado). 


## Instalación

Este proyecto consta de un programa llamado "server.js" que está desarrollado en 
Javascript y pensado para ejecutarse "encima" de node.js y dejarlo corriendo como daemon, 
por defecto se ejecutará una vez al día para bajarse el EPG. Ah!, de momento crea los 
ficheros /tmp/*.m3u en cada ciclo (innecesario pero inocuo)

Nota: No funciona con node.js 4.6.x, lo he probado con la versión 6.9.x 
(tanto en Mac OS como en Linux funcionan ). En mi caso uso Gentoo así que instalé con:

    ~ # cat /etc/portage/package.accept_keywords
    :
    # node 6.9
    =dev-libs/libuv-1.10.0 ~amd64
    =net-libs/nodejs-6.9.2 ~amd64
    
    ~ # emerge -v nodejs

Después preparo el proyecto ejecutando `npm install` que creará el directorio
node_modules con todas las dependencias.

    ~ $ git clone https://github.com/LuisPalacios/tvhstar.git
    ~ $ cd tvhstar
    tvhstar $ npm install

## Configuración

Antes de hacer el build deberías revisar y modificar los ficheros 

    * src/server.js -> objeto "progPreferences"
    * src/cadenasHOME.js
    * src/cadenasREMOTE.js

`server.js`: Revisa los parametros bajo "progPreferences", los más importantes son los siguientes
y su significado está descrito en el propio fuente.

    ficheroXMLTV: Path al fichero donde se dejará el fichero XMLTV final (guia.xml). 
    uri_prefix: URI a poner como prefijo a los canales. 
    
`cadenasHOME|REMOTE.js`: en estos ficheros mantengo la lista de los
canales de Movistar TV y sus parámetros para vincular entre sí el servicio y Tvheadend. 
Quizá eches de menos algunos canales que he omitido o no he activado (opciones
en false), el motivo es por mi demarcación o porque no los tengo contratados o 
no los veo, así que revísalos para adaptarlo a tu gusto. 

Para cada cadena/canal asigno un monto de parámetros, 
algunos los uso para la creación de los ficheros m3u (para crear los canales dinámicos
en tvheadend) y otros para crear el xmltv (epg que usará tvheadend)

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

Para lanzar el programa puedes optar por una ejecución manual o dejarlo como 
un daemon. No olvides
revisar la variable `ficheroXMLTV` en `server.js` para que apunte 
al directorio final donde quieres dejar el XMLTV resultante. 

### Ejecución manual

En el directorio tvhstar/build tendrás lo necesario para ejecutar el programa.

    tvhstar $ npm run start

NOTA: Si vuelves a modificar cualquier fichero de los fuentes entonces tendrás 
que volver a hacer un build previo al start (`npm run build`) 


### Ejecuión vía systemd

He dejado un ejemplo de fichero `.service` que puedes utilizar. 

    tvhstar $ chmod 755 tvhstar.sh

Instala el servicio

    tvhstar # cp tvhstar.service /etc/systemd/system
    tvhstar # systemctl enable tvhstar.service
    tvhstar # systemctl start tvhstar.service


## M3U

Como decía, un "extra" es que creo el fichero IPTV (`tv[HOME|REMOTE].m3u`) que se puede 
usar como fuente para una "IPTV Automatic Network" de Tvheadend.

    tvhstar $ sudo cp /tmp/tvHOME.m3u /etc/tvheadend     
    tvhstar $ sudo cp /tmp/tvREMOTE.m3u /etc/tvheadend     
    
Creo dos ficheros distintos para poder crear dos "Network" distintas, cada una apuntando
a uno de ellos de modo que sea luego más fácil mantener Tvheadend. 

Observarás que los canales de `tvHOME.m3u` llevan el tag `HOME` y los de `tvREMOTE` llevan 
el tag `REMOTE`. Estos TAG's se importarán en Tvheadend y es una forma muy sencilla de
asociar a los clientes qué canales queremos enviarles (crear usuarios/passwords y 
asociales los canales de un Tag concreto). 

  
## PICONS (2017)

He dejado un montón de `picons` con los logos de los canales para poder copiarlos a tvheadend tal como 
describo en el apunte [Tvheadend y Movistar TV (2016)](http://www.luispa.com/archivos/4571). Los
logos están actualizados a fecha enero de 2017, utilizando como fuente 
[picons.eu](http://picons.eu), donde tiene logos de muy alta calidad. 


## Información adicional

### Lista actualizada sobre los canales

Dejo aquí un par de formas de donde sacar los canales actualizados. Yo utilizo la primera. 

- [LISTA ACTUALIZADA DE CANALES PARA VLC](http://www.adslzone.net/postt350532.html) desde ADSL ZONE. 
La forma en la que me bajo el fichero para poder usarlo con un editor es la siguiente, nota
que uso el programa [html2text.py](https://github.com/aaronsw/html2text)
    
      `$ curl -o adslzone.html http://www.adslzone.net/postt350532.html`
      
      `$ html2text.py salida.html | grep -E '(EXTINF|rtp)' > adslzone.m3u`
      
      
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

