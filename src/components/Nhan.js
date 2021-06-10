import React from "react";

const Nhan = ({ value, m }) => {
  return (
    <table className="table table-striped">
      {value && (
        <thead key="haha">
          <tr key="a">
            <th itemScope="col">A</th>
            <th itemScope="col">{value && value.a2}</th>
          </tr>
          <tr key="b">
            <th itemScope="col">B</th>
            <th itemScope="col">{value && value.b2}</th>
          </tr>
        </thead>
      )}
      <tbody>
        {value &&
          value.g.map((item, i) => (
            <tr key={"g" + i}>
              <td>&emsp;</td>
              <td>{' '.repeat(value.g.length - item.length) + item}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Nhan;
