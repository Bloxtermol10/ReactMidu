export const TwButton = ({boolean, children ,booleanState}) => {
  return (
    <button
      onClick={() => {
        booleanState(!boolean);
      }}
      className="tw-followSuggestion-button"
    >
      {children}
    </button>
  );
};
