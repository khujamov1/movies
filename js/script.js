var elMovies = document.querySelector(".movies");


for (var kino of kinolar) {
     var movie = document.createElement("li");
     var movieName = document.createElement("h3");
     var movieYear = document.createElement("span");
     var movieActors = document.createElement("p");
     var movieGenre = document.createElement("span");

     elMovies.appendChild(movie);
     movie.append(movieName, movieYear, movieActors, movieGenre);
     movie.className = "movie";
     movieActors.className = "actors";

     movieName.textContent = kino.title;
     movieYear.textContent = (`Year: ` + kino.year);
     movieActors.textContent = kino.cast.join(" , ");
     movieGenre.textContent = `Genres: ` + kino.genres.join(" , ");
};