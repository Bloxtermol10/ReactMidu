import TwAvatar from "./tw-avatar"
import "../styles/twitter-follow-card.css"
import TwButtonFollowCard from "./tw-button-follow-card"


const TwitterFollowCard = ({userName, user, avatar}) => {
    
    return (
        <article  className="tw-followCard"> 
            <header className="tw-followCard-header">
                <TwAvatar>{avatar}</TwAvatar>
                <div className="tw-followCard-info">
                    <strong className="tw-followCard-info-userName">{userName}</strong>
                    <span className="tw-followCard-info-user">{`@${user}`}</span>
                </div>
            </header>
            <aside>
                <TwButtonFollowCard/>
            </aside>
        </article>
    )
}

export default TwitterFollowCard