import { useState } from "react"
import "../styles/twitter-follow-card.css"
const TwitterFollowCard = ({userName, user, avatar}) => {

    const [isFollow, setIsFollow] = useState(false)

    const textButton = isFollow ? 'Siguiendo' : 'Seguir'
    const className = isFollow ? 'tw-followCard-button is-follow' : 'tw-followCard-button'
    const formartUserText = (text) => {
        return `@${text}`
    }

    return (
        <article  className="tw-followCard"> 
            <header className="tw-followCard-header">
                <img  className="tw-followCard-avatar"src={avatar} alt="Avatar" />
                <div className="tw-followCard-info">
                    <strong className="tw-followCard-info-userName">{userName}</strong>
                    <span className="tw-followCard-info-user">{formartUserText(user)}</span>
                </div>
            </header>
            <aside className>
                <button className={className.toString()} onClick={()=>{setIsFollow(!isFollow)}}>
                    <span className="tw-followCard-button-text">{textButton}</span>
                    <span className="tw-followCard-button-unFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}

export default TwitterFollowCard