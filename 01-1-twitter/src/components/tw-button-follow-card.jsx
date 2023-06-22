import { useIsFollow } from "../hooks/useIsFollow";

const TwButtonFollowCard = () => {

    const {setIsFollow, textButton, className, isFollow} = useIsFollow()  

  return (
    <button
      className={className}
      onClick={() => {
        setIsFollow(!isFollow);
      }}
    >
      <span className="tw-followCard-button-text">{textButton}</span>
      <span className="tw-followCard-button-unFollow">Dejar de seguir</span>
    </button>
  );
};

export default TwButtonFollowCard
