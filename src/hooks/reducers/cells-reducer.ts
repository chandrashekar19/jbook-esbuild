import { Action } from "redux";
import { Cell } from "../cell";
import { ActionType } from "../action-types";

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  };
}

const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

const cellsReducer = (
  state: CellsState = initialState,
  action: Action
): CellsState => {
  switch (action.type) {
    case ActionType.INSERT_CELL_BEFORE:
      return state;
    case ActionType.MOVE_CELL:
      return state;
    case ActionType.DELETE_CELL:
      return state;
    case ActionType.UPDATE_CELL:
      return state;
    default:
      return state;
  }
};

export default cellsReducer;
