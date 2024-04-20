const nodemailer = require("nodemailer");
require('dotenv').config()


const mailSender = async (email, title, body) => {
    try{
            let transporter = nodemailer.createTransport({
                host:processa.env.MAIL_HOST,
                port: 587,
                auth:{
                    user: processa.env.MAIL_USER,
                    pass: processa.env.MAIL_PASS,
                }
            })


            let info = await transporter.sendMail({
                from: `"Study Notion" <${processa.env.MAIL_USER}>`,
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })
            console.log(info);
            return info;
    }
    catch(error) {
        console.log(error.message);
        return error;
    }
}


module.exports = mailSender;