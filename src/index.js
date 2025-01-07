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

app.listen(3000);
console.log("Server on port", 3000);