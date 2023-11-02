const express = require('express')
const { sendEmailController } = require('../controller/controller')

//router object

const router = express.Router()

router.post("/sendEmail", sendEmailController)