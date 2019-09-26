const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

// {
//   "message": "success",
//   "request": {
//     "latitude": LATITUE,
//     "longitude": LONGITUDE, 
//     "altitude": ALTITUDE,
//     "passes": NUMBER_OF_PASSES,
//     "datetime": REQUEST_TIMESTAMP
//   },
//   "response": [
//     {"risetime": TIMESTAMP, "duration": DURATION},
//     ...
//   ]
// }

const flyOverTimes = function(flyTimes) {
  for (const pass of flyTimes) {
    const datetime = new Date(0); //instance that represents a single moment in time in a platform-independent format
    datetime.setUTCSeconds(pass.risetime); //The setUTCSeconds() method sets the seconds for a specified date according to universal time.
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, flyTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  flyOverTimes(flyTimes);
});




// };
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });


// fetchCoordsByIP('162.245.144.188', (error, coords) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned Coords:' , coords);
// });
// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, flyTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned Fly over times: ', flyTimes);
// });