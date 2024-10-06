import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from ".";
import { useMemo } from "react";

export const useActions = () => {
  const dispatch = useDispatch();

  // useMemo is almost kind of like a useState and useEffect put together whenever dispatch or something inside the array  changes React is going to re run that function .

  return useMemo(() => {
    return bindActionCreators(actionCreators, dispatch);
  }, [dispatch]);
};
