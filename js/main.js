const apiKey = '181c69466ca24b32232c10c5e8a93323';
const topRatedMusical = "https://api.themoviedb.org/3/movie/popular?with_genres=10402&api_key=181c69466ca24b32232c10c5e8a93323";
const topRatedDrama = "https://api.themoviedb.org/3/movie/popular?with_genres=18&api_key=181c69466ca24b32232c10c5e8a93323";
const topRatedComedia = "https://api.themoviedb.org/3/movie/popular?with_genres=35&api_key=181c69466ca24b32232c10c5e8a93323";
const imgPath = "https://image.tmdb.org/t/p/w1280/";
const moviesDrama = document.getElementById("moviesDrama")
const moviesComedia = document.getElementById("moviesComedia")
const moviesMusical = document.getElementById("moviesMusical")

getMovies(topRatedComedia)

async function getMovies(url) {
    const res= await fetch(url)
    const data = await res.json()
    displayMovies(data.results.slice(0,3))
}

function displayMovies(movies) {
    moviesComedia.innerHTML = '';
    movies.forEach((movie) => {
        const {title, poster_path, overview} = movie
        const moviesElement =document.createElement('div')
        moviesElement.classList.add('movie')
        moviesElement.innerHTML = `
        <img src="${imgPath + poster_path}" alt="${title}">
        <div class="movieInfo">
            <h3>${title}</h3>
        </div>
        <div class="overview">
        ${overview}
        </div>        
        `
        moviesComedia.appendChild(moviesElement)
    });
}




getMoviesDrama(topRatedDrama)

async function getMoviesDrama(url) {
    const res= await fetch(url)
    const data = await res.json()
    displayMoviesDrama(data.results.slice(0,3))
}

function displayMoviesDrama(movies) {
    moviesDrama.innerHTML = '';
    movies.forEach((movie) => {
        const {title, poster_path, overview} = movie
        const moviesElement =document.createElement('div')
        moviesElement.classList.add('movie')
        moviesElement.innerHTML = `
        <img src="${imgPath + poster_path}" alt="${title}">
        <div class="movieInfo">
            <h3>${title}</h3>
        </div>
        <div class="overview">
        ${overview}
        </div>        
        `
        moviesDrama.appendChild(moviesElement)
    });
}


getMoviesMusical(topRatedMusical)

async function getMoviesMusical(url) {
    const res= await fetch(url)
    const data = await res.json()
    displayMoviesMusical(data.results.slice(0,3))
}

function displayMoviesMusical(movies) {
    moviesMusical.innerHTML = '';
    movies.forEach((movie) => {
        const {title, poster_path, overview} = movie
        const moviesElement =document.createElement('div')
        moviesElement.classList.add('movie')
        moviesElement.innerHTML = `
        <img src="${imgPath + poster_path}" alt="${title}">
        <div class="movieInfo">
            <h3>${title}</h3>
        </div>
        <div class="overview">
        ${overview}
        </div>        
        `
        moviesMusical.appendChild(moviesElement)
    });
}