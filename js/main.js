$(function() {
  $(window).scroll(function () {
    if($(this)[0].scrollY > 30) {
      document.getElementsByClassName('header-container')[0].style.backgroundColor = '#141417';
    }else {
      document.getElementsByClassName('header-container')[0].style.backgroundColor = 'transparent';
    }
  })
});

const BASE_URL = "https://api.themoviedb.org/3";
const ENDPOINT_MOVIE_POPULAR = "/movie/popular";
const ENDPOINT_TOP_RATED = "/movie/top_rated";
const QUERY_STRING = "?api_key=5e7473c25bf84cdc7553905766b32c26&language=pt-BR";
const URL_IMAGE = "https://image.tmdb.org/t/p/original";

const url = `${BASE_URL}${ENDPOINT_MOVIE_POPULAR}${QUERY_STRING}`;
const carouselMoviePopular = document.getElementsByClassName("owl-carousel owl-theme")[0];

fetch(url)
  .then((response) => response.json())
  .then((response) => {
    response.results.map((movie) => {
      const movieHtml = document.createElement("div");
      movieHtml.classList.add("item");

      movieHtml.innerHTML = `
      <img
        class="film-image"
        src="${URL_IMAGE}${movie.backdrop_path}"
        alt="${movie.title}"
      />
      `;

      carouselMoviePopular.appendChild(movieHtml);
    });
    const indexMovie = Math.floor(Math.random() * (response.results.length))

    $('.main-movie > h3').html(`${response.results[indexMovie].title}`);
    $('.sinopse > p').html(`${response.results[indexMovie].overview}`);

    $('.main-movie').css({
      background: `linear-gradient(rgba(0, 0, 0, 0.2), #141417 90%), url(${URL_IMAGE}${response.results[indexMovie].backdrop_path})`,
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    });

  }).catch(function (error) {
    console.log("erro", error);
  }).finally(() => {
    $("#movie-popular").owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  });

const urlMovieTopRated = `${BASE_URL}${ENDPOINT_TOP_RATED}${QUERY_STRING}`;
const carouselMovieTopRated = document.getElementsByClassName("owl-carousel owl-theme")[1];

fetch(urlMovieTopRated)
  .then((response) => response.json())
  .then((response) => {
    response.results.map((movie) => {
      const movieHtml = document.createElement("div");
      movieHtml.classList.add("item");

      movieHtml.innerHTML = `
      <img
        class="film-image"
        src="${URL_IMAGE}${movie.backdrop_path}"
        alt="${movie.title}"
      />
      `;

      carouselMovieTopRated.appendChild(movieHtml);
    });
  }).catch(function (error) {
    console.log("erro", error);
  }).finally(() => {
    $("#top-rated").owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  });


