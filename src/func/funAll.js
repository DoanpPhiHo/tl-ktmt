const sobu1 = (a) => a.split('').map((i) => i === '0' ? '1' : '0').join('')
const sobu2 = (a) => cong('1', Number(a), toString(), true).d
const tru = (a, b, c) => {
    if (!c) {
        a = Number(a).toString(2)
        b = Number(b).toString(2)
    }
    b = '0'.repeat(((parseInt(b.length / 8) + 1) * 8) - b.length) + b
    b = sobu1(b)
    const _cong = cong(a, b, true)
    return { ..._cong, t: '-' }
}
const nhan = (a, b, c) => {
    if (!c) {
        a = Number(a).toString(2)
        b = Number(b).toString(2)
    }
    const cList = b.split('').map((c, i) => c === '1' ? `${a}${'0'.repeat(i)}` : `${'0'.repeat(i + a.length)}`)
    let d = '0'
    for (let i = 0; i < cList.length; i++) {
        const ls = cong(d, cList[i], true)
        d = ls.d
    }
    return { d, g: cList, t: '*' }
}
const chia = (a, b, c) => {
    if (!c) {
        a = Number(a).toString(2)
        b = Number(b).toString(2)
    }
    const aList = a.split('')
    let g = '0'
    let i = 0;
    let k = ''
    let list = []
    while (i < a.length) {
        g = g + aList[i]
        i++
        if (parseInt(g, 2) < parseInt(b, 2)) {
            k = k + '0'
        }
        else {
            const ls = tru(g, b, true)
            g = sobu2(ls.d)
            k = k + '1'
        }
        list.push({ g, i, k })
    }
    return { d: k, g: list, t: ':', l: g }
}

const heSo = {
    he10: 'Hệ số 10',
    he2: 'Hệ số 2'
}

const phepCong = {
    a: '00',
    b: '01',
    c: '10',
    d: '11',
}

const s = ({ a = '0', b = '0', c = true }) => [a, b].join('') === phepCong.a ?
    { e: c, f: false } : [a, b].join('') === phepCong.b
        || [a, b].join('') === phepCong.c ? { e: !c, f: c } : { e: c, f: !c }

const formatBin = ({ a = '0', b = '0' }) => {
    const i = [2, 3, 4, 5, 6, 7].filter(c => c ** 2 >= a.length && c ** 2 >= b.length)[0]
    return { a: '0'.repeat(i ** 2 - a.length) + a, b: '0'.repeat(i ** 2 - b.length) + b }
}


const cong = ({ a = '', b = '', c = heSo.he10 }) => {
    let a10 = (c !== heSo.he10 ? parseInt(a, 2) : a)
    let b10 = (c !== heSo.he10 ? parseInt(b, 2) : b)
    let a2 = (c === heSo.he10 ? Number(a).toString(2) : a)
    let b2 = (c === heSo.he10 ? Number(b).toString(2) : b)
    let k = false
    const { a: af, b: bf } = formatBin({ a: a2, b: b2 })
    const d = af.split('').reverse().map((it, ix) => {
        const l = s({
            a: it,
            b: bf.split('').reverse()[ix],
            c: k
        })
        k = l.f
        return l.e ? '1' : '0'
    }).reverse().join('')
    console.log((k ? '1' : '0') + d, parseInt((k ? '1' : '0') + d, 2));
    return { a10, b10, a2, b2, k: k ? '1' : '0', d }
}

export { cong, tru, sobu2, nhan, chia, heSo }