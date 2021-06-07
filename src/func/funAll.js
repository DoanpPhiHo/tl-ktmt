const sobu1 = (a) =>
  a
    .split("")
    .map((i) => (i === "0" ? "1" : "0"))
    .join("");
const sobu2 = (a) => cong({ a: "1", b: a, c: heSo.he2 }).d;
const nhan = ({ a = "", b = "", c = heSo.he10 }) => {
  let a10 = c !== heSo.he10 ? parseInt(a, 2) : a;
  let b10 = c !== heSo.he10 ? parseInt(b, 2) : b;
  let a2 = c === heSo.he10 ? Number(a).toString(2) : a;
  let b2 = c === heSo.he10 ? Number(b).toString(2) : b;
  const cList = b2
    .split("")
    .map((c, i) =>
      c === "1" ? `${a2}${"0".repeat(i)}` : `${"0".repeat(i + a2.length)}`
    );
  let d = "0";
  for (let i = 0; i < cList.length; i++) {
    const { d: df } = cong({ a: d, b: cList[i], c: heSo.he2 });
    d = df;
  }
  return { a10, b10, a2, b2, d, g: cList, t: "*" };
};
const chia = ({ a = "", b = "", c = heSo.he10 }) => {
  let a10 = c !== heSo.he10 ? parseInt(a, 2) : a;
  let b10 = c !== heSo.he10 ? parseInt(b, 2) : b;
  let a2 = c === heSo.he10 ? Number(a).toString(2) : a;
  let b2 = c === heSo.he10 ? Number(b).toString(2) : b;
  const aList = a2.split("");
  let g = "0";
  let i = 0;
  let k = "";
  let list = [];
  while (i < a2.length) {
    g = g + aList[i];
    i++;
    if (parseInt(g, 2) < parseInt(b, 2)) {
      k = k + "0";
    } else {
      const ls = tru(g, b, true);
      g = sobu2(ls.d);
      k = k + "1";
    }
    list.push({ g, i, k });
  }
  return { d: k, g: list, t: ":", l: g };
};

const heSo = {
  he10: "Hệ số 10",
  he2: "Hệ số 2",
};

const phepCong = {
  a: "00",
  b: "01",
  c: "10",
  d: "11",
};

const s = ({ a = "0", b = "0", c = true }) =>
  [a, b].join("") === phepCong.a
    ? { e: c, f: false }
    : [a, b].join("") === phepCong.b || [a, b].join("") === phepCong.c
    ? { e: !c, f: c }
    : { e: c, f: true };

const formatBin = ({ a = "0", b = "0" }) => {
  const i = [2, 3, 4, 5, 6, 7].filter(
    (c) => c ** 2 >= a.length && c ** 2 >= b.length
  )[0];
  return {
    a: "0".repeat(i ** 2 - a.length) + a,
    b: "0".repeat(i ** 2 - b.length) + b,
  };
};

const cong = ({ a = "", b = "", c = heSo.he10 }) => {
  let a10 = c !== heSo.he10 ? parseInt(a, 2) : a;
  let b10 = c !== heSo.he10 ? parseInt(b, 2) : b;
  let a2 = c === heSo.he10 ? Number(a).toString(2) : a;
  let b2 = c === heSo.he10 ? Number(b).toString(2) : b;
  let k = false;
  const { a: af, b: bf } = formatBin({ a: a2, b: b2 });
  const d = af
    .split("")
    .reverse()
    .map((it, ix) => {
      const { e, f } = s({
        a: it,
        b: bf.split("").reverse()[ix],
        c: k,
      });
      k = f;
      return e ? "1" : "0";
    })
    .reverse()
    .join("");
  console.log((k ? "1" : "0") + d, parseInt((k ? "1" : "0") + d, 2));
  return { a10, b10, a2, b2, k: k ? "1" : "0", d };
};

const tru = ({ a = "", b = "", c = heSo.he10 }) => {
  let a10 = c !== heSo.he10 ? parseInt(a, 2) : a;
  let b10 = c !== heSo.he10 ? parseInt(b, 2) : b;
  let a2 = c === heSo.he10 ? Number(a).toString(2) : a;
  let b2 = c === heSo.he10 ? Number(b).toString(2) : b;
  const { a: af, b: bf } = formatBin({ a: a2, b: b2 });
  b = sobu2(sobu1(bf));
  const { d, k } = cong({ a: af, b: b, c: heSo.he2 });
  return { a10, b10, a2, b2, k, d, bbu1: b };
};

export { cong, tru, sobu2, nhan, chia, heSo };
