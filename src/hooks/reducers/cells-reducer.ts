import { produce } from "immer";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Cell, CellsState } from "../../types";

// Initial state of the cells
const initialState: CellsState = {
  loading: false,
  error: null,
  order: [], // Stores the order of cell IDs
  data: {}, // Object where each key is a cell ID, and the value is the cell data
};

// Reducer function using Immer to handle immutable state updates
const reducer = produce((state: CellsState = initialState, action: Action) => {
  switch (action.type) {
    // Handles updating the content of a specific cell
    case ActionType.UPDATE_CELL: {
      const { id, content } = action.payload;

      // Update the content of the cell with the given ID
      state.data[id].content = content;
      return state;
    }

    // Handles deleting a cell
    case ActionType.DELETE_CELL:
      // Remove the cell from the data object
      delete state.data[action.payload];

      // Remove the cell ID from the order array
      state.order = state.order.filter((id) => id !== action.payload);

      return state;

    // Handles moving a cell either up or down in the order array
    case ActionType.MOVE_CELL: {
      const { direction } = action.payload;

      // Find the index of the cell to be moved
      const index = state.order.findIndex((id) => id === action.payload.id);

      // Calculate the new target index based on the move direction
      const targetIndex = direction === "up" ? index - 1 : index + 1;

      // Ensure the new index is within valid bounds
      if (targetIndex < 0 || targetIndex > state.order.length - 1) {
        return state;
      }

      // Swap the current cell with the cell in the target position
      state.order[index] = state.order[targetIndex];
      state.order[targetIndex] = action.payload.id;

      return state;
    }

    // Handles inserting a new cell before an existing one
    case ActionType.INSERT_CELL_BEFORE: {
      // Create a new cell object with a random ID
      const cell: Cell = {
        content: "",
        type: action.payload.type, // Type of the new cell (code, text, etc.)
        id: randomId(), // Generate a random ID for the new cell
      };

      // Add the new cell to the data object
      state.data[cell.id] = cell;

      // Find the index where the new cell should be inserted
      const foundIndex = state.order.findIndex(
        (id) => id === action.payload.id
      );

      // If the specified cell ID was not found, append the new cell at the end
      if (foundIndex < 0) {
        state.order.push(cell.id);
      } else {
        // Insert the new cell before the found index
        state.order.splice(foundIndex, 0, cell.id);
      }

      return state;
    }

    // Default case to return the current state if the action type doesn't match
    default:
      return state;
  }
});

// Helper function to generate a random 5-character string as an ID
const randomId = () => {
  return Math.random().toString(36).substr(2, 5);
};

export default reducer;
