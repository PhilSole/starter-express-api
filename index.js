const { clusterApiUrl, Connection } = require("@solana/web3.js");

const express = require('express')
const app = express()

app.all('/', (req, res) => {
    console.log("Just got a request!")

    const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");

    console.log(connection);

    res.send('Yoza!')
})

app.listen(process.env.PORT || 3000)