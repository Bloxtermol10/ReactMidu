export function ListOfMovies({ movies }) {
  


  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className="card">
            <h1>{movie.title}</h1>
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
