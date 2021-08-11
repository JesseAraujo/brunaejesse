import axios from 'axios';

const paymentMethodsIds = ["pix", "elo", "visa", "master", "bolbradesco"];

export default async function handler(req, res) {
    const { data } = await axios.get('https://api.mercadopago.com/v1/payment_methods', {
        headers: {
            "Authorization": `Bearer TEST-4134851386812454-080316-76d5198b068fc2f54152e27f3fc3753f-113757874`,
        }
    });

    const paymentMethods = data.filter(payment => paymentMethodsIds.includes(payment.id));
    res.status(200).json(paymentMethods);
}