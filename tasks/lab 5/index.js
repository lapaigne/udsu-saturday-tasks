class Lab5 {
    constructor() {
        this.breakpoints = /\_|\.|\,|\;|\:|\\|\!|\/|\?|\ /g;
        this.vowels = /[aeiouаеёиоуыэюя]/gi;
    }

    isLatinOnly(text) {
        return /^[A-Za-z]*$/.test(text);
    }

    sortByLength(array) {
        array.sort((a, b) => {
            return b.length - a.length;
        });
    }

    first() {
        const input = prompt("текст: ");
        console.log(input)
        let text = input.split(/\_|\.|\,|\;|\:|\\|\!|\/|\?|\ /g).filter(str => str !== '');
        console.log(text);
        this.sortByLength(text);
        console.log(text[0]);
        const noVowels = text[0].replace(/[aeiouаеёиоуыэюя]/gi, '');
        console.log(noVowels);
        const latins = [];
        text.forEach(word => {
            if (this.isLatinOnly(word)) {
                latins.push(word);
            }
        });
        console.log(latins);
    }
    second(){
        
    }
}