function lineGraphDays30(user_id, w, h) {
    let graphUrl = 'https://api.tryterra.co/v2/graphs/aefec7e9-49f0-4860-b6de-026eefa8f2bc/' + user_id + '?timeframe=30'
    return (
        <iframe src={graphUrl} width={w} height={h}/>
    )
}

function lineGraphDays14(user_id, w, h) {
    let graphUrl = 'https://api.tryterra.co/v2/graphs/aefec7e9-49f0-4860-b6de-026eefa8f2bc/' + user_id + '?timeframe=15'
    return (
        <iframe src={graphUrl} width={w} height={h}/>
    )
}

function barGraphDays7(user_id, w, h) {
    let graphUrl = 'https://api.tryterra.co/v2/graphs/aefec7e9-49f0-4860-b6de-026eefa8f2bc/' + user_id + '?timeframe=10'
    return (
        <iframe src={graphUrl} width={w} height={h}/>
    )
}

function barGraphDays3(user_id, w, h) {
    let graphUrl = 'https://api.tryterra.co/v2/graphs/aefec7e9-49f0-4860-b6de-026eefa8f2bc/' + user_id + '?timeframe=5'
    return (
        <iframe src={graphUrl} width={w} height={h}/>
    )
}

export {
    lineGraphDays30,
    lineGraphDays14,
    barGraphDays7,
    barGraphDays3,
}