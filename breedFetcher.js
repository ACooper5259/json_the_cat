const request = require('request');
const breedName = process.argv[2];

const fetchBreedDescription = function (breedName, callback) {

  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  //console.log(url)

  request(url, (error, response, body) => {

    if (error) {
      return callback(error, null)
      // console.log('error:', error); // Print the error if one occurred
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log('breed not found')
      return
    } else {
      const breed = data[0]
      // console.log(breed)
      // console.log(breed['description'])
      if (breed) {
        callback(null, breed['description'])
      }
    }

  })
}

module.exports = { fetchBreedDescription }



// fetchBreedDescription(breedName, (error, desc) => {
//   if (error) {
//     console.log('Error fetch details:', error);
//   } else {
//     console.log('description: ', desc);
//   }
// })