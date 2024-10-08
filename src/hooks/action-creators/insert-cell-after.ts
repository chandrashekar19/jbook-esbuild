import { CellTypes } from "../../types";
import { ActionType } from "../action-types";
import { InsertCellAfterAction } from "../actions";

export const insertCellAfter = (
  id: string | null,
  cellType: CellTypes
): InsertCellAfterAction => {
  return {
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id: id ?? "",
      type: cellType,
    },
  };
};
