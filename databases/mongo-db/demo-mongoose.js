const mongoose = require('mongoose');

const dbURI = "mongodb://appuser:secret@localhost:27017/mydatabase?directConnection=true";

mongoose.connect(dbURI)
  .then(() => {
    console.log('MongoDB connected successfully!');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number
});

const Movie = mongoose.model('Movie', movieSchema);

async function getMovies() {
    try {
        var movies = await Movie.find({ year: { $gte: 2000 } });
        console.log("Movies found:", movies);
    } catch (err) {
        console.error("Error finding movies:", err);
    } finally {
        mongoose.disconnect();
    }
}

async function addMovie() {
    try {
        var movie = new Movie({ title: 'Inception', year: 2010 });
        await movie.save();
        console.log("Movie added:", movie);
    } catch (err) {
        console.error("Error adding movie:", err);
    } finally {
        mongoose.disconnect();
    }
}


async function getMovie() {
    try {
        var movie = await Movie.findById('68b861b040e9d916898ee44f');
        console.log("Movie found:", movie);
    } catch (err) {
        console.error("Error finding movie:", err);
    } finally {
        mongoose.disconnect();
    }
}

async function deleteMovie() {
    try {
        var movie = await Movie.findByIdAndDelete('68b861b040e9d916898ee44f');
        console.log("Movie deleted:", movie);
    } catch (err) {
        console.error("Error deleting movie:", err);
    } finally {
        mongoose.disconnect();
    }
}

//getMovies();
//addMovie();
//getMovie();
deleteMovie();
