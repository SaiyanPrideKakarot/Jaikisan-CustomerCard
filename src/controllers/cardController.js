const cardModel = require('../models/cardModel')

const createCard = async function (req, res) {
    try {
        let data = req.body
        let saveData = await cardModel.create(data)
        return res.status(201).send({ status: true, data: saveData })
    } catch (error) {
        return res.status(500).send({ status: false, error: error })
    }
}

const getCardData = async function (req, res) {
    try {
        let data = await cardModel.find()
        return res.status(201).send({ status: true, data: data })
    } catch (error) {
        return res.status(500).send({ status: false, error: error })
    }
}

module.exports = { createCard, getCardData }