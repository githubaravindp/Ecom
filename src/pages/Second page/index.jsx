import "./second.css";
import { useSelector } from "react-redux";

const Second = () => {
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="main">
      <h1>{count}</h1>
    </div>
  );
};

export default Second;
