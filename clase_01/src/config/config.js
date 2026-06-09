import dotenv from 'dotenv';
import {Command} from 'commander'; 



const program = new Command();

program
    .option('-p, --port <number>', 'Puerto de conexión', 3000)
    .option('--mode <mode>', 'Modo de trabajo', 'development');
program.parse();


console.log("Modo Options:", program.opts().mode);
console.log("Puerto:", program.opts().port);





const enviroment = program.opts().mode;

dotenv.config(
    {
        path: enviroment === 'production' ? './src/config/.env.production' : './src/config/.env.development'
    }
);

console.log(process.env.PORT);



export default {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL,
    adminName: process.env.ADMIN_NAME,
    adminPassword: process.env.ADMIN_PASSWORD
};