import "./App.css";
import responseMovies from "./mocks/with-results.json";
import withoutResults from "./mocks/no-results.json";
import { Movies } from "./components/movies";

export function useMovies () {
  const movies = responseMovies.Search;

  const mappedMovies = movies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return {movies: mappedMovies};
}

function App() {
  const { movies: mappedMovies } = useMovies();


  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form action="" className="form">
          <input placeholder="Nombre de una pelicula..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
