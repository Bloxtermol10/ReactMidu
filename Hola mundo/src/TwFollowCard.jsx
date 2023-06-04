import "./TwFollowCard.css"

const TwFollowCard = () => {
    return(
        <article className="tw-followCard">
        <header  className="tw-followCard-header">
            <img  className="tw-followCard-img" src="https://pbs.twimg.com/profile_images/1540810647604183046/OhYhwdAi_400x400.jpg" alt="Avatar" />
            <div className="tw-followCard-info">  <strong className="tw-followCard-name">Ibai</strong>
                <span className="tw-followCard-userName">IbaiLlanos</span>
            </div>
        </header>
        <aside>
            <button className="tw-followCard-button">Seguir</button>
        </aside>
     </article>
    )
}

export default TwFollowCard