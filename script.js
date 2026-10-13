const form = document.getElementById("movie-form");
const titleInput = document.getElementById("movie-title");
const genreSelect = document.getElementById("movie-genre");
const message = document.getElementById("form-message");
const movieList = document.getElementById("movie-list");
const emptyMessage = document.getElementById("empty-message");

const watchlist = {
movies: [],
toggleWatched(index) {
    const watchlist = {
    movies: [{ title: "The Princess Bride", genre: "Adventure", watched: false }],

},
removeMovie(index) {
    // TODO (Step 4)
}
};

function saveMovies() {
// TODO (Step 6)
}

function loadMovies() {
// TODO (Step 6)
}

function renderMovies() {
  movieList.replaceChildren();

  watchlist.movies.forEach((movie, index) => {
    const card = document.createElement("li");
    const title = document.createElement("h3");
    title.textContent = movie.title;

    const details = document.createElement("p");
    details.textContent = movie.genre + " · " + (movie.watched ? "Watched" : "Not watched");

    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.textContent = movie.watched ? "Mark Unwatched" : "Mark Watched";
    toggleButton.addEventListener("click", () => {
      watchlist.toggleWatched(index);
      saveMovies();
      renderMovies();
    });

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      watchlist.removeMovie(index);
      saveMovies();
      renderMovies();
    });

    card.append(title, details, toggleButton, removeButton);
    movieList.append(card);
  });

  if (watchlist.movies.length === 0) {
    emptyMessage.textContent = "Your watchlist is empty. Add a movie to get started.";
  } else {
    emptyMessage.textContent = "";
  }
}

form.addEventListener("submit", (event) => {
// TODO (Step 5)
});

loadMovies();
renderMovies();




