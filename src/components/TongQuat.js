import React from "react";
import Chia from "./Chia";
import Cong from "./Cong";
import Nhan from "./Nhan";
import Tru from "./Tru";

const TongQuat = ({ value, m }) => {
  return (
    <div>
      {value && value.a10 && (
        <div style={{ fontSize: 20, fontWeight: "bold", padding: 3 }}>
          M<sub>10</sub> : {value.a10}
        </div>
      )}
      {value && value.a2 && (
        <div style={{ fontSize: 20, fontWeight: "bold", padding: 3 }}>
          M<sub>2</sub> : {value.a2}
        </div>
      )}
      {value && value.b10 && (
        <div style={{ fontSize: 20, fontWeight: "bold", padding: 3 }}>
          Q<sub>10</sub> : {value.b10}
        </div>
      )}
      {value && value.a2 && (
        <div style={{ fontSize: 20, fontWeight: "bold", padding: 3 }}>
          Q<sub>2</sub> : {value.a2}
        </div>
      )}
      <center>
        {value &&
          value.t === ":" &&
          Chia({ value: value.buocThucHien, m: Number(m).toString(2) })}
        {value && value.t === "+" && Cong({ value: value })}
        {value && value.t === "-" && Tru({ value: value })}
        {value && value.t === "*" && Nhan({ value: value })}
      </center>
    </div>
  );
};

export default TongQuat;
