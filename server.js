require('dotenv').config();

const express = require('express');
const app = express();


// app.use(express.static("public")); // Just static stuff!
app.use(express.urlencoded({ extended: true })); // Allows use of req.body to get data from form POSTS
app.use(express.json()); // Allow receiving JSON

app.set('view engine', 'ejs');
app.set('views', 'views');


const { clusterApiUrl, Connection, PublicKey, Keypair } = require("@solana/web3.js");
const bs58 = require('bs58');

app.get('/', logger, (req, res) => {
    console.log("Just got a request!")

    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    const wallet = new PublicKey(process.env.BCC_DEV_WALLET_ADDRESS);
    const feePayer = Keypair.fromSecretKey(bs58.decode(process.env.BCC_DEV_WALLET_PRIVATE));

    // res.json({
    //     message: 'here'
    // });

    /* ====================================
    Express stuff
    ==================================== */
    // res.download("file.type"); // Send a file for download. Could be way to offer full NFT download
    // res.render('index', {
    //     text: "world"
    // }); // Render a file

    res.send('default');

});

// Position of this is important. Will not run for / requests here.
// app.use(logger);

const otherRouter = require('./routes/other');
app.use('/other', otherRouter);

// Common middleware function. All middleware functions take req, res, next.
function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

app.listen(process.env.PORT || 3000)