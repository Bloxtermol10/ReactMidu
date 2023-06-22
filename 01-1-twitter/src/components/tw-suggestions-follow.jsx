import useFetchUsers from "../hooks/useFetchUsers";
import { Users } from "../db/db-provisional"; // Base de datos sin conexión 
import { TwButton } from "./tw-button";
import TwitterFollowCard from "./twitter-follow-card";

function TwSuggestionFollow() {

  const {users,newBoolean, booleanState} = useFetchUsers()
  
  return (
    
    <section className="tw-followSuggetion">
      <h2> Tal vez te guste</h2>
      {Users.map(({ id, first_name, last_name, avatar }) => {
        return (
          <TwitterFollowCard
            key={id}
            userName={first_name}
            user={last_name}
            avatar={avatar}
          ></TwitterFollowCard>
        );
      })}
      <aside className="tw-followSuggestion-actions">
        <TwButton /*boolean={newBoolean} booleanState={booleanState}*/ >
          {'<'}
        </TwButton>
        <TwButton /*boolean={newBoolean} booleanState={booleanState}*/ >
          {'>'}
        </TwButton>
      </aside>
    </section>
  );
}

export default TwSuggestionFollow;