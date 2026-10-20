import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado no MongoDB'))
    .catch(err => console.log(err));

const UsuarioSchema = mongoose.Schema({
    nome:String,
    email:{
        type:String,
        required:true,
        unique:true
    }
});
const Usuario = mongoose.model('Usuario', UsuarioSchema);

const jose = await Usuario.findOne({email:"jose@gmail.com"})
jose.nome = "José da Silva";
jose.save()
    .then(()=>{
        console.log('Atualizando com Sucesso')
    })
    .catch(err=> {
        console.log(err)
    })

/*
Usuario.insertOne({nome:"José", 
    email:"jose@gmail.com"})
    .then(()=> console.log('Salvo com sucesso'))
    .catch(err => console.log(err));
*/