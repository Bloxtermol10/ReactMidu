import { useEffect, useState} from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import debounce from 'just-debounce-it'



function App() {
  const [search, updateSearch] = useState('')
  const [sort, setSort] = useState(false)
  const { movies, getMovies, loading } = useMovies({ search, sort })
  

  useEffect(() => {
    
    getMovies({search})
  }, [search])

  useEffect(()=>{
    console.log('New Get movies')
  },[getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = new window.FormData(event.target)
    const query = fields.get('query')
    updateSearch(query)
  }
  const handleChange = debounce((event)=>{
    const newSearch = event.target.value
     getMovies({search:newSearch})
  },500)


  const handleSort = () =>{
    setSort(!sort)
  }


  return (
    <>
      <div className="page">
        <h1>Buscador de peliculas</h1>
        <header>
          <form className="form" onSubmit={handleSubmit}>
            <input name="query" placeholder="Avengers, SetarwARS, Thewarrios... " pattern="[a-zA-Z ]{2,254}" min="3" onChange={handleChange} />
            <input type="checkbox" name="" onChange={handleSort} checked={sort} id="" />
            <button type="submit" >Buscar</button>
          </form>
        </header>

        <main>{
        loading
          ? <h1>Cargando..</h1>
          : <Movies movies={movies} />
        }
        </main>
      </div>
    </>
  );
}

export default App;
