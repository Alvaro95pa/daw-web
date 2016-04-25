import {Prod,infodetalle,infotecnica,requisitosinfor,comentario,usuario} from './clases';

var demoinfotecnica:infotecnica= {"fecha":"12-04-2016", "genero": "RPG", "plataforma":"PC","desarrollador":"FromSoftware Inc ","editor":"BANDAI NAMCO Entertainment	"}
var demorequisitos:requisitosinfor={"procesador":"Intel Core i5 2500 3.1 GHz / AMD® A8 3870 3,6 Ghz","memoria":"4 GB","graficos":"NVIDIA® GeForce GTX 465 / ATI Radeon TM HD 6870","almacenamiento":"50 GB"}


export var prod_list: Prod[] = [
  { "id": 1, "tipoprod": 1,"name": "Dark Souls 3","img":"img/dark-souls-iii.jpg", "genero": "RPG", "plataforma":"PC" },
  { "id": 2, "tipoprod": 1,"name": "X-COM 2","img":"img/xcom.jpg", "genero": "Estrategia", "plataforma":"PC" },
  { "id": 3, "tipoprod": 1,"name": "OutDrive","img":"img/outdrive.jpg", "genero": "RPG", "plataforma":"PS4" },
  { "id": 4, "tipoprod": 1,"name": "SUPERHOT","img":"img/superhot.jpg", "genero": "Accion", "plataforma":"PC" },
  { "id": 5, "tipoprod": 1,"name": "Layers of Fear","img":"img/resident.jpg", "genero": "Horror", "plataforma":"PC" },
  { "id": 6, "tipoprod": 1,"name": "CS:GO","img":"img/layersoffear.jpg", "genero": "Accion", "plataforma":"PC" },
  { "id": 7, "tipoprod": 1,"name": "Star Citizen","img":"img/dark-souls-iii.jpg", "genero": "Espacio", "plataforma":"PC" },
  { "id": 8, "tipoprod": 1,"name": "Soma","img":"img/dark-souls-iii.jpg", "genero": "Horror", "plataforma":"PS4" },
  { "id": 9, "tipoprod": 1,"name": "Batman AK","img":"img/dark-souls-iii.jpg", "genero": "Aventura", "plataforma":"PS4" },
  { "id": 10, "tipoprod": 1 ,"name": "Firewatch","img":"img/dark-souls-iii.jpg", "genero": "Aventura", "plataforma":"PC" },
  { "id": 11, "tipoprod": 2,"name": "Los 100","img":"img/100.jpg", "genero": "Aventura", "plataforma":"PC" },
  { "id": 12, "tipoprod": 2,"name": "Magicians","img":"img/magicians.jpg", "genero": "Aventura", "plataforma":"PC" },
  { "id": 13, "tipoprod": 2,"name": "Modern Family","img":"img/modernfamily.jpg", "genero": "Comedia", "plataforma":"PC" },
  { "id": 10, "tipoprod": 3 ,"name": "Renacido","img":"img/renacido.jpg", "genero": "Aventura", "plataforma":"PC" },
  { "id": 11, "tipoprod": 3,"name": "Deadpool","img":"img/deadpool.jpg", "genero": "Aventura", "plataforma":"PC" },
  { "id": 12, "tipoprod": 3,"name": "Creed","img":"img/creed.jpg", "genero": "Aventura", "plataforma":"PC" },
  { "id": 13, "tipoprod": 3,"name": "Star Wars","img":"img/SW.jpg", "genero": "Aventura", "plataforma":"PC" },
  { "id": 14, "tipoprod": 1,"name": "Quantum Break","img":"img/qb_cont.jpg", "genero": "Accion", "plataforma":"PS4" },
  { "id": 15, "tipoprod": 1,"name": "Uncharted 4","img":"img/u_cont.jpg", "genero": "Accion", "plataforma":"PS4" },
  { "id": 16, "tipoprod": 1,"name": "Battlefront","img":"img/btl_cont.jpg", "genero": "FPS", "plataforma":"PC" },
  { "id": 17, "tipoprod": 1,"name": "Fifa 16","img":"img/f_cont.jpg", "genero": "FPS", "plataforma":"XBOX" },
  { "id": 18, "tipoprod": 2,"name": "Daredevil","img":"img/dd_cont.jpg", "genero": "Accion", "plataforma":"TV" },
  { "id": 19, "tipoprod": 3,"name": "Batman vs Superman","img":"img/bs_cont.jpg", "genero": "Accion", "plataforma":"Cines" }
  { "id": 20, "tipoprod": 3,"name": "Star Wars","img":"img/SW.jpg", "genero": "Aventura", "plataforma":"PC" }

];

