import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "./reducers";

// whenever we want to access any state inside the component we can use the useTypedSelector.

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
