import { counterActions } from "./slice";
import { useSelector, useDispatch } from "react-redux";

export const ReduxDemo = () => {

  const count = useSelector((state) => {
    return state.counter.count;
  });
  const dispatch = useDispatch();
  const { incBy1, decby1 } = counterActions;
  return (
    <>
      <button onClick={() => dispatch(incBy1(100))}>+</button>
      <div>{count}</div>
      <button onClick={() => dispatch(decby1())}>-</button>
    </>
  );
};
