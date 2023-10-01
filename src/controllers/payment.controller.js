import mercadopago from "mercadopago";
import {HOST, MERCADOPAGO_API_KEY} from "../config.js";

console.log("Parametros globales");
console.log(MERCADOPAGO_API_KEY);

export const createOrder = async (req, res) => {

    mercadopago.configure({
        access_token: "TEST-485681177876641-093013-e114d79ed51079bbaf3c651df440c90c-1495901418",
    });

    const result = await mercadopago.preferences.create({
        items:[
            {
                title: "Portatil HP",
                unit_price: 2400,
                currency_id: "COP",
                quantity: 1,
            }
        ],
        back_urls: {
            success: "http://localhost/success",
            failure: "http://localhost/failure",
            pending: "http://localhost/pending",
        },
        notification_url: "https://5e2c-201-245-254-75.ngrok.io/webhook",
    });
    
    res.send(result.body)

};

export const receiveWebhook = async (req, res) => {
    console.log(req.query);

    const payment = req.query;

    try{
        if(payment.type === "payment"){
            const data = await mercadopago.payment.findById(req.query[data.id]);
            console.log(data);
        }
        res.sendStatus(204);
    }
    catch(error){
        console.log(error);
        return res.sendStatus(500).json({error: error.message});
    }

};

