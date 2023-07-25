import { useRef, useState } from "react";
import "./App.css";
import { Movies} from "./components/Movies";
import { useMovies } from "./hooks/UseMovies";
import { cadetblue } from "color-name";



function App() {
  const {movies} = useMovies()
  const [search, updateSearch] = useState({})
  

  const attribs = {required : 'required'}
  
  
  const handleSubmit = (event) =>{
    event.preventDefault()
    const fields = Object.fromEntries(new window.FormData(event.target))
    updateSearch(fields)
  }
  console.log(search)



  return (
    <>
      <div className="page">
        <h1>Buscador de peliculas</h1>
        <header>
          <form className="form" onSubmit={handleSubmit}>
            <input name="query"  placeholder="Avengers, SetarwARS, Thewarrios... " pattern="[a-zA-Z ]{2,254}"  min="3" />
            <button type="submit" >Buscar</button>
          </form>
        </header>

        <main><Movies movies={movies}/></main>
      </div>
    </>
  );
}

export default App;
