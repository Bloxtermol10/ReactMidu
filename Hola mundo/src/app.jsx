import TwFollowCard from "./TwFollowCard"

const App = () =>{
    
    const formatUsername = (userName) => `@${userName}`
    const diego = {name: "Diego", userName: "alefrito554", isFollow:true, avatar: "https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-1/301577855_1481405662375222_6721428256941958966_n.jpg?stp=dst-jpg_p160x160&_nc_cat=110&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=w3kjGl33VtIAX-o1DIW&_nc_ht=scontent-bog1-1.xx&oh=00_AfBN7OfczEpqxxcQsOWUTdqRQQybpQwVWQfyxaamxtdZ7Q&oe=6482C2ED"}
    return(
        <div className="App">

        <TwFollowCard 
            formatUsername={formatUsername}
            isFollow
            avatar="https://pbs.twimg.com/profile_images/1540810647604183046/OhYhwdAi_400x400.jpg" 
            name="Ibai" 
            userName={"@IbaiLlanos"}
            />
        <TwFollowCard 
            formatUsername={formatUsername}
            isFollow={false} 
            avatar="https://pbs.twimg.com/profile_images/1540810647604183046/OhYhwdAi_400x400.jpg" 
            name="Ibai" 
            userName={"@IbaiLlanos"}
        >
            Hijos
        </TwFollowCard>
        <TwFollowCard formatUsername={formatUsername} {...diego} />
        
        
        
            </div>
    )
}

export default App