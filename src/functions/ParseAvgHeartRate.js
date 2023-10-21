import jsonData from './../data/temp'

const data = jsonData.data;

export default function Parse() {
    const data = jsonData.data
    
    console.log(data) // should output list of 

    if (!data) {
        console.log("error parsing data, data:", data)
    }

    for (let i = 0; i < data.length; i++) {
        const content = JSON.parse(data[i].content)
        // console.log(content)
        
        // check if user exists and data exists
        if (content.user && content.data) {
            const user = content.user
            console.log(user)
            if (user.user_id) {

            }
            
            
            const userData = content.data[0]
            // check if user has hr data
            const summary = userData.heart_rate_data.summary
            if (summary) {
                const resting_hr = summary.resting_hr_bpm
                const avg_hr = summary.avg_hr_bpm
                const max_hr = summary.max_hr_bpm
                const min_hr = summary.min_hr_bpm
                // console.log(resting_hr, avg_hr)
            }
            else {
                console.log("error finding user hr data,", userData)
            }

        } else{
            console.log("error parsing, couldn't find user or data")
        }
        // console.log(content)
        // console.log("hello")
    }
}