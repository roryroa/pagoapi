import {Router} from "express";         //Importamos la libreria express como Router
import { createOrder, receiveWebhook } from "../controllers/payment.controller.js";

const router = Router();                //Definimos una instancia

                                        //Con este objeto, podemos crear diferentes rutas o peticiones HTTP, como get/put/delete/

router.post('/create-order', createOrder);        //Ruta para Crear Orden de Compra
router.get('/success', (req, res) => res.send('success'));                              //Ruta que maneja el evento, cuando el usuario acepta el pago    
router.post('/webhook', receiveWebhook);                              //Ruta que controla el estado o evento, de que el pago esta confirmado
router.get('/failure', (req, res) => res.send('failure'));
router.get('/pending', (req, res) => res.send('pending'));

export default router;                  //La exportamos parq que sea accesible desde otros modulos de la aplicacion


