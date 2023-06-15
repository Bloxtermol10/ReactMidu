import { useState } from "react"

import "../styles/TwFollowCard.css"

import { buttonClass, textFromButton } from "../logic/button"

const TwFollowCard = ({formatUsername,userName}) => {
    const [isFollow,setIsFollow] = useState(false)

    const handleClick = () =>{
        setIsFollow(!isFollow)
    }

    return(
        <article className="tw-followCard">
        <header  className="tw-followCard-header">

            <img  className="tw-followCard-avatar" src={`https://unavatar.io/twitter/${userName}`}  alt="Avatar" />
            
            <div className="tw-followCard-info">  <strong className="tw-followCard-infoName">{userName}</strong>
                <span className="tw-followCard-infoUserName">{formatUsername(userName)}</span>
            </div>

        </header>
        <aside>

            <button className={buttonClass(isFollow)}
             onClick={handleClick}
            >
            <span className="tw-followCard-button-text">
                    {textFromButton(isFollow)}
            </span>
            <span className="tw-followCard-button-unFollow">Dejar de seguir </span>
            </button> 

        </aside>
     </article>
    )
}

export default TwFollowCard