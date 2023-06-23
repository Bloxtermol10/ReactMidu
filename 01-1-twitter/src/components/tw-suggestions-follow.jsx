import useFetchUsers from "../hooks/useFetchUsers";
import { dbUsersOutConexion } from "../db/db-provisional"; 
import { TwButton } from "./tw-button";
import TwitterFollowCard from "./twitter-follow-card";

function TwSuggestionFollow() {

  const {usersResponse,newBoolean, booleanState} = useFetchUsers()
  const users = usersResponse

  return (
    
    <section className="tw-followSuggetion">
      <h2> Tal vez te guste</h2>
      {usersResponse.map(({ id, first_name, last_name, avatar }) => {
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
        <TwButton boolean={newBoolean} booleanState={booleanState} >
          {'<'}
        </TwButton>
        <TwButton boolean={newBoolean} booleanState={booleanState} >
          {'>'}
        </TwButton>
      </aside>
    </section>
  );
}

export default TwSuggestionFollow;