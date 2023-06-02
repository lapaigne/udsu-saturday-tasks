class Lab3 {
    rndNum(span = 20) {
        return Math.round((Math.random()) * span)
    }
    first(n) {
        const a = [];
        const b = []
        for (let i = 0; i < n; i++) {
            a[i] = this.rndNum()
        }
        for (let i = 0; i < n; i++) {
            b.push(a[i])
            if (a[i] % 2 == 0) {
                // console.log('repushed')
                b.push(a[i])
            }
        }
        console.log(a, b)
    }

    moveFor({ steps, x, y, direction, array, data }) {
        if (direction % 4 == 0) {
            for (let i = x; i < x + steps; i++) {
                // console.log(i, y)
                array.push(data[y][i])
            }
            return { x: x + steps - 1, y: y + 1 }
        }
        else if (direction % 4 == 1) {
            for (let i = y; i < y + steps; i++) {
                // console.log(i, x)
                array.push(data[i][x])
            }
            return { x: x - 1, y: y + steps - 1 }
        }
        else if (direction % 4 == 2) {
            for (let i = x; i > x - steps; i--) {
                // console.log(y, i)
                array.push(data[y][i])
            }
            return { x: x - steps + 1, y: y - 1 }
        }
        else if (direction % 4 == 3) {
            for (let i = y; i > y - steps; i--) {
                // console.log(i, x)
                array.push(data[i][x])
            }
            return { x: x + 1, y: y - steps + 1 }
        }
    }
    second(n) {
        let x = 0
        let y = 0
        let direction = 0
        let steps = n

        const a = []
        const b = []
        for (let i = 0; i < n; i++) {
            a[i] = []
        }
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                a[i][j] = this.rndNum()
            }
        }
        while (true) {
            const out = this.moveFor({ steps, x, y, direction, data: a, array: b })
            x = out.x
            y = out.y
            if (direction % 2 == 0) {
                steps--;
            }
            direction++
            if (steps == 0) {
                break
            }
        }
        console.log(a, b);
    }
    third(m, n) {
        const a = []
        const b = []
        for (let i = 0; i < m; i++) {
            a[i] = []
            b[i] = []
        }
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                a[i][j] = this.rndNum()
            }
        }
        for (let j = 0; j < n; j++) {
            let max = Number.MIN_VALUE;
            let min = Number.MAX_VALUE;
            let iMax = -1;
            let iMin = -1;
            for (let i = 0; i < m; i++) {
                b[i][j] = (a[i][j])
                if (a[i][j] > max) {
                    iMax = i
                    max = a[i][j]
                }
                if (a[i][j] < min) {
                    iMin = i
                    min = a[i][j]
                }
            }
            b[iMax][j] = min
            b[iMin][j] = max
        }
        console.log(a, b)
    }
    fourth() {
        const str = prompt();
        let count = 0
        str.split('').forEach(letter => letter == letter.toUpperCase() && letter != letter.toLowerCase() ? count++ : null)
        console.log(str, count);
    }
    fifth() {
        const str = prompt();
        const s = str.split('').map(letter => letter == letter.toUpperCase() ? letter.toLowerCase() : (letter == letter.toLowerCase() ? letter.toUpperCase() : letter)).join('')
        console.log(str, s)
    }
}