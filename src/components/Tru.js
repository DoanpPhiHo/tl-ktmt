import React from "react";

const Tru = ({ value }) => {
  console.log(value);
  return (
    <div className="card">
      <div className="card-body">
        {value && value.d && <div>KQ: {value.d}</div>}
        <table className="table">
          {value && (
            <thead key="haha">
              <tr key="hehe">
                <th itemScope="col">Cột</th>
                <th>&emsp;</th>
                {
                  value &&
                  value.karray &&
                  value.karray.map((_, i) =>
                    <th key={"buoc" + i} itemScope="col">
                      {value.karray.length - i}
                    </th>
                  )
                }
              </tr>
            </thead>
          )}
          <tbody>
            <tr key="hehe">
              <td itemScope="col">bit borrow</td>
              <td>&emsp;</td>
              {
                value &&
                value.karray &&
                value.karray.map((item, i) =>
                  <td key={"bit" + i} itemScope="col">
                    {item}
                  </td>
                )
              }
            </tr>
            <tr>
              <td>A</td>
              <td>&emsp;</td>
              {value &&
                value.af &&
                value.af
                  .split("")
                  .map((item, i) => <td key={"cong_" + i}>{item}</td>)}
            </tr>
            <tr>
              <td>B<sub>bù 1</sub></td>
              <td>&emsp;</td>
              {value &&
                value.bbu1 &&
                value.bbu1
                  .split("")
                  .map((item, i) => <td key={"cong_" + i}>{item}</td>)}
            </tr>
            <tr>
              <td>KQ</td>
              {value && value.k && value.k !== "1" && <td>&emsp;</td>}
              {value && value.k && value.k === "1" && (
                <td>
                  <div
                    style={{
                      backgroundColor: "#ff0000",
                      color: "#ffff00",
                      textAlign: "center",
                    }}
                  >
                    {value.k}
                  </div>
                </td>
              )}
              {value &&
                value.d &&
                value.d
                  .split("")
                  .map((item, i) => <td key={"cong_" + i}>{item}</td>)}
            </tr>
          </tbody>
        </table>
        <div>Bước thực hiện chi tiết: </div>
        <table className="table table-striped">
          {value && (
            <thead key="haha">
              <tr key="hehe">
                <th itemScope="col">Bước</th>
                <th>Cột</th>
                <th>Phép toán</th>
              </tr>
            </thead>
          )}
          <tbody>
            <tr key='cont0'>
              <td>1</td>
              <td>&emsp;</td>
              <td>{value && value.b2 && value.bbu1 ? `${value.b2} => ${value.bbu1} (Chuyển số bù 1 của số nhị phân bị trừ)` : ''}</td>
            </tr>
            {
              value && value.content && value.content.map((e, i) => <tr key={'cont' + i + 1}>
                <td>{i + 2}</td>
                <td>{value.content.length - i}</td>
                <td>{e}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tru;
