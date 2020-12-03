// Creates an array of the command line arguments, excluding the first 2 default ones.
const args = process.argv.slice(2);
const url = args[0];
const saveLocation = args[1];
const request = require('request');
const fs = require('fs');

request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(saveLocation, body, () => {
    if (error) {
      throw error;
    } else {
      const stats = fs.statSync(saveLocation);
      console.log(`Downloaded and saved ${stats.size} bytes to ${saveLocation}`);
    }
  })
});

// Downloaded and saved 3261 bytes to ./index.html
