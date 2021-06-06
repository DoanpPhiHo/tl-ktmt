import './App.css';
import { useState } from 'react';
import { chia, cong, heSo, nhan, sobu2, tru } from './func/funAll';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState(heSo.he10)
  const [d, setD] = useState()
  if (d) console.log(d)
  return (
    <div className="App">
      <input value={a} onChange={(e) => setA(c => c = e.target.value)} />
      <input value={b} onChange={(e) => setB(c => c = e.target.value)} />
      <button onClick={() => setC(c => c = c === heSo.he10 ? heSo.he2 : heSo.he10)}>{c}</button>
      <button onClick={() => setD(g => g = cong({ a: a, b: b, c: c }))} >Cong</button>
      <button onClick={() => setD(g => g = tru(a, b, c))} >Tru</button>
      <button onClick={() => setD(g => g = nhan(a, b, c))} >Nhan</button>
      <button onClick={() => setD(g => g = chia(a, b, c))} >Chia</button>
      <center>
        <table>
          <thead>
            {
              d && (d.t === '+' || d.t === '-') && <tr key={`index`}>
                <th>A + B</th>
                <th>bit mượn</th>
              </tr>
            }
            {
              d && d.t === '*' && <tr key={`index`}>
                <th>Bước thực hiện</th>
                <th>Giá trị</th>
              </tr>
            }
            {
              d && d.t === ':' && <tr key={`index`}>
                <th>Bước thực hiện</th>
                <th>Số dư</th>
                <th>Giá trị</th>
              </tr>
            }
          </thead>
          <tbody>
            {
              d && (d.t === '+' || d.t === '-') && d.g.map((item, i) => <tr key={`+${i}`}>
                <td>{item.d}</td>
                <td>{item.ischeck}</td>
              </tr>)
            }
            {
              d && (d.t === '+' || d.t === '-') && <tr key={`+${d.d}`}>
                <td>Đáp án:</td>
                <td>{d.d}</td>
              </tr>
            }
            {
              d && d.t === '-' && <tr key={`--${d.d}`}>
                <td>Số bù 2:</td>
                <td>{sobu2(d.d)}</td>
              </tr>
            }
            {
              d && d.t === '*' && d.g.map((item, i) => <tr key={`+${i}`}>
                <td>Lần {i + 1}</td>
                <td>{item}</td>
              </tr>)
            }
            {
              d && d.t === '*' && <tr key={`+${d.d}`}>
                <td>Đáp án:</td>
                <td>{d.d}</td>
              </tr>
            }
            {
              d && d.t === ':' && d.g.map((item, i) => <tr key={`+${i}`}>
                <td>Lần {i + 1}</td>
                <td>{item.g}</td>
                <td>{item.k}</td>
              </tr>)
            }
            {
              d && d.t === ':' && <tr key={`+${d.d}`}>
                <td>Đáp án:</td>
                <td>{d.l}</td>
                <td>{d.d}</td>
              </tr>
            }
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default App;
