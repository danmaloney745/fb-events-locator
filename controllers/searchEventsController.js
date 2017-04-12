const NodeGeocoder = require('node-geocoder');

var options = {
    provider: 'google',
    httpAdapter: 'https',
    apiKey: process.env.GOOGLE_API,
    formatter: null
 };

let geocoder = NodeGeocoder(options);

class searchForEvents {
    static fetchLocation(data) {
        return new Promise(
            (resolve, reject) => {
                geocoder.geocode(data)
                    .then(function(res) {
                        console.log(res);
                        let lat = res[0].latitude;
                        let long = res[0].longitude;
                        let appendLocation = [lat, long];
                        resolve(appendLocation);
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
        });
    }

    static searchForevents(req,res) {
        fetchLocation(req.params.text)
            .then(result => {
                res.status(200).send(result);
            })
            .catch(err => {
                res.status(400).status(err.message);
            })
    }
}

module.exports = searchForEvents;