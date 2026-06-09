import { Router } from 'express';
import { generateUser } from '../utils.js';


const router = Router();

router.get("/", (req, res) => {
    try {

        let users = [];
        for (let i = 0; i <= 10; i++) {
            users.push(generateUser());
        }
        res.send({ status: "success", payload: users });
    } catch (error) {
        console.log("Error en GET /api/users: " + error);
    }
});

export default router;

