require('dotenv').config();

const express = require('express')
const app = express()

const { clusterApiUrl, Connection, PublicKey, Keypair } = require("@solana/web3.js");
const bs58 = require('bs58');

app.all('/', (req, res) => {
    console.log("Just got a request!")

    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    const wallet = new PublicKey(process.env.BCC_DEV_WALLET_ADDRESS);
    const feePayer = Keypair.fromSecretKey(bs58.decode(process.env.BCC_DEV_WALLET_PRIVATE));

    res.send('Yoza!')
})

app.listen(process.env.PORT || 3000)