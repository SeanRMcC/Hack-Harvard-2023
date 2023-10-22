const express = require("express");
const bodyParser = require("body-parser");
const { default: Terra } = require("terra-api");
const admin = require("firebase-admin");
const credentials = require("./key.json");
const firestore = require("firebase-admin/firestore");

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

app.post("/terraWebhook", async (req, res) => {
    res.sendStatus(200);
    const data = JSON.parse(req.body);
    if(data.type === "activity"){
        const new_heart_rate = data.data[0].heart_rate_data.summary.resting_hr_bpm;
        const document = await db.collection("users").where("ids", "array-contains", data.user.user_id);
        //const document = query(db.collection("users"), where("ids", "array-contains", data.user.user_id));
        const querySnapshot = await document.get();
        let foundDocument;
        querySnapshot.forEach(documentSnapshot => {
            foundDocument = documentSnapshot.ref;
        });

        if(foundDocument){
            const refData = await foundDocument.get().then(doc => doc.data());
            const prev_heart_rate = refData.last_resting_hr;

            const heart_difference = prev_heart_rate - new_heart_rate;

            const newData = {
                ...refData,
                last_resting_hr: new_heart_rate,
                score: refData.score + heart_difference,
                streak: heart_difference > 0 ? refData.streak + 1 : 0
            };
            await foundDocument.update(newData);

        }else{
            console.log("not in database");
        }
    }
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})