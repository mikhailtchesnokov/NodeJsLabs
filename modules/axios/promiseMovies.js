const axios = require('axios');
const fs = require('fs').promises;

// Function to fetch movie data from an API
axios.get('https://ghibliapi.vercel.app/films')
  .then(response => {
    const movies = response.data;
    console.log(movies);
    return movies;
  })
  .then((movies) => {
    // Save movie data to a file
    return fs.writeFile('movies.json', JSON.stringify(movies, null, 2));
  })
  .then(() => {
    console.log('Movie data saved to movies.json');
    throw new Error('Simulated error after saving file');
  })
  .catch(error => {
    console.error('Error fetching movie data:', error);
  });   