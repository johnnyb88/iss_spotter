const { nextISSTimesForMyLocation } = require('./iss_promised');
// const { fetchCoordsByIP } = require('./iss_promised');

const flyOverTimes = function(flyTimes) {
  for (const pass of flyTimes) {
    const datetime = new Date(0); //instance that represents a single moment in time in a platform-independent format
    datetime.setUTCSeconds(pass.risetime); //The setUTCSeconds() method sets the seconds for a specified date according to universal time.
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((flyTimes) => {
    flyOverTimes(flyTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });