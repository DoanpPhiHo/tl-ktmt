import React from "react";

const Cong = ({ value, m }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <table className="table table-striped">
          {value && (
            <thead key="haha">
              <tr key="hehe">
                <th itemScope="col">bit borrow</th>
                {value &&
                  value.karray &&
                  value.karray.map((item, i) => (
                    <th key={"bit" + i} itemScope="col">
                      {item}
                    </th>
                  ))}
                <th>&emsp;</th>
              </tr>
            </thead>
          )}
          <tbody>
            <tr>
              <td>A</td>
              <td>&emsp;</td>
              {value &&
                value.a2 &&
                value.a2
                  .split("")
                  .map((item, i) => <td key={"cong_" + i}>{item}</td>)}
            </tr>
            <tr>
              <td>B</td>
              <td>&emsp;</td>
              {value &&
                value.b2 &&
                value.b2
                  .split("")
                  .map((item, i) => <td key={"cong_" + i}>{item}</td>)}
            </tr>
            <tr>
              <td>KQ</td>
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
      </div>
    </div>
  );
};

export default Cong;
