
const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = 'Слон Позвонил В Чай, Дал Нежный Урок!'; // исправьте здесь



module.exports = {
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID'), // замените на ваш Infura Project ID
      network_id: 4,
      gas: 5500000,
    },
  },
};

