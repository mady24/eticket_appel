const express = require('express');
const https = require("https");
const fs = require("fs");
const app = express();
app.use(require('body-parser').json());
app.use(require('express-static')('./'));
https.createServer(
    {
        key: fs.readFileSync("key.pem"),
        cert: fs.readFileSync("cert.pem"),
    },
    app
    )
    .listen(3000, () => {console.log("Server is running on port 3000")});