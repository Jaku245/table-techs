const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.getConfig = (req, res, next) => {
    res.status(200).json({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
}

exports.createPaymentIntent = async (req, res, next) => {
    const { total } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "cad",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.send({
        clientSecret: paymentIntent.client_secret
    });
}
