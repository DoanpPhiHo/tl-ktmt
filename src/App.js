import "./App.css";
import { useState } from "react";
import { cong, heSo, tru } from "./func/funAll";
import TongQuat from "./components/TongQuat";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState(heSo.he10);
  const [d, setD] = useState();
  if (d) console.table(d);
  return (
    <div className="App">
      <input value={a} onChange={(e) => setA((c) => (c = e.target.value))} />
      <input value={b} onChange={(e) => setB((c) => (c = e.target.value))} />
      <button
        className={c !== heSo.he10 ? `btn btn-primary` : `btn btn-success`}
        style={{ margin: 10 }}
        onClick={() =>
          setC((c) => (c = c === heSo.he10 ? heSo.he2 : heSo.he10))
        }
      >
        {c}
      </button>
      <button
        className="btn btn-primary"
        style={{ margin: 10 }}
        onClick={() => setD((g) => (g = cong({ a, b, c })))}
      >
        Cộng
      </button>
      <button
        className="btn btn-primary"
        style={{ margin: 10 }}
        onClick={() => setD((g) => (g = tru({ a, b, c })))}
      >
        Trừ
      </button>
      {/* <button
        className="btn btn-primary"
        style={{ margin: 10 }}
        onClick={() => setD((g) => (g = nhan({ a, b, c })))}
      >
        Nhan
      </button>
      <button
        className="btn btn-primary"
        style={{ margin: 10 }}
        onClick={() => setD((g) => (g = chia({ a, b, c })))}
      >
        Chia
      </button> */}
      {b && d && <TongQuat m={b} value={d} />}
    </div>
  );
}

export default App;
