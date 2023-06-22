import { useState } from "react"

const buttonAppearance = (isFollow) =>{
    const textButton = isFollow ? 'Siguiendo' : 'Seguir'
    const className = isFollow ? 'tw-followCard-button is-follow' : 'tw-followCard-button'

    return {textButton : textButton, className: className}
}

export const useIsFollow = () => {
    const [isFollow, setIsFollow] = useState(false)

    const {textButton, className} = buttonAppearance(isFollow)
    
    return {setIsFollow, className : className, textButton : textButton, isFollow : isFollow}
}