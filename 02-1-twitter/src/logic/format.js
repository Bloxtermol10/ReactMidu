

export const textButton = (isFollow) => isFollow ? "Siguiendo" : "Seguir";
export const className = (isFollow) => {

  return isFollow
  ?  "tw-followCard-button is-follow"
  : "tw-followCard-button";
}
export const formartUserText = (text) => {
  return `@${text}`;
};