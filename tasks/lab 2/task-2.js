function task2_2({ a, b }) {
    const difference = b - a;

    for (let i = 0; i <= difference; i++) {
        for (let j = 0; j <= i; j++) {
            console.log(a + i)
        }
    }
}
