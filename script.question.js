const questions = [
  {
    question: "¿En qué fichero se almacenan las contraseñas cifradas de los usuarios en GNU/Linux?",
    answers: ["/etc/group", "/etc/fstab", "/etc/shadow", "/etc/passwd"],
    correct: [2]
  },
  {
    question: "¿Qué permiso es necesario para poder copiar un archivo dentro de la misma carpeta?",
    answers: [
      "Permiso de lectura en archivo y permiso de lectura en carpeta",
      "Permiso de lectura en archivo y permiso de escritura en carpeta",
      "Permiso de escritura en archivo y permiso de lectura en carpeta",
      "Permiso de escritura en archivo y permiso de escritura en carpeta"
    ],
    correct: [1]
  },
  {
    question: "¿Qué comando permite formatear la primera partición lógica del segundo disco duro?",
    answers: [
      "mkfs /dev/sde2",
      "mkfs /dev/sdb5",
      "fdisk /dev/sde2",
      "fdisk /dev/sdb5"
    ],
    correct: [1]
  },
  {
    question: "¿Cuál es la prioridad mínima de un proceso en Linux?",
    answers: ["19", "20", "-19", "-20"],
    correct: [0]
  },
  {
    question: "¿Qué comando permite saber cuánto ocupa el directorio $HOME de root?",
    answers: [
      "df -h /root",
      "du -sh /root",
      "du -sh /home/root",
      "df -h /home/root"
    ],
    correct: [1]
  },
  {
    question: "¿Cómo se monta la segunda partición primaria del tercer disco con formato FAT16?",
    answers: [
      "mount -t msdos /dev/sdb3 /mnt/datos",
      "mount -t fat16 /dev/sdc2 /mnt/datos",
      "mount -t msdos /dev/sdc2 /mnt/datos",
      "mount -t fat16 /dev/sdb3 /mnt/datos"
    ],
    correct: [2]
  },
  {
    question: "Si solo queremos mostrar las particiones del tercer disco, ejecutamos:",
    answers: [
      "fdisk /dev/sd3",
      "fdisk -l /dev/sdc",
      "fdisk /dev/sdc",
      "fdisk -l /dev/sd3"
    ],
    correct: [1]
  },
  {
    question: "Para ejecutar un script es necesario...",
    answers: [
      "Poner la extensión .sh al nombre",
      "Poner el permiso de ejecución al script",
      "Al ejecutarlo utilizar ruta absoluta",
      "Todas son correctas"
    ],
    correct: [1]
  },
  {
    question: "¿Qué usuarios pueden cambiar permisos a este fichero: -rw-rw-rw- juan sevilla?",
    answers: [
      "Solo root y juan",
      "Solo el usuario root",
      "Los 5 usuarios, porque todos tienen escritura",
      "Los usuarios root, juan y juana"
    ],
    correct: [0]
  },
  {
    question: "¿Qué comando podrías utilizar para montar un CD?",
    answers: [
      "mount /dev/sda /mnt/CD",
      "mount /mnt/disco /media/sda",
      "mnt /dev/sr0 /media/carpeta",
      "mount /dev/sr0 /mnt/carpeta"
    ],
    correct: [3]
  },
  {
    question: "¿Qué usuarios pueden cambiar permisos a un fichero con permisos -rw-rw-rw- y propietario juan del grupo sevilla?",
    answers: [
      "Solo root y juan",
      "Solo el usuario root",
      "Los 5 usuarios porque todos tienen escritura",
      "Los usuarios root, juan y juana"
    ],
    correct: [0]
  },
  {
    question: "¿Qué comando se usa para montar un CD en Linux?",
    answers: [
      "mount /dev/sda /mnt/CD",
      "mount /mnt/disco /media/sda",
      "mnt /dev/sr0 /media/carpeta",
      "mount /dev/sr0 /mnt/carpeta"
    ],
    correct: [3]
  },
  {
    question: "¿Qué indica la prioridad del proceso en la salida de `ps -efl` con valor 10?",
    answers: [
      "El comando yes tiene prioridad 10",
      "El comando yes se ejecuta con prioridad por debajo de lo normal",
      "El comando yes está consumiendo un 13% de procesador",
      "Todas son correctas"
    ],
    correct: [3]
  },
  {
    question: "¿Qué comando NO se puede usar para eliminar un proceso?",
    answers: [
      "kill -9 <Nombre del proceso>",
      "kill -9 PID",
      "kill PID",
      "kill -15 PID"
    ],
    correct: [0]
  },
  {
    question: "¿Qué comando no está relacionado con procesos en Linux?",
    answers: [
      "process",
      "ps -ef",
      "renice",
      "top"
    ],
    correct: [0]
  },
  {
    question: "¿Qué comando cambia el propietario del fichero.txt al usuario luis?",
    answers: [
      "chown luis:juan fichero.txt",
      "chown luis fichero.txt",
      "chgrp juan:luis fichero.txt",
      "chown juan:luis fichero.txt"
    ],
    correct: [1]
  },
  {
    question: "¿Qué comando se usa para cambiar la prioridad de un proceso en ejecución?",
    answers: [
      "renice con el nombre del proceso",
      "nice con el PID",
      "renice con el PID",
      "nice con el nombre del proceso"
    ],
    correct: [2]
  },
  {
    question: "El archivo -rwxrw---- pertenece a jose y al grupo desarrollo. ¿Qué usuarios pueden escribir en él?",
    answers: [
      "Solo jose",
      "jose y luisa",
      "Todos los usuarios",
      "Ninguno"
    ],
    correct: [1]
  },
  {
    question: "En /etc/fstab hay una entrada para /dev/sdb3 como tipo fat32 con opciones user,ro. ¿Qué afirmación es correcta?",
    answers: [
      "El tipo de sistema debería ser vfat",
      "El archivo debería llamarse /etc/exports",
      "Todos los usuarios pueden escribir en la partición",
      "La carpeta de montaje se crea sola al iniciar"
    ],
    correct: [0]
  },
  {
    question: "¿Qué comando se usa para añadir un usuario al grupo sudo?",
    answers: [
      "sudo adduser juan sudo",
      "sudo addgroup sudo juan",
      "adduser juan --ingroup sudo",
      "Editar /etc/group y añadir manualmente"
    ],
    correct: [0]
  },
  {
    question: "¿Qué permisos se obtienen al ejecutar el comando chmod 421 prueba.txt?",
    answers: [
      "rw-r--r--",
      "--x-w----",
      "r-- -w--- -x",
      "rwxrw-r--"
    ],
    correct: [2]
  },
  {
    question: "¿Qué afirmaciones son correctas sobre la imagen llamada foto.png con permisos -rwxrw---- y grupo desarrollo (jose y luisa)?",
    answers: [
      "jose y luisa pueden leer el archivo",
      "Usuarios externos también pueden leer",
      "Pueden ejecutarlo todos",
      "jose y luisa pueden escribir en el archivo"
    ],
    correct: [0] // y también la opción 3, es múltiple
  },
  {
    question: "¿Cuál es la salida del comando dd?",
    answers: [
      "Clonar un disco con Linux",
      "Realizar copias incrementales",
      "Crear una imagen de una partición",
      "Las opciones a y c"
    ],
    correct: [3]
  },
  {
    question: "¿Qué comando se utiliza para saber cuánto ocupa /root?",
    answers: [
      "df -h /root",
      "du -sh /root",
      "du -sh /home/root",
      "df -h /home/root"
    ],
    correct: [1]
  },
  {
    question: "¿Dónde se guardan las contraseñas cifradas de usuarios en GNU/Linux?",
    answers: [
      "/etc/group",
      "/etc/shadow",
      "/etc/fstab",
      "/etc/passwd"
    ],
    correct: [1]
  },
  {
    question: "¿Cómo se crea un usuario en el grupo 'valencia', si no existe aún el grupo?",
    answers: [
      "adduser paco valencia",
      "addgroup valencia && adduser paco --ingroup valencia",
      "adduser paco --ingroup valencia",
      "adduser paco valencia && addgroup valencia"
    ],
    correct: [1]
  },
  {
    question: "¿Qué comando usar para montar un disquete?",
    answers: [
      "mount /dev/sdc /mnt/disquete",
      "mount /dev/fd0 /mnt/disquete",
      "mount /dev/sr0 /mnt/disquete",
      "mount /dev/sdb /mnt/disquete"
    ],
    correct: [1]
  },
  {
    question: "¿Qué afirmaciones son ciertas sobre archivos .tar.gz?",
    answers: [
      "Son empaquetados y comprimidos",
      "Solo son empaquetados",
      "Solo son comprimidos",
      "No se usan en Linux"
    ],
    correct: [0]
  },
  {
    question: "¿Qué afirmación es cierta sobre RAID 5?",
    answers: [
      "Es el más barato con tolerancia a fallos y almacenamiento equilibrado",
      "RAID 5 no tolera errores",
      "Es lo mismo que RAID 1",
      "Necesita 2 discos"
    ],
    correct: [0]
  },
  {
    question: "¿Qué afirmación es falsa sobre RAID por software?",
    answers: [
      "Es más barato",
      "Usa recursos del sistema",
      "No necesita hardware extra",
      "Tiene mejor rendimiento que RAID por hardware"
    ],
    correct: [3]
  },
  {
    question: "¿Qué comando permite activar la red en Linux?",
    answers: [
      "ifconfig network start",
      "ipconfig eth0 up",
      "service networking start",
      "service enp0s3 up"
    ],
    correct: [2]
  },
  {
    question: "¿Qué fichero almacena los servidores DNS que utiliza el equipo?",
    answers: [
      "/etc/resolv.conf",
      "/etc/hostname",
      "/etc/sysconfig/network.conf",
      "/etc/dns.conf"
    ],
    correct: [0]
  },
  {
    question: "¿Para qué se utiliza el servicio VNC?",
    answers: [
      "Acceso remoto a equipos mediante la consola gráfica",
      "Acceso remoto a equipos mediante terminal",
      "Crear redes privadas virtuales",
      "Conexiones seguras por defecto"
    ],
    correct: [0]
  },
  {
    question: "¿Qué comando permite añadir un usuario a Samba?",
    answers: [
      "adduser luis",
      "passwd luis",
      "smbadduser luis",
      "smbpasswd -a luis"
    ],
    correct: [3]
  },
  {
    question: "¿Cuál de estos servicios NO utiliza el puerto indicado?",
    answers: [
      "ssh utiliza el puerto 23",
      "http utiliza el 80",
      "https utiliza el 443",
      "ftp utiliza el 21"
    ],
    correct: [0]
  },
  {
    question: "¿Qué fichero se modifica para compartir directorios mediante NFS?",
    answers: [
      "/etc/nfs/nfs.conf",
      "/etc/exports",
      "/etc/nfs/nfs-config",
      "/var/exports"
    ],
    correct: [1]
  },
  {
    question: "¿Es posible transmitir archivos FTP mediante protocolo SSH?",
    answers: [
      "No, son servicios diferentes",
      "Sí, pero no es seguro",
      "Sí, y se denomina SFTP",
      "No, porque SSH se cifra con 128 bits"
    ],
    correct: [2]
  },
  {
    question: "¿Qué servicio permite conectarse a un servidor de forma remota?",
    answers: [
      "VNC",
      "Telnet",
      "Open SSH",
      "Todas las anteriores"
    ],
    correct: [3]
  },
  {
    question: "¿Cuál de las siguientes afirmaciones sobre el comando SCP es cierta?",
    answers: [
      "El archivo se transfiere del cliente al servidor",
      "El usuario debe existir en la máquina cliente",
      "El archivo se transfiere del servidor SSH al cliente",
      "El usuario no necesita existir en la máquina servidor"
    ],
    correct: [2]
  },
  {
    question: "¿Cuál afirmación es FALSA sobre Samba?",
    answers: [
      "Permite compartir recursos entre Windows y Linux",
      "Su fichero de configuración es /etc/samba/smb.conf",
      "Utiliza solo 2 puertos",
      "Se monta con el tipo ext4"
    ],
    correct: [3]
  },
  {
    question: "¿Cuál de las siguientes opciones NO pertenece al comando service?",
    answers: [
      "stop",
      "status",
      "reboot",
      "start"
    ],
    correct: [2]
  },
  {
    question: "¿Dónde se alojan por defecto las páginas web en Apache?",
    answers: [
      "/www/apache2",
      "/etc/www/html",
      "/var/html",
      "/var/www/html"
    ],
    correct: [3]
  },
  {
    question: "¿Qué afirmaciones son correctas sobre Samba?",
    answers: [
      "Samba permite compartir carpetas entre Windows y Linux",
      "Samba solo permite compartir carpetas entre Windows",
      "Es necesario añadir los usuarios al servicio",
      "Permite administrar de forma remota un sistema"
    ],
    correct: [0, 2]
  },
  {
    question: "¿Dónde se guarda el nombre del equipo en Linux?",
    answers: [
      "/etc/hostname",
      "/etc/resolv.conf",
      "/etc/hosts",
      "/etc/sysconfig/network"
    ],
    correct: [0]
  },
  {
    question: "¿Qué servicio permite que un equipo funcione como router en Linux?",
    answers: [
      "El cortafuegos iptables",
      "El servicio DNS",
      "El servicio DHCP",
      "El servicio ROUTE"
    ],
    correct: [0]
  },
  {
    question: "¿Cuál es falsa sobre OpenSSH?",
    answers: [
      "Incorpora FTP seguro",
      "Utiliza el puerto 22",
      "El archivo de configuración es /etc/ssh/sshd_config",
      "Incorpora acceso remoto gráfico"
    ],
    correct: [3]
  },
  {
    question: "¿Qué comando usamos en Linux para conocer los saltos de red?",
    answers: [
      "ifconfig",
      "nolookup",
      "tracert",
      "traceroute"
    ],
    correct: [3]
  },
  {
    question: "¿Dónde se configuran manualmente las IP y nombres de equipos?",
    answers: [
      "/etc/hostname",
      "/etc/resolv.conf",
      "/etc/sysconfig/network",
      "/etc/hosts"
    ],
    correct: [3]
  },
  {
    question: "¿Cuál es el archivo de configuración de interfaces de red en Ubuntu?",
    answers: [
      "/etc/network/interfaces",
      "/etc/networking/enp0s3",
      "/www/network/interfaces",
      "/var/network/enp0s3"
    ],
    correct: [0]
  },
  {
    question: "¿Qué comando se utiliza para instalar un servidor FTP en Ubuntu?",
    answers: [
      "apt install ftpd",
      "apt install ftp",
      "yum install ftp",
      "apt install vsftpd"
    ],
    correct: [3]
  },
  {
    question: "¿Qué comando permite activar la red en Linux?",
    answers: [
      "service networking start.",
      "ipconfig eth0 up.",
      "ifconfig network start.",
      "service enp0s3 up."
    ],
    correct: [0]
  },
  {
    question: "¿Qué fichero almacena los servidores DNS utilizados por el equipo?",
    answers: [
      "/etc/resolv.conf",
      "/etc/hostname",
      "/etc/dns.conf",
      "/etc/sysconfig/network.conf"
    ],
    correct: [0]
  },
  {
    question: "¿Para qué se utiliza el servicio VNC?",
    answers: [
      "Para acceder de forma remota a equipos mediante la consola gráfica.",
      "Para crear redes privadas virtuales.",
      "Porque es el único servicio que permite conexiones seguras.",
      "Para acceder de forma remota a equipos mediante terminal."
    ],
    correct: [0]
  },
  {
    question: "¿Qué comando permite añadir un usuario en Samba?",
    answers: [
      "smbpasswd -a luis.",
      "passwd luis.",
      "adduser luis.",
      "smbadduser luis."
    ],
    correct: [0]
  },
  {
    question: "¿Cuál es incorrecta respecto a puertos de servicios?",
    answers: [
      "El servicio http utiliza el puerto 80",
      "El servicio ssh utiliza el puerto 23",
      "El servicio ftp utiliza el puerto 21",
      "El servicio https utiliza el puerto 443"
    ],
    correct: [1]
  },
  {
    question: "¿Qué fichero se modifica para compartir un directorio mediante NFS?",
    answers: [
      "/etc/exports",
      "/etc/nfs/nfs-config",
      "/etc/nfs/nfs.conf",
      "/var/exports"
    ],
    correct: [0]
  },
  {
    question: "¿Es posible transmitir ficheros por FTP mediante el protocolo SSH?",
    answers: [
      "Sí, y además es FTP seguro (SFTP).",
      "Sí, ofrece FTP estándar.",
      "No, SSH y FTP no son compatibles porque SSH se cifra con 128 bits.",
      "No, porque son servicios diferentes."
    ],
    correct: [0]
  },
  {
    question: "¿Qué servicio permite conectarse a un servidor de forma remota?",
    answers: [
      "Todas son verdaderas.",
      "Open SSH.",
      "VNC.",
      "Telnet."
    ],
    correct: [0]
  },
  {
    question: "Sobre el comando scp: user@host:~$ scp juan@192.168.100.103:/etc/passwd /home/user",
    answers: [
      "Estoy transfiriendo un archivo desde el servidor ssh a un cliente ssh",
      "El usuario juan tiene que existir en la máquina servidor",
      "El usuario juan tiene que existir en la máquina cliente",
      "Estoy transfiriendo un archivo desde un cliente ssh al servidor ssh"
    ],
    correct: [0, 1]
  },
  {
    question: "¿Cuál es falsa sobre Samba?",
    answers: [
      "El fichero de configuración es /etc/samba/smb.conf",
      "Para montar un recurso se utiliza la opción cifs en el comando mount",
      "Samba permite compartir recursos entre máquinas Windows y Linux",
      "Utiliza 2 puertos"
    ],
    correct: [3]
  },
  {
    question: "¿Cuál de las siguientes opciones no pertenece al comando service?",
    answers: [
      "reboot",
      "start",
      "stop",
      "status"
    ],
    correct: [0]
  },
  {
    question: "¿En qué directorio se alojan por defecto las páginas web en Apache?",
    answers: [
      "/var/www/html",
      "/var/html",
      "/www/apache2",
      "/etc/www/html"
    ],
    correct: [0]
  },
  {
    question: "¿Qué afirmaciones son correctas sobre Samba?",
    answers: [
      "Samba permite compartir carpetas entre máquinas Windows y Linux",
      "Es necesario añadir los usuarios al servicio",
      "Permite administrar de forma remota un sistema",
      "Samba solo permite compartir carpetas entre máquinas Windows"
    ],
    correct: [0, 1]
  },
  {
    question: "¿Dónde se guarda el nombre del equipo en Linux?",
    answers: [
      "/etc/hostname",
      "/etc/hosts",
      "/etc/sysconfig/network",
      "/etc/resolv.conf"
    ],
    correct: [0]
  },
  {
    question: "¿Qué servicio permite configurar el equipo como router entre redes?",
    answers: [
      "El cortafuegos iptables",
      "El servicio ROUTE",
      "El servicio DNS",
      "El servicio DHCP"
    ],
    correct: [0]
  },
  {
    question: "¿Cuál es falsa sobre Open SSH?",
    answers: [
      "Incorpora acceso remoto gráfico",
      "Incorpora ftp seguro",
      "El archivo de configuración es /etc/ssh/sshd_config",
      "Utiliza el puerto 22"
    ],
    correct: [0]
  },
  {
    question: "¿Qué comando en Linux muestra los saltos entre origen y destino?",
    answers: [
      "traceroute",
      "ifconfig",
      "tracert",
      "nolookup"
    ],
    correct: [0]
  },
  {
    question: "¿Dónde se guardan las entradas manuales de equipos/IP?",
    answers: [
      "/etc/hosts",
      "/etc/sysconfig/network",
      "/etc/hostname",
      "/etc/resolv.conf"
    ],
    correct: [0]
  },
  {
    question: "¿Cuál es el archivo de configuración de red en Ubuntu?",
    answers: [
      "/etc/network/interfaces",
      "/etc/networking/enp0s3",
      "/www/network/interfaces",
      "/var/network/enp0s3"
    ],
    correct: [0]
  },
  {
    question: "¿Qué comando instala el servidor FTP en Ubuntu?",
    answers: [
      "apt install vsftpd",
      "apt install ftpd",
      "yum install ftp",
      "apt install ftp"
    ],
    correct: [0]
  },
  {
    question: "¿Qué afirmaciones son correctas sobre Samba?",
    answers: [
      "Permite administrar de forma remota un sistema",
      "Samba permite compartir carpetas entre máquinas Windows y Linux",
      "Es necesario añadir los usuarios al servicio",
      "Samba solo permite compartir carpetas entre máquinas Windows"
    ],
    correct: [1, 2]
  },
  {
    question: "¿Qué comando permite instalar el servidor FTP en Ubuntu?",
    answers: [
      "yum install ftp",
      "apt install vsftpd",
      "apt install ftp",
      "apt install ftpd"
    ],
    correct: [1]
  },
  {
    question: "¿Cuál es el archivo de configuración de las tarjetas de red en Ubuntu?",
    answers: [
      "/etc/network/interfaces",
      "/etc/networking/enp0s3",
      "/www/network/interfaces",
      "/var/network/enp0s3"
    ],
    correct: [0]
  },
  {
    question: "¿Qué fichero almacena los servidores DNS que utiliza el equipo?",
    answers: [
      "/etc/sysconfig/network.conf",
      "/etc/resolv.conf",
      "/etc/hostname",
      "/etc/dns.conf"
    ],
    correct: [1]
  },
  {
    question: "¿Es posible la transmisión de ficheros por FTP mediante el protocolo SSH?",
    answers: [
      "Si, y además es FTP seguro (SFTP)",
      "Si, ofrece FTP estándar",
      "No, SSH y FTP no con compatibles porque SSH se cifra con 128 bits",
      "No, porque son servicios diferentes"
    ],
    correct: [0]
  },
  {
    question: "¿Qué servicio permite conectarse a un servidor de forma remota?",
    answers: [
      "Open SSH",
      "Todas son verdaderas",
      "VNC",
      "Telnet"
    ],
    correct: [1]
  },
  {
    question: "¿En qué directorio se alojan por defecto las páginas web en Apache?",
    answers: [
      "/var/html",
      "/etc/www/html",
      "/www/apache2",
      "/var/www/html"
    ],
    correct: [3]
  },
  {
    question: "¿Para qué se utiliza el servicio VNC?",
    answers: [
      "Para acceder de forma remota a equipos mediante terminal",
      "Porque es el único servicio que permite conexiones seguras",
      "Para crear redes privadas virtuales",
      "Para acceder de forma remota a equipos mediante la consola gráfica"
    ],
    correct: [3]
  },
  {
    question: "¿Qué afirma sobre el siguiente comando?\nuser@host:~$ scp juan@192.168.100.103:/etc/passwd /home/user",
    answers: [
      "El usuario juan tiene que existir en la máquina cliente",
      "Estoy transfiriendo un archivo desde un cliente ssh al servidor ssh",
      "El usuario juan tiene que existir en la máquina servidor",
      "Estoy transfiriendo un archivo desde el servidor ssh a un cliente ssh"
    ],
    correct: [2, 3]
  },
  {
    question: "¿Cuál es falsa sobre Open ssh?",
    answers: [
      "Utiliza el puerto 22",
      "Incorpora acceso remoto gráfico",
      "Incorpora ftp seguro",
      "El archivo de configuración es /etc/ssh/sshd_config"
    ],
    correct: [1]
  },
  {
    question: "¿Cuántos bits tiene una dirección IPv4 y cómo se agrupan?",
    answers: [
      "64 bits, agrupados en 8 octetos",
      "32 bits, agrupados en 6 octetos",
      "32 bits, agrupados en 4 octetos",
      "128 bits, agrupados en 4 octetos"
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es el rango total de direcciones IPv4 para la Clase C?",
    answers: [
      "0.0.0.0 a 127.255.255.255",
      "128.0.0.0 a 191.255.255.255",
      "192.0.0.0 a 223.255.255.255",
      "224.0.0.0 a 239.255.255.255"
    ],
    correct: [2]
  },
  {
    question: "¿Cómo diferencia un ordenador entre la parte de RED y la parte de HOST en una dirección IPv4?",
    answers: [
      "Usando el protocolo DHCP",
      "Consultando un servidor DNS",
      "Utilizando una MÁSCARA de red",
      "Mediante la dirección MAC"
    ],
    correct: [2]
  },
  {
    question: "¿Qué operación lógica utiliza la máscara de red para determinar la dirección de red?",
    answers: [
      "Operación Lógica 'OR'",
      "Operación Lógica 'XOR'",
      "Operación Lógica 'NOT'",
      "Operación Lógica 'AND'"
    ],
    correct: [3]
  },
  {
    question: "¿Cuál es el concepto básico de las subredes?",
    answers: [
      "Dividir la parte de HOST en segmentos más grandes",
      "Aumentar el número total de direcciones IP disponibles",
      "La parte de RED toma prestado un número de bits de la parte de HOST",
      "Cambiar la operación lógica utilizada por la máscara"
    ],
    correct: [2]
  },
  {
    question: "¿Dónde se especifica la configuración de red estática (IP, máscara, puerta de enlace) en Linux?",
    answers: [
      "/etc/resolv.conf",
      "/etc/hostname",
      "/etc/sysconfig/network-scripts/ifcfg-eth0",
      "/etc/network/interfaces"
    ],
    correct: [3]
  },
  {
    question: "¿Qué comando activa el reenvío de paquetes (ip_forward) para que Linux actúe como router?",
    answers: [
      "ifconfig enable ip_forward",
      "route add ip_forward on",
      "echo 1 > /proc/sys/net/ipv4/ip_forward",
      "systemctl enable ip_forwarding"
    ],
    correct: [2]
  },
  {
    question: "¿Qué comando se utiliza tanto en Linux como en Windows para comprobar si un equipo está conectado?",
    answers: [
      "ifconfig (Linux) / ipconfig (Windows)",
      "traceroute (Linux) / tracert (Windows)",
      "ping",
      "netstat"
    ],
    correct: [2]
  },
  {
    question: "¿Qué servicio en Linux se utiliza para compartir archivos entre sistemas Linux y Windows?",
    answers: [
      "NFS",
      "Apache",
      "SSH",
      "Samba"
    ],
    correct: [3]
  },
  {
    question: "¿Qué servicio permite acceso remoto seguro y transferencia de archivos en Linux?",
    answers: [
      "FTP",
      "Telnet",
      "SSH",
      "RDP"
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es una diferencia clave en la administración entre un Grupo de Trabajo y un Dominio en Windows?",
    answers: [
      "Un Grupo de Trabajo no permite compartir archivos, mientras que un Dominio sí",
      "Un Grupo de Trabajo es para redes grandes, mientras que un Dominio es para redes pequeñas",
      "En un Grupo de Trabajo, la administración es centralizada; en un Dominio, es local",
      "En un Grupo de Trabajo, la administración es local; en un Dominio, un servidor central gestiona usuarios y permisos"
    ],
    correct: [3]
  },
  {
    question: "¿Qué comando en Windows muestra la configuración IP del adaptador de red?",
    answers: [
      "ifconfig",
      "hostname",
      "tracert",
      "ipconfig"
    ],
    correct: [3]
  },
  {
    question: "¿Qué comando en Windows muestra la ruta que siguen los paquetes a un destino?",
    answers: [
      "ping",
      "netstat",
      "ipconfig",
      "tracert"
    ],
    correct: [3]
  },
  {
    question: "¿Qué es un servicio en redes?",
    answers: [
      "Es un equipo que conecta redes",
      "Una función activa que un equipo presta a otros",
      "Una dirección IP privada",
      "Un tipo de protocolo de enrutamiento"
    ],
    correct: [1]
  },
  {
    question: "¿Qué protocolos y puertos se utilizan para servicios web?",
    answers: [
      "FTP, puerto 21",
      "SMTP y POP3, puertos 25 y 110",
      "HTTP (80) y HTTPS (443)",
      "RDP, puerto 3389"
    ],
    correct: [2]
  },
  {
    question: "¿Qué protocolo y puerto se usa para enviar correos?",
    answers: [
      "POP3, puerto 110",
      "IMAP, puerto 143",
      "HTTP, puerto 80",
      "SMTP, puerto 25"
    ],
    correct: [3]
  },
  {
    question: "¿Qué protocolo usa el Escritorio remoto (RDP) en Windows?",
    answers: [
      "SSH, puerto 22",
      "VNC, puerto 5900",
      "RDP, puerto 3389",
      "Telnet, puerto 23"
    ],
    correct: [2]
  },
  {
    question: "¿Cuándo se usa la clonación de disco?",
    answers: [
      "Si solo quieres proteger archivos importantes",
      "Para cambiar de disco sin reinstalar el sistema operativo",
      "Para copias incrementales",
      "Para clonar la red"
    ],
    correct: [1]
  },
  {
    question: "¿Qué contiene un archivo de imagen de disco?",
    answers: [
      "Solo una copia de los archivos de usuario",
      "Solo el sistema operativo",
      "Copia exacta del disco o partición con SO, archivos y configuraciones",
      "Una copia incremental"
    ],
    correct: [2]
  },
  {
    question: "¿Qué necesitas para restaurar una copia diferencial?",
    answers: [
      "Solo la última copia diferencial",
      "La copia completa y todas las incrementales",
      "La copia completa y la última copia diferencial",
      "Solo la más reciente"
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es una función principal del comando `dd` en Linux?",
    answers: [
      "Reparar errores del sistema de archivos",
      "Gestionar particiones",
      "Copiar, clonar y convertir datos de discos o particiones",
      "Formatear unidades de disco"
    ],
    correct: [2]
  },
  {
    question: "¿Cuáles son los dos tipos principales de cifrado?",
    answers: [
      "Cifrado de red y cifrado de servidor",
      "Cifrado simétrico y cifrado asimétrico",
      "Cifrado de disco completo y cifrado de archivos/carpetas",
      "Cifrado de hardware y cifrado de software"
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es el propósito principal de un sistema RAID?",
    answers: [
      "Permitir el acceso remoto a archivos compartidos",
      "Cifrar los datos almacenados en múltiples discos",
      "Mejorar rendimiento, redundancia o ambos combinando discos",
      "Realizar copias automáticas"
    ],
    correct: [2]
  },
  {
    question: "¿Cuántas formas principales hay para implementar RAID?",
    answers: [
      "Solo por hardware",
      "Solo por software",
      "Por hardware y por software",
      "Por hardware, software y mixto"
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es una ventaja clave del RAID por hardware?",
    answers: [
      "Es más económico",
      "Es más flexible",
      "No depende del procesador del PC, mejorando rendimiento",
      "No requiere drivers"
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es una desventaja clave del RAID por software?",
    answers: [
      "Requiere una controladora",
      "No permite RAID 5 ni 6",
      "Consume recursos del sistema (CPU y RAM)",
      "Ofrece menor capacidad de almacenamiento"
    ],
    correct: [2]
  },
  {
    question: "¿Qué característica tiene el nivel RAID 0?",
    answers: [
      "Guarda información de paridad",
      "Divide información en bloques entre discos, sin redundancia",
      "Copia la información en todos los discos",
      "Requiere al menos 3 discos"
    ],
    correct: [1]
  },
  {
    question: "¿Qué hace el comando `adduser` en Linux?",
    answers: [
      "Modifica usuarios existentes",
      "Crea el usuario, su grupo principal y solicita contraseña",
      "Solo crea el usuario",
      "No crea el directorio home"
    ],
    correct: [1]
  },
  {
    question: "¿Qué comando elimina un usuario y su directorio home?",
    answers: [
      "sudo userdel nombre_usuario",
      "sudo userdel -f nombre_usuario",
      "sudo userdel -r nombre_usuario",
      "sudo deluser nombre_usuario"
    ],
    correct: [2]
  },
  {
    question: "¿Qué condición debe cumplirse para eliminar un grupo en Linux?",
    answers: [
      "Debe tener usuarios con home",
      "Debe ser el grupo principal del usuario root",
      "Debe estar vacío o no ser grupo principal de ningún usuario",
      "Debe estar asociado a una red"
    ],
    correct: [2]
  },
  {
    question: "¿Qué afirmación es correcta para crear un disco reflejado en Windows?",
    answers: [
      "El disco puede ser básico o dinámico",
      "Equivale a RAID 0",
      "El disco se puede particionar solo en MBR",
      "No se puede crear RAID en Windows"
    ],
    correct: [0]
  },
  {
    question: "¿Cuáles programas permiten copiar carpetas de un PC a otro utilizando la red?",
    answers: [
      "rsync y scp",
      "dump y scp",
      "tar y dump",
      "ftp y cp"
    ],
    correct: [0]
  },
  {
    question: "¿Con 4 discos de 2 TB, en qué caso se consigue un disco de 6 TB?",
    answers: [
      "RAID 1",
      "RAID 0",
      "RAID 10",
      "RAID 5"
    ],
    correct: [3]
  },
  {
    question: "¿Qué afirmación es falsa en Windows 10 Profesional?",
    answers: [
      "Se puede utilizar EFS",
      "Se puede utilizar BitLocker",
      "Se puede crear un volumen RAID 5",
      "Se puede crear un volumen distribuido"
    ],
    correct: [2]
  },
  {
    question: "¿De qué RAID no se puede recuperar la información si se estropea un disco?",
    answers: [
      "RAID 1",
      "RAID 5",
      "RAID 0",
      "RAID 10"
    ],
    correct: [2]
  },
  {
    question: "¿Cuáles son correctas al realizar clonaciones o imágenes?",
    answers: [
      "Se puede guardar una imagen en otra partición del mismo disco",
      "No se puede clonar una partición al mismo disco",
      "Siempre se necesita crear las mismas particiones de antemano",
      "Solo se pueden clonar discos completos"
    ],
    correct: [0]
  },
  {
    question: "¿Qué RAID, con posibilidad de recuperar datos, es más económico proporcionalmente?",
    answers: [
      "RAID 1",
      "RAID 10",
      "RAID 5",
      "RAID 0"
    ],
    correct: [2]
  },
  {
    question: "¿Cuál programa incorpora Windows para cifrar carpetas o archivos?",
    answers: [
      "BitLocker",
      "NTFS",
      "EFS",
      "VeraCrypt"
    ],
    correct: [2]
  },
  {
    question: "¿Qué afirmación es correcta sobre VeraCrypt?",
    answers: [
      "Solo sirve en Linux",
      "Permite cifrar unidades, carpetas o archivos y se usa en varios sistemas",
      "Es parte del sistema operativo",
      "Solo se usa con discos externos"
    ],
    correct: [1]
  },
  {
    question: "¿Qué herramienta usarías si quieres cifrar un pendrive compatible con Windows y Linux?",
    answers: [
      "BitLocker",
      "EFS",
      "VeraCrypt",
      "NTFS Encrypt"
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es la mejor opción para tener una copia del sistema Windows en caso de fallo?",
    answers: [
      "Clonar el sistema",
      "Copiar C con comando",
      "Crear una imagen del sistema",
      "Guardar archivos manualmente"
    ],
    correct: [2]
  },
  {
    question: "¿Qué afirmación es correcta para crear un disco reflejado en Windows?",
    answers: [
      "Equivale a RAID 1",
      "Se requiere GPT",
      "Se necesita un software externo",
      "No se puede hacer desde Windows"
    ],
    correct: [0]
  },
  {
    question: "¿Cuáles programas permiten copiar carpetas de un PC a otro utilizando la red?",
    answers: [
      "rsync y scp",
      "dump y rsync",
      "tar y cp",
      "ftp y netcat"
    ],
    correct: [0]
  },
  {
    question: "¿Con 4 discos de 2 TB, en qué caso se consigue un disco de 6 TB?",
    answers: [
      "RAID 1",
      "RAID 5",
      "RAID 0",
      "RAID 10"
    ],
    correct: [1]
  },
  {
    question: "¿Qué afirmación es falsa en Windows 10 Profesional?",
    answers: [
      "Se puede utilizar EFS",
      "Se puede crear un volumen RAID 5",
      "Se puede utilizar BitLocker",
      "Se puede crear un volumen distribuido"
    ],
    correct: [1]
  },
  {
    question: "Indica los programas libres para clonar un disco",
    answers: [
      "dd y Clonezilla",
      "Acronis y Ghost",
      "dd y Norton",
      "Macrium y Acronis"
    ],
    correct: [0]
  },
  {
    question: "¿Cuál de las siguientes utilidades no permite clonar discos duros?",
    answers: [
      "tar",
      "dd",
      "Clonezilla",
      "Ghost"
    ],
    correct: [0]
  },
  {
    question: "¿Qué afirmación es falsa sobre BitLocker?",
    answers: [
      "Se puede usar un pendrive como clave de cifrado",
      "Está orientado al uso de TPM",
      "Cifra carpetas y archivos individualmente",
      "Permite cifrar unidades completas"
    ],
    correct: [2]
  },
  {
    question: "¿Qué afirmación es correcta sobre VeraCrypt?",
    answers: [
      "Solo funciona en Windows",
      "Se puede usar para crear contenedores cifrados",
      "No admite particiones",
      "No es compatible con discos externos"
    ],
    correct: [1]
  },
  {
    question: "¿Qué herramienta usarías si quieres cifrar un pendrive y usarlo en Windows y Linux?",
    answers: [
      "BitLocker",
      "EFS",
      "VeraCrypt",
      "TPM"
    ],
    correct: [2]
  },
  {
    question: "¿Qué afirmación es correcta sobre la instalación de Windows en una unidad flash para restaurar en el futuro?",
    answers: [
      "Clonar el sistema",
      "Crear una imagen del sistema",
      "Usar BitLocker",
      "Copiar C con xcopy"
    ],
    correct: [1]
  },
  {
    question: "¿Cuál es una ventaja clave del RAID por hardware?",
    answers: [
      "Más económico",
      "Mejor rendimiento al liberar al procesador",
      "Más fácil de instalar",
      "No requiere controladora"
    ],
    correct: [1]
  },
  {
    question: "¿Cuál es una desventaja clave del RAID por software?",
    answers: [
      "Incompatible con discos SATA",
      "Depende del sistema operativo",
      "Consume recursos del sistema",
      "No permite redundancia"
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es una característica del nivel RAID 0?",
    answers: [
      "Información duplicada",
      "Divide los datos entre discos sin redundancia",
      "Requiere 3 discos mínimo",
      "Incluye datos de paridad"
    ],
    correct: [1]
  },
  {
    question: "¿Qué comando en Linux permite copiar a nivel de bloques para clonar discos?",
    answers: [
      "rsync",
      "tar",
      "dd",
      "cp"
    ],
    correct: [2]
  },
  {
    question: "¿Qué contiene una imagen de disco en formato .img o .iso?",
    answers: [
      "Solo archivos de usuario",
      "Sistema base sin configuraciones",
      "Una copia exacta de disco o partición",
      "Solo particiones del sistema"
    ],
    correct: [2]
  },
  {
    question: "¿Qué método de respaldo requiere la copia completa y la última copia diferencial para restaurar?",
    answers: [
      "Copia incremental",
      "Copia diferencial",
      "Copia espejo",
      "Solo la última copia completa"
    ],
    correct: [1]
  },
  {
    question: "¿Qué protocolo y puerto se usa para enviar correos desde el cliente al servidor?",
    answers: [
      "POP3, 110",
      "SMTP, 25",
      "IMAP, 143",
      "HTTP, 80"
    ],
    correct: [1]
  },
  {
    question: "¿Qué protocolo y puerto utiliza el escritorio remoto en Windows?",
    answers: [
      "SSH, 22",
      "VNC, 5900",
      "RDP, 3389",
      "Telnet, 23"
    ],
    correct: [2]
  },
  {
    question: "¿Qué diferencia clave hay entre Grupo de Trabajo y Dominio en Windows?",
    answers: [
      "Dominio no permite compartir archivos",
      "Grupo de trabajo tiene administración local, dominio tiene servidor central",
      "Grupo de trabajo es para grandes redes",
      "Dominio es solo para redes pequeñas"
    ],
    correct: [1]
  },
  {
    question: "¿Qué comando en Windows se usa para mostrar la configuración IP, máscara y puerta de enlace?",
    answers: [
      "tracert",
      "ipconfig",
      "ping",
      "netstat"
    ],
    correct: [1]
  },
  {
    question: "¿Qué comando en Windows se usa para ver la ruta que siguen los paquetes a su destino?",
    answers: [
      "ping",
      "ipconfig",
      "netstat",
      "tracert"
    ],
    correct: [3]
  },
  {
    question: "¿Qué es un servicio en redes?",
    answers: [
      "Un programa de correo",
      "Un dispositivo físico de red",
      "Una función activa que un equipo presta a otros",
      "Una dirección IP fija"
    ],
    correct: [2]
  },
  {
    question: "¿Qué es un puerto en redes?",
    answers: [
      "Una interfaz de red inalámbrica",
      "Una dirección MAC alternativa",
      "Una puerta lógica para distinguir servicios",
      "Un protocolo de encriptación"
    ],
    correct: [2]
  },
  {
    question: "¿Qué es un protocolo en redes?",
    answers: [
      "Un identificador de usuario en la red",
      "Un conjunto de reglas para la comunicación",
      "Una dirección asignada por DHCP",
      "Un tipo de archivo de configuración"
    ],
    correct: [1]
  },
  {
    question: "¿Qué puertos se usan para HTTP y HTTPS?",
    answers: [
      "FTP (21) y FTPS (22)",
      "SMTP (25) y POP3 (110)",
      "HTTP (80) y HTTPS (443)",
      "RDP (3389)"
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es la diferencia entre clonación e imagen de disco?",
    answers: [
      "La clonación copia todo directamente, la imagen crea un archivo único",
      "No hay diferencia",
      "La imagen se copia en la nube, la clonación es local",
      "La imagen incluye más archivos que la clonación"
    ],
    correct: [0]
  },
  {
    question: "¿Qué herramienta en Linux permite crear una imagen de disco de bajo nivel?",
    answers: [
      "rsync",
      "dd",
      "fdisk",
      "gzip"
    ],
    correct: [1]
  },
  {
    question: "¿Qué comando elimina un usuario y su directorio home en Linux?",
    answers: [
      "sudo deluser usuario",
      "sudo userdel usuario",
      "sudo userdel -r usuario",
      "sudo delete usuario"
    ],
    correct: [2]
  },
  {
    question: "¿Qué condición se debe cumplir para eliminar un grupo con groupdel?",
    answers: [
      "El grupo debe tener al menos un usuario",
      "Debe estar asignado como grupo principal a un usuario",
      "No debe ser el grupo principal de ningún usuario",
      "Debe contener archivos en /home"
    ],
    correct: [2]
  },
  {
    question: "¿Qué tipo de cifrado cifra todo el disco incluyendo el sistema operativo?",
    answers: [
      "Cifrado asimétrico",
      "Cifrado por archivo",
      "Cifrado de disco completo",
      "Cifrado de backup"
    ],
    correct: [2]
  },
  {
    question: "¿Qué tipo de cifrado cifra archivos o carpetas individualmente?",
    answers: [
      "Cifrado simétrico",
      "Cifrado de disco completo",
      "Cifrado de archivos/carpetas",
      "Cifrado SHA"
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es el propósito de un sistema RAID?",
    answers: [
      "Cifrar los discos",
      "Compartir archivos en red",
      "Aumentar rendimiento y/o tolerancia a fallos",
      "Reemplazar discos duros SSD"
    ],
    correct: [2]
  },
  {
    question: "¿Cuáles son las dos formas de implementar RAID?",
    answers: [
      "Por hardware y por software",
      "Solo por hardware",
      "En la BIOS y en la UEFI",
      "Por cable y por red"
    ],
    correct: [0]
  },
  {
    question: "¿Qué ventaja tiene el RAID por hardware?",
    answers: [
      "Mayor flexibilidad",
      "No necesita configurarse",
      "No consume recursos del sistema",
      "Es más económico"
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es una desventaja del RAID por software?",
    answers: [
      "Requiere discos especiales",
      "Consume CPU y RAM",
      "No se puede hacer con discos SSD",
      "No es compatible con sistemas operativos"
    ],
    correct: [1]
  },
  {
    question: "¿Qué caracteriza al RAID 0?",
    answers: [
      "Copia los datos en discos distintos para redundancia",
      "Divide los datos entre discos sin redundancia",
      "Requiere mínimo 3 discos",
      "Es el más seguro"
    ],
    correct: [1]
  },
  {
    question: "¿Qué hace el comando `adduser` en Linux?",
    answers: [
      "Crea usuario sin grupo",
      "Es un script de alto nivel que crea usuario, grupo y directorio",
      "Requiere muchos parámetros manuales",
      "Solo borra usuarios"
    ],
    correct: [1]
  },
  {
    question: "¿Qué hace `sudo userdel -r nombre_usuario`?",
    answers: [
      "Borra usuario y grupo",
      "Borra usuario y directorio home",
      "Reinicia el sistema",
      "Elimina todos los usuarios"
    ],
    correct: [1]
  },
  {
    question: "¿Qué debe cumplirse para usar `groupdel` en un grupo?",
    answers: [
      "Debe haber usuarios en el grupo",
      "Debe ser un grupo del sistema",
      "No debe ser grupo principal de ningún usuario",
      "Debe haber sido creado por root"
    ],
    correct: [2]
  },
  {
    question: "¿Qué afirmación es correcta para crear un disco reflejado en Windows?",
    answers: [
      "Equivale a RAID 1",
      "Equivale a RAID 0",
      "El disco puede ser básico o dinámico",
      "El disco se puede particionar tanto MBR como GPT"
    ],
    correct: [0]
  },
  {
    question: "¿Qué programas permiten copiar carpetas de un PC a otro utilizando la red?",
    answers: [
      "rsync y scp",
      "dump y scp",
      "scp y tar",
      "tar y dump"
    ],
    correct: [0]
  },
  {
    question: "¿Con 4 discos de 2 TB en qué caso se consigue un disco de 6 TB?",
    answers: [
      "RAID 1",
      "RAID 0",
      "RAID 10",
      "RAID 5"
    ],
    correct: [3]
  },
  {
    question: "¿Qué afirmación es falsa en Windows 10 Profesional?",
    answers: [
      "Se puede crear un volumen RAID 5",
      "Se puede crear un volumen distribuido",
      "Se puede utilizar EFS",
      "Se puede utilizar BitLocker"
    ],
    correct: [0]
  },
  {
    question: "¿De qué RAID no se puede recuperar la información si se estropea un disco?",
    answers: [
      "RAID 1",
      "RAID 5",
      "RAID 0",
      "En todos los RAID se puede recuperar la información"
    ],
    correct: [2]
  },
  {
    question: "¿Cuáles son correctas al realizar clonaciones o imágenes?",
    answers: [
      "Se puede clonar una partición a otra del mismo disco",
      "Solo se puede clonar entre discos distintos",
      "Hay que crear previamente las particiones",
      "Solo es posible con RAID"
    ],
    correct: [0]
  },
  {
    question: "¿Cuál programa incorpora Windows para cifrar carpetas o archivos?",
    answers: [
      "VeraCrypt",
      "EFS",
      "NTFS",
      "BitLocker"
    ],
    correct: [1]
  },
  {
    question: "¿Qué afirmación es correcta sobre VeraCrypt?",
    answers: [
      "Solo funciona en Linux",
      "No permite contenedor cifrado",
      "Todas son correctas",
      "Se pueden cifrar particiones o unidades"
    ],
    correct: [3]
  },
  {
    question: "¿Qué herramienta permite cifrar un pendrive y usarlo en Windows y Linux?",
    answers: [
      "BitLocker",
      "EFS",
      "VeraCrypt",
      "dd"
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es la mejor opción para guardar una instalación de Windows en USB como respaldo?",
    answers: [
      "Crear una imagen del sistema",
      "Copiar los archivos manualmente",
      "Clonar solo la carpeta C:/Windows",
      "Hacer backup con Word"
    ],
    correct: [0]
  },
  {
    question: "¿Qué comando se utiliza para eliminar una cuenta de usuario en Linux, incluyendo su directorio Home y su correo si existe?",
    answers: [
      "sudo userdel nombre_usuario",
      "sudo userdel -f nombre_usuario",
      "sudo userdel -r nombre_usuario",
      "sudo deluser nombre_usuario"
    ],
    correct: [2]
  },
  {
    question: "¿Qué condición se debe cumplir para poder eliminar un grupo en Linux con sudo groupdel nombre_grupo?",
    answers: [
      "El grupo debe estar vacío de usuarios.",
      "El grupo no debe ser el grupo principal de ningún usuario, o los usuarios deben haber sido eliminados o cambiado su grupo principal.",
      "La administración debe hacerse desde la cuenta root, no con sudo.",
      "Todos los usuarios del grupo deben tener su directorio Home eliminado previamente."
    ],
    correct: [1]
  },
  {
    question: "¿Cuál es el archivo de configuración de las tarjetas de red en Ubuntu?",
    answers: [
      "/etc/network/interfaces",
      "/etc/networking/enp0s3",
      "/www/network/interfaces",
      "/var/network/enp0s3"
    ],
    correct: [0]
  },
  {
    question: "¿Cuál es el comando que permite instalar el servidor FTP en Ubuntu?",
    answers: [
      "apt install ftp",
      "apt install ftpd",
      "apt install vsftpd",
      "yum install ftp"
    ],
    correct: [2]
  },
  {
    question: "¿Qué fichero almacena los servidores DNS que utiliza el equipo?",
    answers: [
      "/etc/sysconfig/network.conf",
      "/etc/resolv.conf",
      "/etc/hostname",
      "/etc/dns.conf"
    ],
    correct: [1]
  },
  {
    question: "¿Qué servicio permite conectarse a un servidor de forma remota?",
    answers: [
      "Open SSH.",
      "VNC.",
      "Telnet.",
      "Todas son verdaderas."
    ],
    correct: [3]
  },
  {
    question: "¿En Apache ¿en qué directorio se alojan por defecto las páginas web?",
    answers: [
      "/var/html",
      "/etc/www/html",
      "/var/www/html",
      "/www/apache2"
    ],
    correct: [2]
  },
  {
    question: "¿Para qué se utiliza el servicio VNC?",
    answers: [
      "Para acceder de forma remota a equipos mediante terminal.",
      "Porque es el único servicio que permite conexiones seguras..",
      "Para crear redes privadas virtuales.",
      "Para acceder de forma remota a equipos mediante la consola gráfica."
    ],
    correct: [3]
  },
  {
    question: "¿Cuáles son ciertas sobre el siguiente comando? user@host:~$  scp juan@192.168.100.103:/etc/passwd /home/user",
    answers: [
      "El usuario juan tiene que existir en la máquina cliente",
      "Estoy transfiriendo un archivo desde un cliente ssh al servidor ssh",
      "El usuario juan tiene que existir en la máquina servidor",
      "Estoy transfiriendo un archivo desde el servidor ssh a un cliente ssh"
    ],
    correct: [2, 3]
  },
  {
    question: "¿Cuál es falsa sobre Open ssh?",
    answers: [
      "Utiliza el puerto 22",
      "Incorpora acceso remoto gráfico",
      "Incorpora ftp seguro",
      "El archivo de configuración es /etc/ssh/sshd_config"
    ],
    correct: [1]
  },
  {
    question: "¿Cuántos bits tiene una dirección IPv4 y cómo se agrupan?",
    answers: [
      "64 bits, agrupados en 8 octetos.",
      "32 bits, agrupados en 6 octetos.",
      "32 bits, agrupados en 4 octetos.",
      "128 bits, agrupados en 4 octetos."
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es el rango total de direcciones IPv4 para la Clase C?",
    answers: [
      "0.0.0.0 a 127.255.255.255",
      "128.0.0.0 a 191.255.255.255",
      "192.0.0.0 a 223.255.255.255",
      "224.0.0.0 a 239.255.255.255"
    ],
    correct: [2]
  },
  {
    question: "¿Cómo diferencia un ordenador entre la parte de RED y la parte de HOST en una dirección IPv4?",
    answers: [
      "Usando el protocolo DHCP.",
      "Consultando un servidor DNS.",
      "Utilizando una MÁSCARA de red.",
      "Mediante la dirección MAC."
    ],
    correct: [2]
  },
  {
    question: "¿Qué operación lógica utiliza la máscara de red para determinar la dirección de red?",
    answers: [
      "Operación Lógica 'OR'",
      "Operación Lógica 'XOR'",
      "Operación Lógica 'NOT'",
      "Operación Lógica 'AND'"
    ],
    correct: [3]
  },
  {
    question: "¿Cuál es el concepto básico de las subredes?",
    answers: [
      "Dividir la parte de HOST en segmentos más grandes.",
      "Aumentar el número total de direcciones IP disponibles.",
      "La parte de RED toma prestado un número de bits de la parte de HOST.",
      "Cambiar la operación lógica utilizada por la máscara."
    ],
    correct: [2]
  },
  {
    question: "¿En qué archivo se especifica la configuración de red estática (IP, máscara, puerta de enlace) en Linux?",
    answers: [
      "/etc/resolv.conf",
      "/etc/hostname",
      "/etc/sysconfig/network-scripts/ifcfg-eth0",
      "/etc/network/interfaces"
    ],
    correct: [3]
  },
  {
    question: "¿Qué comando se usa para activar el reenvío de paquetes (ip_forward) en Linux?",
    answers: [
      "ifconfig enable ip_forward",
      "route add ip_forward on",
      "echo 1 > /proc/sys/net/ipv4/ip_forward",
      "systemctl enable ip_forwarding"
    ],
    correct: [2]
  },
  {
    question: "¿Qué comando se utiliza tanto en Linux como en Windows para comprobar si un equipo está encendido, conectado y responde?",
    answers: [
      "ifconfig (Linux) / ipconfig (Windows)",
      "traceroute (Linux) / tracert (Windows)",
      "ping",
      "netstat"
    ],
    correct: [2]
  },
  {
    question: "¿Qué servicio en Linux se utiliza específicamente para compartir carpetas y archivos entre sistemas Linux y Windows?",
    answers: [
      "NFS",
      "Apache",
      "SSH",
      "Samba"
    ],
    correct: [3]
  },
  {
    question: "¿Qué servicio en Linux permite el acceso remoto seguro a servidores y la transferencia de archivos?",
    answers: [
      "FTP",
      "Telnet",
      "SSH",
      "RDP"
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es una diferencia clave entre un Grupo de Trabajo y un Dominio en Windows?",
    answers: [
      "Un Grupo de Trabajo no permite compartir archivos, mientras que un Dominio sí.",
      "Un Grupo de Trabajo es para redes grandes, mientras que un Dominio es para redes pequeñas.",
      "En un Grupo de Trabajo, la administración es centralizada; en un Dominio, es local.",
      "En un Grupo de Trabajo, la administración es local; en un Dominio, un servidor central gestiona usuarios y permisos."
    ],
    correct: [3]
  },
  {
    question: "¿Qué comando en Windows se utiliza para mostrar la configuración de red del adaptador?",
    answers: [
      "ifconfig",
      "hostname",
      "tracert",
      "ipconfig"
    ],
    correct: [3]
  },
  {
    question: "¿Qué comando en Windows muestra la ruta que siguen los paquetes hasta llegar a un destino?",
    answers: [
      "ping",
      "netstat",
      "ipconfig",
      "tracert"
    ],
    correct: [3]
  },
  {
    question: "¿Qué es un servicio, protocolo y puerto en el contexto de redes?",
    answers: [
      "Un servicio es un hardware, un protocolo es la IP, un puerto es físico.",
      "Un servicio es una app local, protocolo es DNS, puerto es hardware.",
      "Un servicio es una función activa, protocolo es el lenguaje, puerto es una puerta lógica.",
      "Todos son lo mismo."
    ],
    correct: [2]
  },
  {
    question: "¿Qué protocolo(s) y puerto(s) utiliza el servicio web para ofrecer páginas?",
    answers: [
      "FTP, puerto 21",
      "SMTP, puerto 25 y POP3, puerto 110",
      "HTTP (puerto 80) y HTTPS (puerto 443)",
      "RDP, puerto 3389"
    ],
    correct: [2]
  },
  {
    question: "¿Qué protocolo y puerto se usa para ENVIAR correos desde el cliente?",
    answers: [
      "POP3, puerto 110",
      "IMAP, puerto 143",
      "HTTP, puerto 80",
      "SMTP, puerto 25"
    ],
    correct: [3]
  },
  {
    question: "¿Cuál es el protocolo y puerto más conocido del Escritorio Remoto (RDP)?",
    answers: [
      "SSH, puerto 22",
      "VNC, puerto 5900",
      "RDP, puerto 3389",
      "Telnet, puerto 23"
    ],
    correct: [2]
  },
  {
    question: "¿Cuándo es más apropiado utilizar la CLONACIÓN de disco?",
    answers: [
      "Si solo quieres proteger archivos importantes.",
      "Si quieres una copia completa para restaurar en el mismo disco.",
      "Si quieres cambiar de disco sin reinstalar SO y apps.",
      "Si necesitas copias incrementales."
    ],
    correct: [2]
  },
  {
    question: "¿Qué contiene un archivo de imagen de disco (.img o .iso)?",
    answers: [
      "Solo una copia de los archivos de usuario.",
      "Solo el SO base.",
      "Una copia exacta del disco o partición, como un archivo único.",
      "Solo una copia incremental."
    ],
    correct: [2]
  },
  {
    question: "Para restaurar una copia diferencial, ¿qué necesitas?",
    answers: [
      "Solo la última copia diferencial.",
      "La copia completa y todas las incrementales desde la última completa.",
      "La copia completa y la última copia diferencial.",
      "Solo la copia más reciente."
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es una de las funciones principales del comando 'dd' en Linux?",
    answers: [
      "Gestionar particiones",
      "Reparar errores del sistema de archivos",
      "Copiar, clonar y convertir datos de discos o particiones",
      "Formatear unidades de disco"
    ],
    correct: [2]
  },
  {
    question: "¿Cuáles son los dos tipos principales de cifrado?",
    answers: [
      "Cifrado de red y de servidor",
      "Cifrado simétrico y asimétrico",
      "Cifrado de disco completo y de archivos/carpetas",
      "Cifrado de hardware y de software"
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es el propósito principal de un sistema RAID?",
    answers: [
      "Cifrar datos almacenados",
      "Acceso remoto a archivos",
      "Combinar discos para rendimiento o redundancia",
      "Hacer copias de seguridad"
    ],
    correct: [2]
  },
  {
    question: "¿Cuántas formas principales hay de implementar tecnología RAID?",
    answers: [
      "Una forma: solo por hardware",
      "Una forma: solo por software",
      "Dos formas: por hardware y por software",
      "Tres formas: hardware, software y mixto"
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es una ventaja del RAID por hardware frente al software?",
    answers: [
      "Es más económico",
      "Más fácil de configurar",
      "Mejor rendimiento al no depender del procesador",
      "No necesita hardware adicional"
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es una desventaja del RAID por software frente al RAID por hardware?",
    answers: [
      "Requiere controladora adicional",
      "Incompatible con configuraciones RAID avanzadas",
      "Usa recursos del sistema (CPU, RAM)",
      "Ofrece menor flexibilidad"
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es una característica del nivel RAID 0?",
    answers: [
      "Copia la info en ambos discos para redundancia",
      "Guarda paridad para tolerancia a fallos",
      "Requiere al menos 3 discos",
      "Divide info en bloques y la reparte sin redundancia"
    ],
    correct: [3]
  },
  {
    question: "¿Qué hace el comando `adduser` en Linux?",
    answers: [
      "Solo crea el usuario sin grupo ni directorio",
      "Requiere especificar todos los parámetros manualmente",
      "Crea usuario, grupo principal, pide contraseña e info adicional",
      "Solo se usa para modificar usuarios existentes"
    ],
    correct: [2]
  },
  {
    question: "¿Qué comando elimina un usuario y su directorio Home en Linux?",
    answers: [
      "sudo userdel nombre_usuario",
      "sudo userdel -f nombre_usuario",
      "sudo userdel -r nombre_usuario",
      "sudo deluser nombre_usuario"
    ],
    correct: [2]
  },
  {
    question: "¿Qué condición debe cumplirse para eliminar un grupo en Linux?",
    answers: [
      "Debe estar vacío de usuarios",
      "No debe ser grupo principal o los usuarios deben estar eliminados",
      "Debe hacerse como root, no con sudo",
      "Los usuarios del grupo deben tener sus homes eliminados"
    ],
    correct: [1]
  },
   {
      question: "¿Qué tipo de dirección IP tiene 192.168.0.1?",
      answers: [
        "Pública",
        "Privada",
        "Loopback",
        "Broadcast"
      ],
      correct: [1]
    },
    {
      question: "¿Qué comando en Linux se usa para ver las interfaces de red?",
      answers: [
        "ipconfig",
        "netstat",
        "ifconfig",
        "route"
      ],
      correct: [2]
    },
    {
      question: "¿Cuál es la función del archivo /etc/hosts?",
      answers: [
        "Configuración del nombre del equipo",
        "Asignar servidores DNS",
        "Asignar manualmente nombres a direcciones IP",
        "Controlar usuarios del sistema"
      ],
      correct: [2]
    },
    {
      question: "¿Qué comando permite añadir un usuario en Linux?",
      answers: [
        "adduser",
        "groupadd",
        "passwd",
        "deluser"
      ],
      correct: [0]
    },
    {
      question: "¿Cuál es la utilidad de `chmod`?",
      answers: [
        "Cambiar propietario de archivos",
        "Cambiar permisos de archivos",
        "Cambiar grupo de archivos",
        "Crear enlaces simbólicos"
      ],
      correct: [1]
    },
    {
      question: "¿Qué indica el permiso 'x' en un archivo en Linux?",
      answers: [
        "Permite leer el archivo",
        "Permite escribir en el archivo",
        "Permite ejecutar el archivo",
        "Permite cambiar propietario"
      ],
      correct: [2]
    },
    {
      question: "¿Qué comando se usa para cambiar el propietario de un archivo?",
      answers: [
        "chmod",
        "chown",
        "chgrp",
        "mv"
      ],
      correct: [1]
    },
    {
      question: "¿Cuál es el significado del número '7' en una notación octal de permisos?",
      answers: [
        "rwx",
        "rw-",
        "r-x",
        "r--"
      ],
      correct: [0]
    },
    {
      question: "¿Qué comando permite ver los procesos activos en Linux?",
      answers: [
        "top",
        "jobs",
        "bg",
        "ls"
      ],
      correct: [0]
    },
    {
      question: "¿Cuál es la función del archivo /etc/fstab?",
      answers: [
        "Configurar contraseñas",
        "Configurar el hostname",
        "Automatizar el montaje de sistemas de archivos",
        "Definir usuarios del sistema"
      ],
      correct: [2]
    },
    {
      question: "¿Qué comando en Linux permite ver el uso de disco por directorio?",
      answers: [
        "df",
        "du",
        "ls -lh",
        "mount"
      ],
      correct: [1]
    },
    {
      question: "¿Qué sistema de archivos es común en sistemas Linux?",
      answers: [
        "NTFS",
        "FAT32",
        "EXT4",
        "APFS"
      ],
      correct: [2]
    },
    {
      question: "¿Qué indica el comando `ps -ef`?",
      answers: [
        "Lista procesos del sistema en formato extendido",
        "Configura servicios",
        "Muestra el espacio libre",
        "Edita archivos de configuración"
      ],
      correct: [0]
    },
    {
      question: "¿Qué comando permite crear un nuevo grupo en Linux?",
      answers: [
        "adduser",
        "addgroup",
        "groupadd",
        "useradd"
      ],
      correct: [2]
    },
    {
      question: "¿Qué comando se usa para reiniciar un servicio en Linux?",
      answers: [
        "service restart nombre_servicio",
        "sudo start",
        "system reboot",
        "init 0"
      ],
      correct: [0]
    },
    {
      question: "¿Qué puerto usa HTTPS?",
      answers: [
        "443",
        "80",
        "21",
        "22"
      ],
      correct: [0]
    },
    {
      question: "¿Qué servicio se utiliza para compartir archivos entre Linux y Windows?",
      answers: [
        "FTP",
        "NFS",
        "Samba",
        "Telnet"
      ],
      correct: [2]
    },
    {
      question: "¿Cuál de los siguientes no es un sistema de archivos?",
      answers: [
        "ext4",
        "NTFS",
        "RAID",
        "XFS"
      ],
      correct: [2]
    },
    {
      question: "¿Cuál es el comando para ver los últimos registros del sistema en Linux?",
      answers: [
        "tail /var/log/syslog",
        "less /etc/passwd",
        "df -h",
        "uptime"
      ],
      correct: [0]
    },
    {
      question: "¿Cuál es el propósito de un archivo '.bashrc'?",
      answers: [
        "Iniciar servicios al arranque",
        "Configurar interfaces de red",
        "Configurar el entorno de usuario en bash",
        "Guardar logs del sistema"
      ],
      correct: [2]
    },
    {
      question: "¿Qué archivo contiene la información de configuración del arranque del sistema GRUB?",
      answers: [
        "/etc/grub.conf",
        "/boot/grub/grub.cfg",
        "/etc/init.d/grub",
        "/var/log/boot.log"
      ],
      correct: [1]
    },
    {
      question: "¿Cuál es la finalidad del comando `chmod`?",
      answers: [
        "Cambiar permisos de archivos y carpetas",
        "Mover archivos",
        "Cambiar propietario",
        "Mostrar contenido"
      ],
      correct: [0]
    },
    {
      question: "¿Cuál es el rango de puertos dinámicos o privados?",
      answers: [
        "0 al 1023",
        "1024 al 49151",
        "49152 al 65535",
        "8000 al 8080"
      ],
      correct: [2]
    },
    {
      question: "¿Qué comando permite conocer la dirección IP de una página web desde Linux?",
      answers: [
        "whois",
        "host",
        "ping",
        "nslookup"
      ],
      correct: [3]
    },
    {
      question: "¿Cuál de los siguientes comandos permite ver procesos activos y su consumo de recursos en tiempo real?",
      answers: [
        "top",
        "uptime",
        "ps",
        "ls"
      ],
      correct: [0]
    },
    {
      question: "¿Qué tipo de RAID no ofrece tolerancia a fallos?",
      answers: [
        "RAID 1",
        "RAID 5",
        "RAID 0",
        "RAID 10"
      ],
      correct: [2]
    },
    {
      question: "¿Qué es un puerto en redes?",
      answers: [
        "Una dirección física",
        "Una IP interna",
        "Una interfaz de red",
        "Un punto lógico de acceso a servicios"
      ],
      correct: [3]
    },
    {
      question: "¿Qué archivo contiene el nombre del equipo en Linux?",
      answers: [
        "/etc/network/interfaces",
        "/etc/hostname",
        "/etc/hosts",
        "/etc/resolv.conf"
      ],
      correct: [1]
    },
    {
      question: "¿Cuál es el propósito del archivo `/etc/fstab`?",
      answers: [
        "Configurar DNS",
        "Montar particiones automáticamente",
        "Crear usuarios",
        "Reiniciar servicios"
      ],
      correct: [1]
    },
    {
      question: "¿Cuál es el comando correcto para reiniciar un sistema Linux desde la terminal?",
      answers: [
        "shutdown -r now",
        "reboot -r now",
        "init reboot",
        "halt -r"
      ],
      correct: [0]
    },

    {
      question: "¿Qué hace el comando `df -h` en Linux?",
      answers: [
        "Muestra el uso del disco en formato legible",
        "Formatea discos duros",
        "Muestra archivos duplicados",
        "Desfragmenta discos"
      ],
      correct: [0]
    },
    {
      question: "¿Qué tipo de dirección IP no se enruta en internet?",
      answers: [
        "Pública",
        "Privada",
        "Estática",
        "Dinámica"
      ],
      correct: [1]
    },
    {
      question: "¿Qué protocolo se utiliza para transferir archivos de forma segura?",
      answers: [
        "FTP",
        "HTTP",
        "SFTP",
        "SMTP"
      ],
      correct: [2]
    },
    {
      question: "¿Qué indica el comando `chmod 755 archivo.sh`?",
      answers: [
        "Permisos totales para todos",
        "Solo lectura para el propietario",
        "Ejecutable para todos, escritura solo para el propietario",
        "Archivo oculto"
      ],
      correct: [2]
    },
    {
      question: "¿Qué comando se usa para cambiar la contraseña de un usuario en Linux?",
      answers: [
        "passwd",
        "chage",
        "chown",
        "sudo su"
      ],
      correct: [0]
    },
    {
      question: "¿Qué opción de `mount` se usa para montar un recurso Samba?",
      answers: [
        "nfs",
        "smbfs",
        "cifs",
        "ftp"
      ],
      correct: [2]
    },
    {
      question: "¿Qué servicio permite acceder a un equipo de forma gráfica y remota?",
      answers: [
        "SSH",
        "FTP",
        "VNC",
        "Rsync"
      ],
      correct: [2]
    },
    {
      question: "¿Cuál es el propósito de `/etc/hosts`?",
      answers: [
        "Asignar nombres a direcciones IP localmente",
        "Configurar DNS",
        "Montar discos",
        "Crear grupos"
      ],
      correct: [0]
    },
    {
      question: "¿Qué comando permite mostrar y modificar la tabla de enrutamiento en Linux?",
      answers: [
        "ifconfig",
        "netstat -r",
        "ip route",
        "route"
      ],
      correct: [2]
    },
    {
      question: "¿Qué indica un ping exitoso?",
      answers: [
        "El servidor está apagado",
        "El nombre de dominio es inválido",
        "Hay conectividad con el host destino",
        "La red está caída"
      ],
      correct: [2]
    },
    {
      question: "¿Cuál es una característica del nivel RAID 0?",
      answers: [
        "Copia la información en ambos discos para redundancia.",
        "Guarda información de paridad para tolerancia a fallos.",
        "Requiere al menos 3 discos.",
        "La información se divide en bloques y se reparte entre los discos, sin redundancia."
      ],
      correct: [3]
    },
    {
      question: "¿Qué características tiene el comando 'adduser' que lo diferencian de 'useradd'?",
      answers: [
        "Solo crea el usuario, pero no su grupo principal ni su directorio Home.",
        "Es un comando de bajo nivel que requiere especificar manualmente todos los parámetros.",
        "Es un script de alto nivel que crea el usuario, su grupo principal, añade el usuario a ese grupo y pide contraseña e información adicional.",
        "Solo se usa para modificar usuarios existentes."
      ],
      correct: [2]
    },
    {
      question: "¿Qué comando se utiliza para eliminar una cuenta de usuario en Linux, incluyendo su directorio Home y su correo si existe?",
      answers: [
        "sudo userdel nombre_usuario",
        "sudo userdel -f nombre_usuario",
        "sudo userdel -r nombre_usuario",
        "sudo deluser nombre_usuario"
      ],
      correct: [2]
    },
    {
      question: "¿Qué condición se debe cumplir para poder eliminar un grupo en Linux con sudo groupdel nombre_grupo?",
      answers: [
        "El grupo debe estar vacío de usuarios.",
        "El grupo no debe ser el grupo principal de ningún usuario, o los usuarios deben haber sido eliminados o cambiado su grupo principal.",
        "La administración debe hacerse desde la cuenta root, no con sudo.",
        "Todos los usuarios del grupo deben tener su directorio Home eliminado previamente."
      ],
      correct: [1]
    },
    {
      question: "¿Cuántos bits tiene una dirección IPv4 y cómo se agrupan?",
      answers: [
        "64 bits, agrupados en 8 octetos.",
        "32 bits, agrupados en 6 octetos.",
        "32 bits, agrupados en 4 octetos.",
        "128 bits, agrupados en 4 octetos."
      ],
      correct: [2]
    },
    {
      question: "¿Cuál es el rango total de direcciones IPv4 para la Clase C?",
      answers: [
        "0.0.0.0 a 127.255.255.255",
        "128.0.0.0 a 191.255.255.255",
        "192.0.0.0 a 223.255.255.255",
        "224.0.0.0 a 239.255.255.255"
      ],
      correct: [2]
    },
    {
      question: "¿Cómo diferencia un ordenador entre la parte de RED y la parte de HOST en una dirección IPv4?",
      answers: [
        "Usando el protocolo DHCP.",
        "Consultando un servidor DNS.",
        "Utilizando una MÁSCARA de red.",
        "Mediante la dirección MAC."
      ],
      correct: [2]
    },
    {
      question: "¿Qué operación lógica utiliza la máscara de red para determinar la dirección de red?",
      answers: [
        "Operación Lógica OR",
        "Operación Lógica XOR",
        "Operación Lógica NOT",
        "Operación Lógica AND"
      ],
      correct: [3]
    },
    {
      question: "¿Cuál es el concepto básico de las subredes?",
      answers: [
        "Dividir la parte de HOST en segmentos más grandes.",
        "Aumentar el número total de direcciones IP disponibles.",
        "La parte de RED toma prestado un número de bits de la parte de HOST.",
        "Cambiar la operación lógica utilizada por la máscara."
      ],
      correct: [2]
    },
    {
      question: "¿En qué archivo se especifica la configuración de red estática en Linux?",
      answers: [
        "/etc/resolv.conf",
        "/etc/hostname",
        "/etc/sysconfig/network-scripts/ifcfg-eth0",
        "/etc/network/interfaces"
      ],
      correct: [3]
    },
    {
      question: "¿Qué comando se usa en Linux para activar el reenvío de paquetes (ip_forward)?",
      answers: [
        "ifconfig enable ip_forward",
        "route add ip_forward on",
        "echo 1 > /proc/sys/net/ipv4/ip_forward",
        "systemctl enable ip_forwarding"
      ],
      correct: [2]
    },
    {
      question: "¿Qué comando se utiliza tanto en Linux como en Windows para comprobar si un equipo está encendido y conectado?",
      answers: [
        "ifconfig (Linux) / ipconfig (Windows)",
        "traceroute (Linux) / tracert (Windows)",
        "ping",
        "netstat"
      ],
      correct: [2]
    },
    {
      question: "¿Qué servicio en Linux se utiliza para compartir carpetas y archivos entre sistemas Linux y Windows?",
      answers: [
        "NFS",
        "Apache",
        "SSH",
        "Samba"
      ],
      correct: [3]
    },
    {
      question: "¿Qué servicio en Linux permite el acceso remoto seguro y transferencia de archivos?",
      answers: [
        "FTP",
        "Telnet",
        "SSH",
        "RDP"
      ],
      correct: [2]
    },
    {
      question: "¿Cuál es una diferencia clave entre Grupo de Trabajo y Dominio en Windows?",
      answers: [
        "Un Grupo de Trabajo no permite compartir archivos, mientras que un Dominio sí.",
        "Un Grupo de Trabajo es para redes grandes, un Dominio para redes pequeñas.",
        "En un Grupo de Trabajo la administración es centralizada; en un Dominio es local.",
        "En un Grupo de Trabajo la administración es local; en un Dominio, un servidor central gestiona usuarios y permisos."
      ],
      correct: [3]
    },
    {
      question: "¿Qué comando en Windows muestra la configuración IP del adaptador de red?",
      answers: [
        "ifconfig",
        "hostname",
        "tracert",
        "ipconfig"
      ],
      correct: [3]
    },
    {
      question: "¿Qué comando en Windows muestra la ruta que siguen los paquetes hasta un destino?",
      answers: [
        "ping",
        "netstat",
        "ipconfig",
        "tracert"
      ],
      correct: [3]
    },
    {
      question: "¿Qué es un Servicio, un Protocolo y un Puerto en redes?",
      answers: [
        "Servicio: función de red, Protocolo: reglas de comunicación, Puerto: punto lógico.",
        "Servicio: hardware, Protocolo: puerto, Puerto: interfaz de red.",
        "Servicio: dirección IP, Protocolo: software, Puerto: proceso.",
        "Servicio: servidor web, Protocolo: HTTP, Puerto: carpeta web."
      ],
      correct: [0]
    },
    {
      question: "¿Qué protocolo(s) y puerto(s) se utilizan para el servicio web?",
      answers: [
        "FTP, puerto 21",
        "SMTP, puerto 25 y POP3, puerto 110",
        "HTTP (puerto 80) y HTTPS (puerto 443)",
        "RDP, puerto 3389"
      ],
      correct: [2]
    },
    {
      question: "¿Qué protocolo y puerto se utiliza para enviar correos electrónicos desde el cliente al servidor?",
      answers: [
        "POP3, puerto 110",
        "IMAP, puerto 143",
        "HTTP, puerto 80",
        "SMTP, puerto 25"
      ],
      correct: [3]
    },
    {
      question: "Rellena los espacios en blanco: sudo adduser ada --ingroup sudo es para crear un nuevo _____ que pueda ejecutar _____",
      answers: [
        "grupo, ping",
        "usuario, sudo",  // correcta
        "sudo, usuario",
        "usuario, root"
      ],
      correct: [1]
    },
    {
      question: "¿Qué comando se usa para crear un grupo en Linux?",
      answers: [
        "groupadd",
        "addgroup",  // correcta
        "useradd",
        "mkgroup"
      ],
      correct: [1]
    },
    {
      question: "¿Qué comando se usa para añadir un usuario a un grupo en Linux?",
      answers: [
        "adduser usuario grupo",
        "sudo usuario grupo",
        "usuario grupo add",
        "sudo adduser usuario --ingroup grupo"  // correcta
      ],
      correct: [3]
    },
    {
      question: "Con la ejecución del comando: `usermod -dgm programacion /mujeres/programadoras ada`, ¿es cierto que se asocia al usuario 'ada' un grupo principal llamado programacion y se crea un nuevo directorio de inicio con el contenido del antiguo?",
      answers: [
        "Verdadero",  // correcta
        "Falso"
      ],
      correct: [0]
    },
    {
      question: "Según la salida del comando `ipconfig`, ¿cuál es la dirección IPv4 del equipo?",
      answers: [
        "255.255.255.0",
        "192.168.1.138",  // correcta
        "192.168.1.1",
        "192.168.1.255"
      ],
      correct: [1]
    },
    {
      question: "En la configuración mostrada, el usuario 'Alumno' tiene permisos de 'Lectura' en NTFS y 'Control total' en Compartir. ¿Qué permisos efectivos tendrá al acceder desde otro equipo de la red?",
      answers: [
        "Lectura",
        "Cambio",
        "Control total",
        "Sin permisos"
      ],
      correct: [0]
    },
    {
      question: "Según la regla mostrada en la imagen, ¿qué tipo de tráfico está permitido?",
      answers: [
        "Tráfico saliente a través del puerto 80",
        "Tráfico entrante al puerto 80 (HTTP)",
        "Todo el tráfico entrante bloqueado",
        "Tráfico SSH desde cualquier origen"
      ],
      correct: [1]
    },
    {
      question: "Según las reglas del cortafuegos mostradas en la imagen, ¿cuáles de los siguientes servicios están permitidos?",
      answers: [
        "Solo SSH y FTP",
        "HTTP, HTTPS, SSH y DNS",
        "Solo HTTP y HTTPS",
        "Solo servicios de correo"
      ],
      correct: [1]
    },
    {
      question: "En una configuración de iptables como la mostrada, ¿qué significa que los puertos 22, 80, 443 y 53 estén permitidos en la cadena INPUT?",
      answers: [
        "Se permite tráfico entrante solo para navegación web",
        "Se bloquea todo el tráfico entrante",
        "Se permite tráfico entrante para SSH, HTTP, HTTPS y DNS",
        "Se permite solo el tráfico saliente por esos puertos"
      ],
      correct: [2]
    },
    {
      question: "Según las interfaces mostradas (eth0, lo, wlan0), ¿qué interfaz suele representar la conexión de red local (localhost)?",
      answers: [
        "eth0",
        "lo",
        "wlan0",
        "enp0s3"
      ],
      correct: [1]
    }
];