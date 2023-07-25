import { useRef } from "react";
import "./App.css";
import { Movies} from "./components/Movies";
import { useMovies } from "./hooks/UseMovies";
import { cadetblue } from "color-name";



function App() {
  const {movies} = useMovies()

  
  const handleSubmit = (event) =>{
    event.preventDefault()
    const fields = Object.fromEntries(new window.FormData(event.target))
    console.log(fields)
  }
  return (
    <>
      <div className="page">
        <h1>Buscador de peliculas</h1>
        <header>
          <form className="form" onSubmit={handleSubmit}>
            <input name="query"  placeholder="Avengers, SetarwARS, Thewarrios... " />
            <button type="submit" >Buscar</button>
          </form>
        </header>

        <main><Movies movies={movies}/></main>
      </div>
    </>
  );
}

export default App;
