import { Router } from "express";
import { userRegister, userLogin, testMiddle } from "../controllers/userController.js";
import verifyToken from "../helpers/verify-token.js"
const route = Router()

route.post('/users/register', userRegister)
route.post('/users/login', userLogin)
route.get('/testmiddle', verifyToken, testMiddle)
export default route