import { useState } from "react";
import { fetchUsers } from "../db/db";

const useFetchUsers = () => {
  const [page, setPage] = useState(1);
  const data = fetchUsers(page,page)
  const [boolean, setBoolean] = useState(true);
  
  const booleanState = (boolean) => {
     setBoolean(boolean);
     return boolean ? setPage(1) : setPage(2);
    };
    return {
      usersResponse: data,
      newBoolean: boolean,
      booleanState,
    };
  };

export default useFetchUsers