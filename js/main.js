$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
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

const BASE_URL = "https://api.themoviedb.org/3";
const ENDPOINT_MOVIE_POPULAR = "/movie/popular";
const QUERY_STRING = "?api_key=5e7473c25bf84cdc7553905766b32c26";
const URL_IMAGE = "https://image.tmdb.org/t/p/original";

const url = `${BASE_URL}${ENDPOINT_MOVIE_POPULAR}${QUERY_STRING}`;
const moviePopular = [];
const carousel = document.getElementsByClassName("owl-carousel owl-theme")[0];

fetch(url)
  .then((response) => response.json())
  .then((response) => {
    response.results.map((movie) => {
      const movieHtml = document.createElement("div");
      movieHtml.classList.add("item");
      movieHtml.innerHTML = `
        <img
          class="film-image"
          src="${URL_IMAGE}${movie.poster_path}"
          alt="${movie.original_title}"
        />
      `;

      carousel.appendChild(movieHtml);
      // const objMovie = {};
      // objMovie.id = movie.id;
      // objMovie.title = movie.original_title;
      // objMovie.overview = movie.overview;
      // objMovie.poster = `${URL_IMAGE}${movie.poster_path}`;
      // moviePopular.push(objMovie);
    });
  })
  .catch(function (error) {
    console.log("erro", error);
  });

console.log("carousel-->", carousel);
