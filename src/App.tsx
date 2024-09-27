import "bulmaswatch/superhero/bulmaswatch.min.css";
import CodeCell from "./components/code-cell";
import { Provider } from "react-redux";
import { store } from "./hooks";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CodeCell />
      </div>
    </Provider>
  );
};

export default App;
