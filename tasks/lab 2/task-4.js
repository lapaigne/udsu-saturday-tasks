function task2_4() {
    const n = [100, 54, 21, 13, -5, -2, 0, 10, 14]
    const arr = []
    n.forEach((el, index) => arr.push({ val: el, index }))
    arr.sort((a, b) => a.val - b.val)
    let indices = []
    let min = Number.MAX_VALUE
    for (let i = 1; i < arr.length; i++) {
        const d = Math.abs(arr[i].val - arr[i - 1].val)
        if (d < min) {
            min = d
            indices = [arr[i].index, arr[i - 1].index]
        }
    }
    console.log(indices.sort())
}