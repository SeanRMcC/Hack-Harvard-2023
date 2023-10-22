function lineGraphDays30(user_id, w, h) {
    let graphUrl = 'https://api.tryterra.co/v2/graphs/fe3f03b9-2873-4c16-bc9e-ef420ae6a114/' + user_id + '?timeframe=30'
    return (
        <iframe src={graphUrl} width={w} height={h}/>
    )
}

function lineGraphDays14(user_id, w, h) {
    let graphUrl = 'https://api.tryterra.co/v2/graphs/fe3f03b9-2873-4c16-bc9e-ef420ae6a114/' + user_id + '?timeframe=20'
    return (
        <iframe src={graphUrl} width={w} height={h}/>
    )
}

function barGraphDays7(user_id, w, h) {
    let graphUrl = 'https://api.tryterra.co/v2/graphs/fe3f03b9-2873-4c16-bc9e-ef420ae6a114/' + user_id + '?timeframe=13'
    return (
        <iframe src={graphUrl} width={w} height={h}/>
    )
}

function barGraphDays3(user_id, w, h) {
    let graphUrl = 'https://api.tryterra.co/v2/graphs/fe3f03b9-2873-4c16-bc9e-ef420ae6a114/' + user_id + '?timeframe=6'
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