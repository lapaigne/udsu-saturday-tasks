function num1() {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const c = [];
    for(let i = 0; i < a.length; i++){
        if (i % 2 != 0) {
            c[i] = a[i];
        } else {
            c[i] = b[i];
        }
    }

    console.log(c);
}

function num2() {
    const a = [1, 23, 13, 45, 5, 67, 27, 1, 92, 10];
    let s = 0;
    let average = 0;
    
    for(let i = 0; i < a.length; i++) {
        average += a[i];
        if (i == 9) average /= 10;
    }
    
    for(let i = 0; i < a.length; i++) {
        if (a[i] > average) s++;
    }
    
    console.log(s*100/10);
}

function num3() {
    const num = prompt("Введите число:  ");
    return parseInt(num, 2).toString(16);
}

function num4() {
    const n = 3;
    const m = 4;
    let array = [];
    let s = 0;
    
    for (let i = 0; i < n; i++){
        array.push([]);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let r = Math.round((2*Math.random()-1)*10);
            array[i][j] = r;
        }
    }
    
    console.log(array);
    
    const num = prompt("Введите число:  ");
    
    for (let i = 0; i < n; i++){
        for (let j = 0; j < m; j++) {
            if (array[i][j] == num) s++;
        }
    }
    
    console.log(s);
}

function num5() {
    let array = [];
    let newArray = [];
    let n = 5;

    for (let i = 0; i < 5; i++){
        array.push([]);
        newArray.push([]);
    }

    for (let i = 0; i < n; i++) {       
        for (let j = 0; j < n; j++) {   
            let r = Math.round((2*Math.random()-1)*10);
            array[i][j] = r;
        }
    }

    console.log(array);
    let max = 0;

    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++) {
            if (Math.abs(array[i][j]) > max) max = Math.abs(array[i][j]);
        }
    }
    console.log(max);
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++) {
            newArray[i][j] = Math.round(array[i][j] / max);
        }
    }

    console.log(newArray);
}

function num6() {
    let n = 4;
    let m = 6;
    let array = [];

    for (let i = 0; i < n; i++){
        array.push([]);
    }

    let x = 0;
    let y = 0;

    let col = 0;
    let row = 0;
    let current = 0;

    while (row < n)
    {
        x = col;
        y = row;
        while ((y < n) && (x >= 0))
        {
            array[y][x] = current;
            y += 1;
            x -= 1;
            current += 1;
        }

        if (col < (m - 1))
            col += 1;
        else
            row += 1;
    }

    console.log(array);
}