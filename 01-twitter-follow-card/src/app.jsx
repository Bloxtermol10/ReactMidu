import TwFollowCard from "./components/TwFollowCard"

import { diego, Users } from "./logic/db";
import { formatUsername } from "./logic/text";

const App = () => {
  
  return (
    <div className="App">
      {Users.map((e) => {
        return (
          <TwFollowCard
            key={e.id}
            formatUsername={formatUsername}
            userName={e.userName}
          ></TwFollowCard>
        );
      })}

      <TwFollowCard formatUsername={formatUsername} {...diego} />
    </div>
  );
};

export default App;
