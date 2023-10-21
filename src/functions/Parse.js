import jsonData from './data/temp'

const data = jsonData.data;

function ParseAvgHeartRate() {
    for (let i=0; i < data.length; i++) {
        const ithData = data[i];
        const content = ithData.content;
        const parsedContent = JSON.parse(content);
        if (parsedContent.user && parsedContent.data) {
            const userData = parsedContent.data[0]
            console.log(userData.heart_rate_data.summary.avg_hr_bpm)
        }
    }
}

export default ParseAvgHeartRate