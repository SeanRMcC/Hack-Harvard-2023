const express = require("express");
const bodyParser = require("body-parser");
const { default: Terra } = require("terra-api");
const admin = require("firebase-admin");
const credentials = require("./key.json");

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

const db = admin.firestore();

const KEY = "3sgPKkTHRUs8RxvNMBFZSqfVRbELlGvi";
const ID = "teanterra20-testing-Wc2O2RllNc";

const terra = new Terra(KEY, ID, "");

const app = express();
var options = {
    inflate: true,
    limit: "4000kb",
    type: "application/json"
}

app.use(bodyParser.raw(options));

app.post("/terraWebhook", (req, res) => {
    res.sendStatus(200);
    const data = JSON.parse(req.body);
    console.log(data);
    if(data.type === "activity"){
        const entry = {
            user_id: data.user.user_id,
            provider: data.user.provider,
            resting_hr: data.data[0].heart_rate_data.summary.resting_hr_bpm
        }
        db.collection("users").doc().set(entry);
    }
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})