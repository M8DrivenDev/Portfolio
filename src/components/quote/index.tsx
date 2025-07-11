import { HollowRect } from "../ui/hollowRect";
import "./index.css";
const Quote = () => {
  return (
    <div className="quote-section">
      <div className="quote-container">
        <div className="opening-quote">“</div>
        <p className="quote-text">I can resist everything except temptation.</p>
        <div className="closing-quote">„</div>
      </div>
      <div className="quote-rect">
        <HollowRect width={80} height={70} />
      </div>
      <div className="quote-author">
        <p>- Oscar Wilde</p>
      </div>
    </div>
  );
};

export default Quote;
