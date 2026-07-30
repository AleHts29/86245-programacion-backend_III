import {NestMiddleware} from "@nestjs/common"
import { log } from "console"
import {Request, Response, NextFunction} from "express"



export default class FirstMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        // AQUI va toda la logica que defina a la interface
       console.log(`${req.method} en ${req.url} recivida.`);
       next()
    }
}

