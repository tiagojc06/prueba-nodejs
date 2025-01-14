import express from "express";

//* express() es una función que crea una aplicación Express, que es un objeto que representa una aplicación web o servidor HTTP que contiene métodos y propiedades para manejar solicitudes HTTP y configurar el servidor. Retorna dicho objeto.
const app = express();

//*  get() es un método del objeto app (instancia de Express) define una ruta para manejar solicitudes HTTP GET. 
//* Recibe como parámetros una URL o ruta y un callback que se ejecuta cuando se recibe una solicitud en esa ruta. 
//* El callback maneja la solicitud (req) y envía una respuesta (res) al cliente.
//* Este método evita que usemos condicionales para manejar las rutas y sus respuestas.
app.get("/", (req, res) => {
  //* El método send() es un método del objeto res (respuesta de Express). 
  //* Permite enviar una respuesta HTTP al cliente con texto, HTML, JSON u otros datos. 
  //* También establece automáticamente el tipo de contenido y el estado 200 por defecto, aunque este puede ser modificado.
  res.send("<h1>Bienvenido</h1>");
})

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
})


//* process es un objeto global en Node.js que proporciona información sobre el proceso actual en ejecución.
//* process.env es una propiedad del objeto process que contiene las variables de entorno del sistema. Estas variables son pares clave-valor que configuran la ejecución de la aplicación, como credenciales, URLs o puertos.
//* process.env.PORT es una variable de entorno específica que se utiliza para indicar el puerto en el que el servidor debe escuchar. En servicios de la nube como Heroku o Render, esta variable es asignada automáticamente.
//* Si process.env.PORT no está definida (por ejemplo, al ejecutar localmente), se usa el puerto 3000 como valor predeterminado.
app.listen(process.env.PORT || 3000);
console.log("Server on port", process.env.PORT || 3000);