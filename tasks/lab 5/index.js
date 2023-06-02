class Lab5 {
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
        let text = input.split(/\_|\.|\,|\;|\:|\\|\!|\/|\?/g).filter(str => str !== '');
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

    second() {
        // Массив с буквами английского алфавита
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Размеры кроссворда
        const rows = 5;
        const cols = 5;

        // Кроссворд
        const crossword = [
        ['E', 'A', 'R', 'T', 'H'],
        ['A', 'R', 'T', 'I', 'S'],
        ['B', 'A', 'L', 'L', 'S'],
        ['R', 'I', 'C', 'E', 'S'],
        ['S', 'T', 'A', 'R', 'T']
        ];

        // Находим все слова в кроссворде
        const words = [];
        // Находим слова по горизонтали
        for (let i = 0; i < rows; i++) {
        let word = '';
        for (let j = 0; j < cols; j++) {
            if (crossword[i][j] !== '') {
            word += crossword[i][j];
            } else {
            if (word.length > 1) {
                words.push(word);
            }
            word = '';
            }
        }
        if (word.length > 1) {
            words.push(word);
        }
        }
        // Находим слова по вертикали
        for (let j = 0; j < cols; j++) {
        let word = '';
        for (let i = 0; i < rows; i++) {
            if (crossword[i][j] !== '') {
            word += crossword[i][j];
            } else {
            if (word.length > 1) {
                words.push(word);
            }
            word = '';
            }
        }
        if (word.length > 1) {
            words.push(word);
        }
        }

        // Считаем количество слов в кроссворде
        const wordCount = words.length;

        // Находим все буквы, которые находятся на пересечении слов кроссворда
        const intersectingLetters = [];
        for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (crossword[i][j] === '') {
            continue;
            }
            // Проверяем, что в данной клетке находится пересечение слов
            let intersecting = false;
            // Проверяем горизонтальное слово
            if (j > 0 && crossword[i][j - 1] !== '') {
            intersecting = true;
            }
            if (j < cols - 1 && crossword[i][j + 1] !== '') {
            intersecting = true;
            }
            // Проверяем вертикальное слово
            if (i > 0 && crossword[i - 1][j] !== '') {
            intersecting = true;
            }
            if (i < rows - 1 && crossword[i + 1][j] !== '') {
            intersecting = true;
            }
            if (intersecting) {
            intersectingLetters.push(crossword[i][j]);
            }
        }
        }

        // Выводим результаты
        console.log('Слова в кроссворде:', words);
        console.log('Количество слов в кроссворде:', wordCount);
        console.log('Буквы на пересечении слов кроссворда:', [...new Set(intersectingLetters)].join(', '));
    }

    third() {
        // Задаем матрицу
        const matrix = [
            [1, 2, 1, 5, 1, 4, 3],
            [2, 1, 2, 3, 2, 1, 5],
            [1, 4, 3, 2, 1, 2, 1],
            [3, 5, 4, 1, 3, 2, 1],
            [1, 2, 1, 5, 1, 4, 3]
        ];
        
        // Функция для проверки эквивалентности двух строк
        function isEquivalent(array1, array2) {
            // Сравниваем множества элементов в двух строках
            const set1 = new Set(array1);
            const set2 = new Set(array2);
            return set1.size === set2.size && [...set1].every(value => set2.has(value));
        }
        
        // Находим количество строк, эквивалентных первой строке
        const firstRow = matrix[0];
        let count = 0;
        for (let i = 0; i < matrix.length; i++) {
            if (isEquivalent(firstRow, matrix[i])) {
            count++;
            }
        }
        
        // Выводим результат
        console.log(`Количество строк матрицы, эквивалентных первой строке: ${count}`);
    }

    fourth() {
        // получаем ссылки на textarea
        const inputTextarea = document.getElementById('input');
        const outputTextarea = document.getElementById('output');

        // регулярное выражение для поиска слов
        const wordRegex = /[a-zа-яё]+/gi;

        // регулярное выражение для поиска разделителей
        const separatorRegex = /[_.,;:!\?\/]/g;

        // функция для подсчета количества гласных и согласных букв в слове
        function countVowelsAndConsonants(word) {
            const vowels = ['a', 'e', 'i', 'o', 'u', 'а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
            let numVowels = 0;
            let numConsonants = 0;
            for (let i = 0; i < word.length; i++) {
            const char = word[i].toLowerCase();
            if (vowels.includes(char)) {
                numVowels++;
            } else if (/[a-zа-яё]/.test(char)) {
                numConsonants++;
            }
            }
            return { numVowels, numConsonants };
        }

        // обработчик события ввода в textarea
        inputTextarea.addEventListener('input', () => {
            const input = inputTextarea.value;

            // разбиваем текст на строки
            const lines = input.split('\n');

            // проходим по каждой строке и ищем слова
            const filteredLines = lines.map(line => {
            const words = line.split(separatorRegex);
            return words.filter(word => {
                const { numVowels, numConsonants } = countVowelsAndConsonants(word);
                return (
                numConsonants > numVowels &&
                word.match(wordRegex) !== null &&
                word.length > 1
                );
            });
            });

            // записываем отфильтрованные слова в выходную textarea
            const output = filteredLines
            .map(line => line.join('\n'))
            .join('\n')
            .trim();

            outputTextarea.value = output;
        });
    }

    fifth() {
        const textarea = document.querySelector('textarea');
        const text = textarea.value;

        // Разделяем текст на слова и удаляем все лишние пробелы
        const words = text.split(/[_.;:!,?\s/]+/).filter(word => word !== '');

        // Переводим все слова в нижний регистр для упрощения проверки
        const lowerCaseWords = words.map(word => word.toLowerCase());

        // Считаем количество слов, в которых хотя бы один символ встречается более одного раза
        let count = 0;
        for (let i = 0; i < words.length; i++) {
        const uniqueChars = [...new Set(lowerCaseWords[i])]; // получаем уникальные символы слова
        if (uniqueChars.length < lowerCaseWords[i].length) { // если количество уникальных символов меньше длины слова, значит есть символ, повторяющийся более одного раза
            count++;
        }
        }

        // Выводим результаты в textarea
        const output = document.getElementById('output');
        output.value = `Слова, разделенные символами разделителями: ${words.join('\n')}\nКоличество слов, в которых хотя бы один символ встречается более одного раза: ${count}`;
        document.body.appendChild(output);
    }
}