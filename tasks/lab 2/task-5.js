function task2_5() {
    const a = [100, 54, 21, 13, -5, -2, 0, 10, 14];
    const r = 11;
    let s = Number.MAX_VALUE;
    let b = [];

    for (let i = 0; i < a.length - 1; i++) {
        const dif = Math.abs((a[i] + a[i + 1]) - r)
        if (dif < s) {
            s = dif;
            b = [a[i], a[i + 1]]
        }
    }

    console.log(b);
}