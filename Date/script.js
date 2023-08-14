/* Дата в JS хранится в миллисекундах, это значение называется "Time stamp"!!! "Time stamp" в контексте JavaScript обычно относится к метке времени, которая представляет собой значение времени в определенном формате, как правило, в виде количества миллисекунд, прошедших с определенного момента (например, начала Unix эпохи - 1.01.1970). */
// Получаем текущую дату.
const now = new Date();
/* Если вывести в консоль, то получим запись типа 2023-08-11T13:58:06.317Z (Т - разделитель между датой и временем, время состоит из часов, минут, секунд и миллисекунд). В консоль VSCode такой объект выводится в часовом поясе UTC (в консоль браузера вроде бы в текущем часовом поясе). */


/* Мы можем создать объект даты в определенном формате передав строку в качестве аргумента в конструктор. Можем передавать год, год-месяц, год-месяц-число, год-месяц-числоТ(время целиком!)Z */
const date0 = new Date('2021-09-21');// Можно использовать метод parse - new Date.parse('2021-09-21'); - результат одинаков.
// В итоге получим следующего вида объект - 2021-09-21T00:00:00.000Z.

/* Можно передавать дату числами. Если месяц/число состоят из одной цифры, то передаются без нуля (5, а не 05). Месяца начинаются с нуля, числа с единицы. */
const date1 = new Date(2021, 3, 5, 23, 58, 16);
// Получим следующий объект - 2021-04-05T21:58:16.000Z - получили 4 месяц т.к. передали 3, а месяца нумеруются с нуля.

/* Т.к. дата в JS хранится в миллисекундах, то мы можем сформировать объект даты передав в конструктор миллисекунды, если нужно создать объект даты ранее 1.01.1970, то необходимо передавать отрицательное значение миллисекунд */
const date2 = new Date(0);// 1970-01-01T00:00:00.000Z
const date3 = new Date(-1000000);// 1969-12-31T23:43:20.000Z
const date4 = new Date(1000000);// 1970-01-01T00:16:40.000Z

// Геттеры:

now.getFullYear();// Выводит год - 2023.
now.getMonth();// Получаем месяц, нумерация начинается с нуля, поэтому август === 7.
now.getDate();// Получаем число, 1-31.
// .getHours/getMinutes и т.п. - получение часов/минут/секунд...

now.getDay();// Получаем порядковый номер дня недели, воскресенье - нулевой день, суббота 6ой.

now.getUTCHours();// Выводит часы в часовом поясе UTC.

now.getTime();// Получаем Time stamp (время в миллисекундах в которое создана now).
now.getTimezoneOffset();// Получаем разницу в минутах между текущим часовым поясом и UTC.

// Сеттеры:

date2.setFullYear(2011);
date2.setMonth(7);
date2.setDate(14);
date2.setHours(11);// Если задать больше 24 часов, то JS автоматически пересчитает их в дни.
// И т.д.
date2.setFullYear(2011, 9, 9);// Передавая аргументы через запятую, можно изменить так же месяц и день
date2.setHours(11, 11, 11, 111);/* По аналогии с методом выше (setFullYear - почему-то не воспринял часы минуты/секунды). */

// Замер скорости выполнения скрипта:

const startTime = new Date();
// Наш код.
const endTime = new Date();

console.log(endTime - startTime);
