import { useState, useEffect, useRef } from "react";
import * as esbuild from "esbuild-wasm";

const App = () => {
  const ref = useRef<any>();
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
    });
    // console.log("SERVICE", service);
  };

  useEffect(() => {
    startService();
  }, []);

  const handleClick = async () => {
    if (!ref.current) {
      return;
    }
    const result = await ref.current.transform(input, {
      loader: "jsx",
      target: "es2015",
    }); // it will only do the transpiling not the bundling .

    setCode(result.code);
    // console.log("Res", result);
  };

  // to make sure we only try to  call startService  one single time when our component is first rendered to the screen.
  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={handleClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};

export default App;
