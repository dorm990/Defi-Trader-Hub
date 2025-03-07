
import React, { useState } from 'react';
import Web3 from 'web3';
import { ethereum } from 'web3';

const TradeForm = () => {
    const [amount, setAmount] = useState(0);
    const [token, setToken] = useState('');

    const handleTrade = async () => {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
        const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

        const accounts = await web3.eth.getAccounts();
        await contract.methods.trade(token, amount).send({ from: accounts[0] });
        alert('Торговля успешно выполнена');
    };

    return (
        <div>
            <input type="text" placeholder="Введите токен" onChange={(e) => setToken(e.target.value)} />
            <input type="number" place
            holder="Введите сумму" onChange={(e) => setAmount(e.target.value)} />
            <button onClick={handleTrade}>Торговля</button>
        </div>
    );
};

export default TradeForm;


