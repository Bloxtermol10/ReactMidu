import { useEffect, useState } from "react";
export const fetchUsers = (state, page) =>{
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch(`https://reqres.in/api/users?page=${page}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data.data);
        });
      }, [state]);
      return data
  }
  