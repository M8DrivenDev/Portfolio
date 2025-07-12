import "./index.css";

const HeadRoute = ({
  heading,
  subHeading,
  symbol = "/",
}: {
  heading: string;
  subHeading: string;
  symbol?: string;
}) => {
  return (
    <div className="head-route-container">
      <h1>
        <span className="text-primary">{symbol}</span>
        {heading}
      </h1>
      <p className="text-gray">{subHeading}</p>
    </div>
  );
};

export default HeadRoute;
