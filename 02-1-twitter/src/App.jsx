import { useEffect, useState } from "react";
import "./App.css";
import TwitterFollowCard from "./components/twitter-follow-card";

function App() {
  const [users, setUsers] = useState([]);
  
  
  const [page, setPage] = useState()
  const [boolean , setBoolean] = useState(false)
  
  const booleanState = (boolean) => {
    return boolean ? setPage(1) : setPage(2)
  }
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
      });
  },[page]);

  return (
    <section className="tw-followSuggetion">
      <h2> Tal vez te guste</h2>
    {
      users.map(({id,first_name,last_name, avatar })=> {
        return(
        <TwitterFollowCard
         key={id}
          userName={first_name}
          user={last_name}
          avatar={avatar}
        ></TwitterFollowCard>)
      })
    }
    <aside className="tw-followSuggestion-actions">

  <button  onClick={()=>{booleanState(!boolean)}} className='tw-followSuggestion-button'>{'<'}</button>
  <button  onClick={()=>{booleanState(!boolean)}} className='tw-followSuggestion-button'>{'>'}</button>
    </aside>
    </section>
  );
}

export default App;
