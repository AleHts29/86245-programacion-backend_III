import winston from 'winston'

// :::::levels
//   error: 0,
//   warn: 1, <--- file
//   info: 2,
//   http: 3, <--- Console
//   verbose: 4,
//   debug: 5,
//   silly: 6


const customLevelsOptions = {
    levels: {
        fatal: 0,
        error: 1,
        debug: 2,
        warning: 3,
        http: 4,
        info: 5

    },
    colors: {
        fatal: 'red',
        error: 'red',
        warning: 'yellow',
        info: 'blue',
        debug: 'magenta'
    }
}
// *orange no existe, estos son los disponibles: Font foreground colors: `black`, `red`, `green`, `yellow`, `blue`, `magenta`,`cyan`, `white`, `gray`, `grey`.
winston.addColors(customLevelsOptions.colors)


// formato reutilizable que arma la línea con fecha
const lineFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`
})

// configuracion del logger
export const logger = winston.createLogger({
    // declaramos los niveles custom
    levels: customLevelsOptions.levels,

    transports: [
        // una instancia para el transport de console
        new winston.transports.Console({
            level: "info",
            format: winston.format.combine(
                winston.format.colorize({ colors: customLevelsOptions.colors }),
                winston.format.timestamp({ format: 'DD/MM/YYYY HH:mm:ss' }),
                lineFormat
            ),
        }),
        // una instancia para el transport de file
        new winston.transports.File({
            filename: "./errors_02.log",
            level: "error",
            format: winston.format.combine(
                winston.format.timestamp({ format: 'DD/MM/YYYY HH:mm:ss' }),
                lineFormat
            )
        }),
    ]
})


// podemos declarar un middleware
export const midLogger = (req, res, next) => {
    logger.http(`${req.method} en ${req.url}`)
    next()
}