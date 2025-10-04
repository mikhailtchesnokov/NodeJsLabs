const axios = require('axios');
const fs = require('fs').promises;

async function fetchAndSaveMovies() {
  try {
    // Fetch movie data from the API
    const response = await axios.get('https://ghibliapi.vercel.app/films');
    const movies = response.data;
    console.log(movies);

    // Save movie data to movies.json
    await fs.writeFile('movies.json', JSON.stringify(movies, null, 2));
    console.log('Movie data saved to movies.json');
  } catch (error) {
    console.error('Error fetching or saving movie data:', error);
  }
}

fetchAndSaveMovies();
