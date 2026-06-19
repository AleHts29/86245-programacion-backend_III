import { Router } from 'express';
import calculator from 'calculadora-npm-clase-03'




const router = Router();


router.get("/ping", (req, res) => {
    res.send("pong")
})

router.post('/sumar', (req, res) => {
    const { a, b } = req.body;
    const result = calculator.sumar(a, b);
    res.send({ status: "success", result: result })
});

router.post('/restar', (req, res) => {
    const { a, b } = req.body;
    const result = calculator.restar(a, b);
    res.send({ status: "success", result: result })
});

router.post('/multiplicar', (req, res) => {
    const { a, b } = req.body;
    const result = calculator.multiplicar(a, b);
    res.send({ status: "success", result: result })
});


router.post('/dividir', (req, res) => {
    try {
        const { a, b } = req.body;
        const result = calculator.dividir(a, b);
        res.send({ status: "success", result: result })
    } catch (error) {
        console.log(`error: ${error.message}`);
        // logger.error(`error: ${error.message}`)
        res.status(400).send({ error: error.message })
    }

});


export default router;