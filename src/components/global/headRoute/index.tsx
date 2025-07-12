import "./index.css";

const HeadRoute = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) => {
  return (
    <div className="head-route-container">
      <h1>
        <span className="text-primary">/</span>
        {heading}
      </h1>
      <p className="text-gray">{subHeading}</p>
    </div>
  );
};

export default HeadRoute;
