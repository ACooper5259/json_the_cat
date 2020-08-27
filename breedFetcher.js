const request = require('request');

const userInput = process.argv[2];

const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + userInput;
// console.log(url)

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  } else {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log('breed not found');
    } else {
      console.log(data[0]['description']);
    }
  }
});

