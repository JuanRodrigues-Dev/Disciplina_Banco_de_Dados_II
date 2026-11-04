import {createClient} from 'redis'
import {dotenv} from 'dotenv'
dotenv.config()

const client = createClient({
    url:process.env.REGIS_URL

}).on("error",(err)=>{
    console.log('Falha na conexão com o Regis')
}).then(()=>{
    console.log('Conectado com o redis')
})

export default client