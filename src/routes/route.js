const express = require('express')
const router = express.Router()
const { customer, getData, deleteCustmer } = require('../controllers/customerController')
const { getCardData, createCard } = require('../controllers/cardController')

router.post('/CreateCoustmer', customer)
router.get('/CoustmerList', getData)
router.delete('/CreateCoustmer/:custmerID', deleteCustmer)

router.post('/createCard', createCard)
router.post('/CardList', getCardData)

module.exports = router;