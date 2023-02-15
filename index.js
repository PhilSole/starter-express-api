const { clusterApiUrl, Connection } = require("@solana/web3.js");

const express = require('express')
const app = express()

app.all('/', (req, res) => {
    console.log("Just got a request!")

    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    const wallet = new solanaWeb3.PublicKey(process.env.BCC_DEV_WALLET_ADDRESS);

    console.log(wallet);

    res.send('Yoza!')
})

app.listen(process.env.PORT || 3000)