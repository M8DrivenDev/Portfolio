import "./index.css";

const Hamburger = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="hamburger" onClick={onClick}>
      <input className="checkbox" type="checkbox" checked={isOpen} />
      <svg fill="none" viewBox="0 0 50 50" height="30">
        <path
          className="lineTop line"
          strokeLinecap="round"
          strokeWidth="4"
          d="M6 11L44 11"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="4"
          d="M6 24H43"
          className="lineMid line"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="4"
          d="M6 37H43"
          className="lineBottom line"
        ></path>
      </svg>
    </div>
  );
};

export default Hamburger;
