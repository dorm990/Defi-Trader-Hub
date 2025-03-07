
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DeFiTrader {
    event TradeExecuted(address indexed user, string token, uint256 amount);

    function trade(string memory token, uint256 amount) external {
        // Логика торговли
        emit TradeExecuted(msg.sender, token, amount);
    }
}

