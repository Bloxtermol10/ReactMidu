import "./TwFollowCard.css"

const TwFollowCard = ({children,formatUsername, avatar, name, userName,isFollow}) => {
const text = isFollow ? "Siguiendo" : "Seguir"
const buttonClass = isFollow
    ? 'tw-followCard-button is-follow'
    : 'tw-followCard-button'
    return(
        <article className="tw-followCard">
        <header  className="tw-followCard-header">
            <img  className="tw-followCard-avatar" src={avatar} alt="Avatar" />
            <div className="tw-followCard-info">  <strong className="tw-followCard-infoName">{name}</strong>
            {children}
                <span className="tw-followCard-infoUserName">{formatUsername(userName)}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClass}>
                {text}
            </button>
        </aside>
     </article>
    )
}

export default TwFollowCard