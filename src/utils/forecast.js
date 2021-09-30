const request = require("request");
forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=263676995dd94cd7a13599e37baa8ee4&query=' + lat +',' + long
    request({url, json: true}, (error, { body } = {})=>{
        if (error){
            callback('Unable to connect', undefined)
        }else if (body.error){
            callback('Incorrect location', undefined)
        }else{
            callback(undefined, {
                temp: body.current.temperature,
                feelsLike: body.current.feelslike
            })
        }
    })
}

module.exports = forecast