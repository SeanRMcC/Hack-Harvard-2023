const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/webhook", (req, res) => {
    console.log("Hit endpoint")
    axios.get("https://webhook.site/token/743b07a2-a33f-45d7-aec1-df5d9f285372/requests", {
        mode: "cors",
        headers: {
            "content-type": "application/json"
        }
    })
        .then(data => data.data)
        .then(output => res.json(output))
});

app.listen(8000, () => {
    console.log("Listening on port 8000...");
});