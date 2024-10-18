const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const cors = require("cors")

const StripeRoutes = require("./Routes/Stripe");

const app = express();
app.use(cors({
    origin: [
        'http://localhost:3000',
        'https://tabletechs.ca'
    ]
}))

const URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@table-techs.n9nc6.mongodb.net/?retryWrites=true&w=majority&appName=Table-Techs`;
const client = new MongoClient(URI)

client.connect()
    .then(() => {
        console.log("Connection Successfull!!");
    })
    .catch(() => {
        console.log("Connection Failed!!");
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/stripe", StripeRoutes);

module.exports = app;