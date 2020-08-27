const request = require('request');
const breedName = process.argv[2];

const fetchBreedDescription = function (breedName, callback) {

  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  //console.log(url)
  let desc = '';

  request(url, (error, response, body) => {

    // if (error) {
    // console.log('error:', error); // Print the error if one occurred
    // } else {
    //console.log('body: ', body)
    const data = JSON.parse(body);
    //console.log(data)
    if (data[0] === undefined) {
      desc = 'breed not found';
      // console.log(desc)
      return desc
    } else {
      desc = (data[0]['description']);
      // console.log(desc)
      return desc
    }
  });

};

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});