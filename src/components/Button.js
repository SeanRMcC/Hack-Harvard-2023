import axios from 'axios';


export default function Button(){
    const ID = "teanterra20-testing-Wc2O2RllNc";
    const KEY = "3sgPKkTHRUs8RxvNMBFZSqfVRbELlGvi";
    const API_ENDPOINT = "https://api.tryterra.co/v2/auth/generateWidgetSession";
    const data = {
        providers: "GARMIN,WITHINGS,FITBIT,GOOGLE,OURA,WAHOO,PELOTON,ZWIFT,TRAININGPEAKS,FREESTYLELIBRE,DEXCOM,COROS,HUAWEI,OMRON,RENPHO,POLAR,SUUNTO,EIGHT,APPLE,CONCEPT2,WHOOP,IFIT,TEMPO,CRONOMETER,FATSECRET,NUTRACHECK,UNDERARMOUR",
        language: "en"
    }
    const config = {
        "headers": {
            accept: "application/json",
            'Access-Control-Allow-Origin': '*',
            "content-type": "application/json",
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
            "dev-id": ID,
            "x-api-key": KEY
        }
    }

    return (
        <button onClick={async () => {
                const url = (await axios.post(API_ENDPOINT, data, config)).data.url;
                window.location = url;
            }
        }>
            Connect!
        </button>
    )   
}