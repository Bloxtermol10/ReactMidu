/* eslint-disable react/prop-types */


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


// eslint-disable-next-line react/prop-types
export function Movies({movies}) {
  return(
    <>
       {movies ? <ListOfMovies movies={movies} /> : (
        <h3>No se ha encontrado tu pelicula</h3>
        )}
    </>
    
  )
}
