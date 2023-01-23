const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51MSNJESJEJH6BVnSHDrqTGjmg7DElQdW96fLamJpooH6L58pmMmMfXg7zDf1zYnSgTEx8Q58udZo01aZ5nnhjbnQ00DMFsOXTD')

// API

// - App config :
const app = express();


// - Middlewares
app.use(cors({
    origin: true
}))

// This will allow us to send data and parse it in json format 
app.use(express.json());

// -API routes 
app.get('/', (request, response) => response.status(200).send('Hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment request received BOOM!! for this amount>>', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,//Sub units of the currency
        currency: "INR",
        metadata: { integration_check: "accept_a_payment" },

    });

    // 201-for ok and it created something 
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,

    })
})

// -Listen command 
exports.api = functions.https.onRequest(app)

// Example endpoint 
// http://127.0.0.1:5001/challenge-5c88f/us-central1/api