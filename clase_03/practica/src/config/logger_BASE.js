import winston from 'winston'

// :::::levels
//   error: 0,
//   warn: 1, <--- file
//   info: 2,
//   http: 3, <--- Console
//   verbose: 4,
//   debug: 5,
//   silly: 6


// configuracion del logger
export const logger = winston.createLogger({
    // declaramos el transport
    transports: [
        // una instanicia para el transport de console
        new winston.transports.Console({ level: "http" }),

        // una instanicia para el transport de file
        new winston.transports.File({ filename: './errors.log', level: "warn" }),
    ]
})


// podemos declarar un middleware
export const midLogger = (req, res, next) => {
    logger.http(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)
    next()
}