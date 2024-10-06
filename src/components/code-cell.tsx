import { useEffect } from "react";
import CodeEditor from "./code-editor";
import Preview from "./preview";
import Resizable from "./resizable";
import { Cell } from "../types";
import { useActions } from "../hooks/use-actions";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { Loader } from "lucide-react";
import { useCumulativeCode } from "../hooks/use-cumulative-code";

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles?.[cell.id]);

  const cumulativeCode = useCumulativeCode(cell.id);

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumulativeCode);
      return;
    }

    const timer = setTimeout(async () => {
      createBundle(cell.id, cumulativeCode);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [cell.id, cumulativeCode]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        {!bundle || bundle.loading ? (
          <div className="progress-wrapper">
            <div className="progress-cover">
              <progress className="progress is-small is-primary" max="100">
                <Loader />
              </progress>
            </div>
          </div>
        ) : (
          <Preview code={bundle.code} err={bundle.err} />
        )}
      </div>
    </Resizable>
  );
};

export default CodeCell;
