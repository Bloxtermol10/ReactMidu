const TwitterFollowCard = (userName, user, avatar) => {

    return (
        <article>
            <header>
                <img src={avatar} alt="Avatar" />
                <div>
                    <strong>{userName}</strong>
                    <span>{user}</span>
                </div>
            </header>
            <aside>
                <button>
                    <span></span>
                    <span></span>
                </button>
            </aside>
        </article>
    )
}

export default TwitterFollowCard