export var usuarios_list:usuario[] = [
  {"id":1,"nombre":"Usuario 1","apellidos":"Apellido 1","img":"img/personaB.png","nacionalidad":"España","cumpleanos":"12-12-1995","usuario":"user1","contraseña":"1234","correo":"prueba@gmail.com"},
  {"id":2,"nombre":"Usuario 2","apellidos":"Apellido 2","img":"img/personaB.png","nacionalidad":"España","cumpleanos":"12-12-1995","usuario":"user2","contraseña":"1234","correo":"prueba@gmail.com"},
  {"id":3,"nombre":"Usuario 2","apellidos":"Apellido 2","img":"img/personaB.png","nacionalidad":"España","cumpleanos":"12-12-1995","usuario":"user3","contraseña":"1234","correo":"prueba@gmail.com"},
  {"id":4,"nombre":"Usuario 3","apellidos":"Apellido 3","img":"img/personaB.png","nacionalidad":"España","cumpleanos":"12-12-1995","usuario":"user4","contraseña":"1234","correo":"prueba@gmail.com"}
];

export var comentarios_list:comentario[] = [
<<<<<<< HEAD
  {"idcomentario":1,"idjuego":1,"idcontenido":0,"user":"velocidadEscarlata","user_img":"img/img/avatar2.jpg","fecha":"Jueves 3 de Marzo, 03:35","puntuacion":8.3,"mensaje":"Gran pelicula. Mucho humor, mucha acción y muy fiel a los comics (no he leido mucho los de Deadpool, pero desde luego lo que he leido queda reflejado en la pantalla.) Muy bien llevado la parte de romper la 4 pared. Pelicula que se disfruta a cada escena, con muy buenas coreografias para los combates y muy buenos efectos visuales y de camara."},
  {"idcomentario":2,"idjuego":1,"idcontenido":0,"user":"castorTresDientes","user_img":"img/avatar1.jpg","fecha":"Miercoles 2 de Marzo, 04:35","puntuacion":9,"mensaje":"Gran pelicula. Mucho humor, mucha acción y muy fiel a los comics (no he leido mucho los de Deadpool, pero desde luego lo que he leido queda reflejado en la pantalla.) Muy bien llevado la parte de romper la 4 pared. Pelicula que se disfruta a cada escena, con muy buenas coreografias para los combates y muy buenos efectos visuales y de camara."},
  {"idcomentario":4,"idjuego":2,"idcontenido":0,"user":"castorTresDientes","user_img":"img/avatar1.png","fecha":"Miercoles 2 de Marzo, 03:35","puntuacion":8.3,"mensaje":"Gran pelicula. Mucho humor, mucha acción y muy fiel a los comics (no he leido mucho los de Deadpool, pero desde luego lo que he leido queda reflejado en la pantalla.) Muy bien llevado la parte de romper la 4 pared. Pelicula que se disfruta a cada escena, con muy buenas coreografias para los combates y muy buenos efectos visuales y de camara."}
=======
  {"idcomentario":1,"idjuego":1,"user":"Usuario 1","user_img":"img/personaB.png","fecha":"Jueves 3 de Marzo, 03:35","puntuacion":8.3,"mensaje":"Gran pelicula. Mucho humor, mucha acción y muy fiel a los comics (no he leido mucho los de Deadpool, pero desde luego lo que he leido queda reflejado en la pantalla.) Muy bien llevado la parte de romper la 4 pared. Pelicula que se disfruta a cada escena, con muy buenas coreografias para los combates y muy buenos efectos visuales y de camara."},
  {"idcomentario":2,"idjuego":1,"user":"Usuario 2","user_img":"img/personaB.png","fecha":"Miercoles 2 de Marzo, 04:35","puntuacion":9,"mensaje":"Gran pelicula. Mucho humor, mucha acción y muy fiel a los comics (no he leido mucho los de Deadpool, pero desde luego lo que he leido queda reflejado en la pantalla.) Muy bien llevado la parte de romper la 4 pared. Pelicula que se disfruta a cada escena, con muy buenas coreografias para los combates y muy buenos efectos visuales y de camara."},
  {"idcomentario":3,"idjuego":1,"user":"Usuario 3","user_img":"img/personaB.png","fecha":"Viernes 25 de Febrero, 12:34","puntuacion":7.5,"mensaje":"Gran pelicula. Mucho humor, mucha acción y muy fiel a los comics (no he leido mucho los de Deadpool, pero desde luego lo que he leido queda reflejado en la pantalla.) Muy bien llevado la parte de romper la 4 pared. Pelicula que se disfruta a cada escena, con muy buenas coreografias para los combates y muy buenos efectos visuales y de camara."},
  {"idcomentario":4,"idjuego":2,"user":"Usuario 4","user_img":"img/personaB.png","fecha":"Miercoles 2 de Marzo, 03:35","puntuacion":8.3,"mensaje":"Gran pelicula. Mucho humor, mucha acción y muy fiel a los comics (no he leido mucho los de Deadpool, pero desde luego lo que he leido queda reflejado en la pantalla.) Muy bien llevado la parte de romper la 4 pared. Pelicula que se disfruta a cada escena, con muy buenas coreografias para los combates y muy buenos efectos visuales y de camara."}
>>>>>>> catalogo-A2

]


