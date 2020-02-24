let GtfsRealtimeBindings = require('gtfs-realtime-bindings');
let xmlConvert = require('xml-js');
let request = require('request');

let requestSettings = {
  method: 'GET',
  url: 'http://web.mta.info/status/ServiceStatusSubway.xml',
  encoding: "utf-8"
};
request(requestSettings, function (error, response, body) {
    let json = xmlConvert.xml2json(body)
    let string = JSON.stringify(body)
    console.log(JSON.parse(string))
  // if (!error && response.statusCode == 200) {
  //   let feed = GtfsRealtimeBindings.FeedMessage.decode(body);
  //   feed.entity.forEach(function(entity) {
  //     if (entity.trip_update) {
  //       console.log(entity.trip_update);
  //     }
  //   });
  // }
});
