import type { IPrimaryBtn } from "../../../types";
import "./index.css";

const PrimaryBtn = ({ children, ...props }: IPrimaryBtn) => {
  return (
    <button className="primary-btn" {...props}>
      {children}
    </button>
  );
};

export default PrimaryBtn;