export var infolista:infodetalle[] = [
  { "id": 1, "tipoprod": 1,"name": "Dark Souls 3","img":"img/dark-souls-iii-2015615194341_1.jpg","trailer":"https://www.youtube.com/embed/QjY99zF3_to","infotecnic":demoinfotecnica,"inforequisitos":demorequisitos,"sinopsis":"El juego tiene lugar en los últimos días de la edad del fuego, la cual, como es relatado al principio de la historia, comenzó tras la derrota de los dragones que anteriormente reinaban el mundo. Éste, durante esta época era un lugar oscuro y lúgubre habitado solamente por una raza inmortal de gigantes dragones cuya capacidad de prolongar su vida eternamente provenía de sus escamas" },
  { "id": 2, "tipoprod": 1,"name": "X-COM 2","img":"img/xcom.jpg","trailer":"https://www.youtube.com/embed/QjY99zF3_to","infotecnic":demoinfotecnica,"inforequisitos":demorequisitos,"sinopsis":"El juego tiene lugar en los últimos días de la edad del fuego, la cual, como es relatado al principio de la historia, comenzó tras la derrota de los dragones que anteriormente reinaban el mundo. Éste, durante esta época era un lugar oscuro y lúgubre habitado solamente por una raza inmortal de gigantes dragones cuya capacidad de prolongar su vida eternamente provenía de sus escamas" },
  { "id": 11, "tipoprod": 2,"name": "Los 100","img":"img/xcom.jpg","trailer":"https://www.youtube.com/embed/QjY99zF3_to","infotecnic":demoinfotecnica,"inforequisitos":demorequisitos,"sinopsis":"El juego tiene lugar en los últimos días de la edad del fuego, la cual, como es relatado al principio de la historia, comenzó tras la derrota de los dragones que anteriormente reinaban el mundo. Éste, durante esta época era un lugar oscuro y lúgubre habitado solamente por una raza inmortal de gigantes dragones cuya capacidad de prolongar su vida eternamente provenía de sus escamas" }

]
