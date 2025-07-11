import "./index.css";

const Divider = ({ dividerHeading }: { dividerHeading: string }) => {
  return (
    <div className="divider-container">
      <h2>
        <span className="text-primary">#</span>
        <span className="text-white"> {dividerHeading}</span>
      </h2>
      <div className="divider-line"></div>
    </div>
  );
};

export default Divider;
