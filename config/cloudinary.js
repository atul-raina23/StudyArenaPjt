const cloudinary = require('cloudinary').v2

exports.cloudnairyconnect= ()=>{
    try {
        cloudinary.config({
            cloud_name : processa.env.CLOUD_NAME,
            api_key : processa.env.API_KEY,
            api_secret : processa.env.API_SECRET
        })
        console.log("CD connected");

        
    } catch (error) {
        console.log("error connecting CD"+error)
    }
}