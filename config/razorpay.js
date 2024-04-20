const Razorpay = require("razorpay");


exports.instance = new Razorpay({
    key_id: processa.env.RAZORPAY_KEY,
    key_secret: processa.env.RAZORPAY_SECRET,
});