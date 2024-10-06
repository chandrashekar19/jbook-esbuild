import React from "react";
import { useActions } from "../hooks/use-actions";
import { ArrowDown, ArrowUp, Delete } from "lucide-react";

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();
  return (
    <div className="action-bar space-x-3 p-1">
      <button className="" onClick={() => moveCell(id, "up")}>
        <ArrowUp className="bg-orange-500 rounded-md" />
      </button>
      <button className="" onClick={() => moveCell(id, "down")}>
        <ArrowDown className="bg-orange-500 rounded-md" />
      </button>
      <button className="" onClick={() => deleteCell(id)}>
        <Delete className="bg-orange-500 rounded-md" />
      </button>
    </div>
  );
};

export default ActionBar;
