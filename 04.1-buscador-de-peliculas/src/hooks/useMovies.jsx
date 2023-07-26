import { useState } from "react";
import { searchMovies } from "../services/searchMovies";
export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  

  const getMovies = async() => {
    try{
    const newMovies = await searchMovies({search})
    setMovies(newMovies);}
    catch(e){
      e.message
    }
  };

  return { movies, getMovies };
}
