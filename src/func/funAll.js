const cong = (a, b, c) => {
    if (!c) {
        a = Number(a).toString(2)
        b = Number(b).toString(2)
    }
    if (a.length < b.length) {
        const cList = a
        a = b
        b = cList
    }
    if (a.length === b.length) {
        a = '0' + a
    }
    let aList = String(a).split('')
    let bList = String(b).split('')
    let ischeck = 0
    let d = ''
    let g = []
    for (let i = aList.length - 1; i >= 0; i--) {
        const e = s(aList[i], bList[bList.length - (aList.length - i)] ?
            bList[bList.length - (aList.length - i)] : 0, ischeck)
        d = e.a + d
        ischeck = e.b
        g.push({ d, ischeck })
    }
    return { d, g, t: '+' }
}
const s = (a, b, c) => {
    if (Number(a) + Number(b) + Number(c) === 3)
        return { a: 1, b: 1 }
    if (Number(a) + Number(b) + Number(c) === 2)
        return { a: 0, b: 1 }
    return { a: Number(a) + Number(b) + Number(c), b: 0 }
}
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

export { cong, tru, sobu2, nhan, chia }