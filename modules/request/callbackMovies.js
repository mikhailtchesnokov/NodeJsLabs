const request = require('request');

request.get('https://ghibliapi.vercel.app/films', (error, response, body) => {
    if (error) {
        console.error('Error fetching data:', error);
        return;
    }

    if (response.statusCode !== 200) {
        console.error('Failed to fetch data. Status code:', response.statusCode);
        return;
    }

    const films = JSON.parse(body);

    films.forEach(film => {
        console.log(`Title: ${film.title}`);
        console.log(`Release Date  : ${film.release_date}`);
        console.log('---');
    });
});