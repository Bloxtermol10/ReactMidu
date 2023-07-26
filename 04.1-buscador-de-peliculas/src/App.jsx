import { useEffect, useState } from "react";
import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./Movies";


function App() {
  const [search, setSearch] = useState('');
  const { movies, getMovies } = useMovies({ search });


  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = new window.FormData(event.target);
    const query = fields.get("query");
    setSearch(query);
  };

  // console.log(process.env.REACT_APP_API_URL)
  useEffect(() => {
    getMovies()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search])

  return (
    <div className="page">
      <header>
        <h2>Buscador de Peliculas</h2>
        <form action="" className="form" onSubmit={handleSubmit}>
          <input 
            name="query"
            type="text"
            placeholder="Matrix, StarWars, Avenger..."
            min="3"
            max="30"
            pattern="[A-Za-z]{3,15}"
            required
          />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
          <Movies movies={movies}/>
      </main>
    </div>
  );
}

export default App;



