import {createClient} from 'redis'
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.REDIS_URL)
const client = createClient({
    url: process.env.REDIS_URL

}).on("error",(err)=>{
    console.log('Falha na conexão com o Regis', err)
}).connect().then(()=>{
    console.log('Conectado com o redis')
})

export default client