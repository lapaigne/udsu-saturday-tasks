function task3_2(indices) {
    indices.forEach(i => console.log(`F(${i})=${fib(i)}`))
}
function fib(number) {
    let previous = 1;
    let next = 1;
    let sum = previous;
    for (let i = 1; i < number - 1; i++) {
        sum = previous + next
        previous = next
        next = sum
    }
    return sum
}