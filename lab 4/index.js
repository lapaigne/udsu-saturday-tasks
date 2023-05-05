function task4_2() {
    const year = 1826;
    let s = 0;
    let n = 0;
    let money = 24;
    for(let i = 0; i < 2023 - year; i++) {
        s = money * 6 / 100
        money += s;
        money = Math.round(money);
        n++;
        console.log(money);
    }
    console.log(money);
}
function task4_3() {
    let num = prompt("Введите число:  ");
    let n = num;
    let orig = Number(num);
    let result = 0;
    for(let i = 0; i < n.length; i++) {
        result = result * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    const s = orig + result;
    console.log(s);
}
function task4_4() {
    let ok = 0;
    let s = 0;
    function rnd() {
        return Math.round(Math.random() * (9 - 1) + 1);
    }
    for(let i = 0; i < 10; i++) {
        num1 = rnd();
        num2 = rnd();
        s = num1 * num2;
        let num = prompt(`Солько будет ${num1} * ${num2}?`);
        console.log(s);
        console.log(num);
        if (num == s) {
            console.log('Верно')
            ok++;
        } else {
            console.log('не верно')
        }
    }
    if (ok === 10) {
        console.log('Оценка "Отлично"');
    } else if (ok === 9 || ok === 8) {
        console.log('Оценка "Хорошо"');
    } else if (ok === 7 || ok === 6) {
        console.log('Оценка "Удовлетворительно"');
    } else {
        console.log('Оценка "Плохо"');
    }
}
function task4_5() {
    const name = ['Селиванова', 'Фокина', 'Грачев', 'Лукина', 'Карасев', 'Павлов', 'Новикова', 'Клюев', 'Чернов', 'Кириллова'];
    const time = ['13.5', '12', '20.3', '11.4', '17.5', '16.7', '14.2', '16.7', '13.1', '12.5'];
    let s;
    let t;
    console.log(name, time);
    for(let i =0; i < 10; i ++) {
        for(let j =0; j < 10; j ++) {
            if (time[j] > time[j + 1]) {
                s = name[j];
                name[j] = name[j + 1];
                name[j + 1] = s;
                t = time[j];
                time[j] = time[j + 1];
                time[j + 1] = t;
            }
        }
    }
    for(let i = 0; i < 4; i++) {
        console.log(name[i], '-', time[i]);
    }
}