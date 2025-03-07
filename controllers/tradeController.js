
const Trade = require('../models/Trade');

exports.createTrade = async (req, res) => {
    const { userId, token, amount } = req.body;
    const newTrade = new Trade({ userId, token, amount });
    await newTrade.save();
    res.json(newTrade);
};

