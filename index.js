const { clusterApiUrl, Connection, PublicKey } = require("@solana/web3.js");

const express = require('express')
const app = express()

app.all('/', (req, res) => {
    console.log("Just got a request!")

    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    // const wallet = new PublicKey(process.env.BCC_DEV_WALLET_ADDRESS);

    console.log(process.env.BCC_DEV_WALLET_ADDRESS);

    res.send('Yoza!')
})

app.listen(process.env.PORT || 3000)