export function ListOfMovies({ movies }) {
  


  return (
    <ul className="movies">
      {movies.map((movie) => {
        return (
          <li key={movie.id} className="movie">
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        );
      })}
    </ul>
  );
}

export function NoMoviesResult() {
  return <p>No se encontraron resultados de tu busqueda </p>;
}

export function Movies({movies}) {
    const hasMovies = movies?.length > 0;
    return (
        hasMovies 
            ? <ListOfMovies movies={movies} /> 
            : <NoMoviesResult/>)
}
