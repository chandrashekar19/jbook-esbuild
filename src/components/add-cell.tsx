import { Plus } from "lucide-react";
import { useActions } from "../hooks/use-actions";

interface AddCellProps {
  previousCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ previousCellId, forceVisible }) => {
  const { insertCellAfter } = useActions();

  return (
    <div className={`add-cell ${forceVisible && "force-visible"}`}>
      <div className="divder"></div>
      <button
        className="button"
        onClick={() => insertCellAfter(previousCellId, "code")}
      >
        <Plus />
        Code
      </button>
      <button
        className="button"
        onClick={() => insertCellAfter(previousCellId, "text")}
      >
        Text
        <Plus />
      </button>
    </div>
  );
};

export default AddCell;
