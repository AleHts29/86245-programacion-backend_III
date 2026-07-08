import { Router } from "express";
import Users from "../dao/Mongo/Users.js";


const router = Router();
const userService = new Users();

const authenticationMiddleware = (req, res, next) => {
    const jwtCookie = req.cookies['CoderCookie'];
    if (jwtCookie) next()
    else return res.status(401).send('Not authenticated');
}

router.get('/', (req, res) => {
    res.render('register');
})

router.get('/login', (req, res) => {
    res.render('login');
})

// No se valida el que el JWT sea correcto
router.get('/profile/:uid', authenticationMiddleware, async (req, res) => {
    const { uid } = req.params;
    const user = await userService.getUserById(uid);
    res.render('profile', { user })
})
export default router;


// A01	Broken Access Control - A07 sesión mal manejada