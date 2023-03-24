function task2_5() {
    const a = [100, 54, 21, 13, -5, -2, 0, 10, 14];
    const r = 11;
    let s = 100000;
    let b = [];

    for(let i = 0; i < a.length; i++) {
        if(a[i] + a[i + 1] < s) {
            s = a[i] + a[i + 1];
            b = [];
            b[i] = a[i];
            b[i + 1] = a[i + 1];
        }
    }

    console.log(b);
}