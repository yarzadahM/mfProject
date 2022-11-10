require('dotenv').config()

const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});
module.exports = {
    PORT: process.env.PORT,
    URL: process.env.URL,
    JWT_SECRET:process.env.JWT_SECRET

    
}