// ## Example 1 - Базові операції з масивом

// 1. Створіть масив `genres` з елементами "Jazz" та "Blues".
// 2. Додайте «Рок-н-рол» до кінця.
// 3. Виведіть у консоль перший елемент масиву.
// 4. Виведіть останній елемент масиву в консоль. Код повинен працювати для масиву
//    довільної довжини.
// 5. Видаліть перший елемент та виведіть його в консоль.
// 6. Вставте «Country» та «Reggae» на початок масиву.

// ```js
// const genres =;
// ```

// const genres = ["Jazz", "Blues"];
// genres.push("Rocknroll");
// console.log(genres[0]);
// console.log(genres.pop());
// console.log(genres.shift());
// genres.unshift("Country", "Reggae");
// console.log(genres);

// ----------------------------------

// ## Example 2 - Масиви та рядки

// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких
// зберігаються у змінній `values` у вигляді рядка. Значення гарантовано розділені
// пробілом.

// ```js
// const values = '8 11';
// const numbers = values.split(" ");
// const width = +numbers[0];
// const length = +numbers[1];
// const square = width * length;
// console.log (square)



// ## Example 3 - Перебір масиву

// Напиши скрипт для перебору масиву `fruits` циклом `for`. Для кожного елемента
// масиву виведи в консоль рядок у форматі `номер_елемента: значення_елемента`.
// Нумерація елементів має починатися з `1`.

// ```js
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i++)
// {
//     const message = `${ i+1 }: ${fruits[i]}`;
//     console.log(message);
// }


// ## Example 4 - Масиви та цикли

// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У
// змінних `names` та `phones` зберігаються рядки імен та телефонних номерів,
// розділені комами. Порядковий номер імен та телефонів у рядках вказують на
// відповідність. Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob, William, Solomon, Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArray = names.split(",");
// const phonesArray = phones.split(",");
// for (let i = 0; i < namesArray.length; i++) {
//     const name = namesArray[i];
//     const phone = phonesArray[i];
//     console.log(`${name}: ${phone}`);
// }

// Напиши скрипт який виводить у консоль усі слова рядка окрім першого та
// останнього. Результуючий рядок не повинен починатися або закінчуватися символ
// пробілу. Скрипт повинен працювати для будь-якого рядка.


// const string = 'Welcome to the future';
// const rev = string.split(" ").slice(1, -1).join(" ");


// ## Example 7 - Сортування масиву з циклом

// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою
// елемент.


// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// const alphabet = langs.sort();
// console.log(alphabet);


// ## Example 8 - Пошук елемента

// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для
// будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.


// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// for (const number of numbers) {
//     if (number < min) { min = number; }
// }
// console.log(min); // 1

// 2

// function removeSmallest(numbers) {
//     let arr = Array.from(arguments);
//     let min = Math.min(arr);
//     let ind= arr.indexOf(min);
//    let output = arr.slice(0, ind);
//   return output;
// }

// let numbers = [1,2,3,4,5];
// console.log(removeSmallest([1, 2, 3, 4, 5]));

// debugger;
// function addOverNum(value, ...args) {
//   let totalSum = 0;
//   for (let i = 0; i < args.length; i++)
//     {if (args[i] > value)
//     { totalSum += args[i];}
     
//     }
// }
// addOverNum(15, 32, 6, 13, 19, 8);