import { Button } from "antd";
import { increment } from "../../Redux/countSlice";
import { useDispatch } from "react-redux";

import "./first.css";

const First = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(increment());
  };

  return (
    <>
      <Button onClick={onClick}>Primary Button</Button>
    </>
  );
};

export default First;
