import React from "react";

const ChiaDetail = ({ item, m }) => {
  return (
    <>
      <tr key={`${item.b}_1`}>
        <th itemScope="row">{item.b}</th>
        <td>{m}</td>
        <td>{item.Al}</td>
        <td>{item.Ql.substring(0, item.Ql.length - 1)}_</td>
        <td>shift left A,Q</td>
      </tr>
      <tr key={`${item.b}_2`}>
        <th itemScope="row">&emsp;</th>
        <td>{m}</td>
        <td>{item.Ah}</td>
        <td>{item.Ql.substring(0, item.Ql.length - 1)}_</td>
        <td>A = A - M</td>
      </tr>
      <tr key={`${item.b}_3`}>
        <th itemScope="row">&emsp;</th>
        <td>{m}</td>
        <td>{item.AM}</td>
        <td>{item.QM}</td>
        <td>{item.Q0 === "0" ? "Q[0]=0 And restore A" : "Q[0]=1"}</td>
      </tr>
    </>
  );
};

export default ChiaDetail;
