
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('ваша_строка_подключения_к_MongoDB', { useNewUrlParser: true, useUnifiedTopology: true });

const tradeRoutes = require('./routes/tradeRoutes');
app.use('/api/trades', tradeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});

