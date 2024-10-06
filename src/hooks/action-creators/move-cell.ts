import { ActionType } from "../action-types";
import { Direction, MoveCellAction } from "../actions";

export const moveCell = (id: string, direction: Direction): MoveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direction,
    },
  };
};
