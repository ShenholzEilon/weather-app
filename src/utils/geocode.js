const request = require("request")

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiZWlsb25zaGVuaG9seiIsImEiOiJja3R2Nng1YmYxaGIwMnBxZWdtOHE2a3ZqIn0.n4beE7fW_qu5rdMKAnDLZg&limit=1'
    request({url, json: true}, (error, { body} = {}) => {
        if (error){
            callback('Unable to connect', undefined)
        }else if (body.features.length === 0){
            callback('Unable to find location', undefined)
        }
        else{
            callback(undefined, {
                lat: body.features[0].center[1],
                long: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })

}

module.exports = geocode