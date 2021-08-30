import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { firstName, lastName, email, docNumber } = req.body;
    await axios.post('https://api.mercadopago.com/v1/payments', {
         "additional_info": {
             "items": [
                 {
                     "id": "PR0001",
                     "title": "Point Mini",
                     "description": "Producto Point para cobros con tarjetas mediante bluetooth",
                     "picture_url": "https://http2.mlstatic.com/resources/frontend/statics/growth-sellers-landings/device-mlb-point-i_medium@2x.png",
                     "category_id": "electronics",
                     "quantity": 1,
                     "unit_price": 58.8
                 }
             ],
             "payer": {
                 "first_name": "Test",
                 "last_name": "Test",
                 "phone": {
                     "area_code": 11,
                     "number": "987654321"
                 },
                 "address": {}
             },
         },
         "description": "Payment for product",
         "external_reference": "MP0001",
         "installments": 1,
         "metadata": {},
         "order": {
             "id": 2,
             "type": "mercadopago"
         },
         "payer": {
             "entity_type": "individual",
             "type": "customer",
             "identification": {}
         },
         "payment_method_id": "visa",
         "transaction_amount": 58.8
     }, {
         "headers": {
             "Authorization": `Bearer TEST-4134851386812454-080316-76d5198b068fc2f54152e27f3fc3753f-113757874`,
         }
     });




    res.status(200).json({ success: true });
}