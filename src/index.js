// Modulo para crear un WebServer, sus rutas
// La libreria Morgan, permite monitorear por la terminal, todas las peticiones HTTP (GET, PUT, DELETE, ETC) que ocurran en la aplicacion

import express from "express";
import paymentRoutes from "./routes/payment.routes.js";
import morgan from "morgan";
import {PORT} from "./config.js";
import path from "path";

console.log("Parametro global PORT");
console.log(PORT);

// Se instancia el objeto del WebServer

const app = express();

// Se le dice a la instancia que use morgan, rutas, el directorio raiz donde esta index.html y la ruta de los estilos bootstrap

app.use(morgan('dev'));
app.use(paymentRoutes);
app.use(express.static(path.resolve('src/public')));
app.use('/css', express.static(path.resolve('node_modules/bootstrap/dist/css')));

// Se ejecuta la instancia para que inicie en un puerto determinado

app.listen(PORT);
console.log("Servidor Ejecutandose en el puerto ", PORT);
