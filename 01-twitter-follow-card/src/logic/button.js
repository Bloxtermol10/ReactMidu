export const textFromButton = (isFollow) => isFollow 
                ? "Siguiendo"  
                : "Seguir";
export const buttonClass = (isFollow) => isFollow 
                ? 'tw-followCard-button is-follow'
                : 'tw-followCard-button';