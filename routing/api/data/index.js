const express = require("express")
const router = express.Router()
const stockPrice = require("../../../controllers/stockPrice_controllers")

router.get("https://api.iextrading.com/1.0/tops?symbols=sndx", stockPrice.index)
    

module.exports = router