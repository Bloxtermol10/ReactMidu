import { useState, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({search ,sort}) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  

 
  
  const getMovies = useCallback(async({search}) =>{
    try{
      setLoading(true)
      const newMovies = await searchMovies({search})
      setMovies(newMovies)
    }catch(e){
      e.message
    }finally{
      setLoading(false)
    }
  },[search])

  const sortedMovies = useMemo(()=>{
    console.log('srted Movies')
    return sort && movies
    ? [...movies].sort((a,b)=> a.year.localeCompare(b.year))
    : movies
  },[movies, sort])

  

  return { movies : sortedMovies , getMovies, loading};
}
