import TwFollowCard from "./TwFollowCard";

const App = () => {
  const formatUsername = (userName) => `@${userName}`;
  const diego = { userName: "alefrito554", isFollow: true };
  const Users = [
    { id: 1, userName: "IbaiLlanos" },
    { id: 2, userName: "cristiinaruiizz" },
    { id: 3, userName: "blabbergirl_" },
    { id: 4, userName: "elonmusk" },
    { id: 5, userName: "Robleis01" },
    { id: 6, userName: "arigameplays" },
    { id: 7, userName: "samyriveratv" },
    { id: 8, userName: "amablitz" },
  ];
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
