import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose';


const uri = process.env.MONGO_URI;

mongoose.connect(uri)
    .then(() => {
        console.log('Conectado ao MongoDB com sucessosss!');
    })
    .catch((err) => {
        console.error('Erro ao conectar ao MongoDB:sss', err.message);
    });
