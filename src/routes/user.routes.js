import { Router } from "express"

import { registeruser } from "../controllers/user.controller.js"

const router = Router()

router.route("/register").post(registeruser)

export default router
 
// localhost:8000/api/users/register 