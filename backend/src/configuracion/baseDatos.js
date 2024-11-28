const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const conectarBD = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Conexión exitosa a MongoDB')
    } catch (error) {
        console.error('Error en la conexión a MongoDB: ', error)
        process.exit(1)
    }
}

module.exports = conectarBD
