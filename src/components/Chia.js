import React from "react";
import ChiaDetail from "./ChiaDetail";

const Chia = ({ value, m }) => {
  return (
    <table className="table table-striped">
      {value && (
        <thead key='haha'>
          <tr key='hehe'>
            <th itemScope="col">n</th>
            <th itemScope="col">M</th>
            <th itemScope="col">A</th>
            <th itemScope="col">Q</th>
            <th itemScope="col">Operation</th>
          </tr>
        </thead>
      )}
      <tbody>
        {value && m && value.map((c) => ChiaDetail({ item: c, m: m }))}
      </tbody>
    </table>
  );
};

export default Chia;
