import { acyncHandler } from "../utils/acyncHandler.js"

const registeruser = acyncHandler(async (req, res) => {
    res.status(200).json({ msg: "register user created" })
})

export { registeruser }