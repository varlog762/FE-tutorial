const {
  sum,
  nativeNull
} = require('./intro');

// Один файл с тестами является одним test suite

// Функция describe служит для объединения тестов (например всех тестов написанных для функции Sum)
describe('Sum function:', () => {

  // Один вызов функции test считается одним тест-кейсом
  test('Return sum of two values', () => {
    // В одном тест-кейсе можно вызывать любое количество экспектов
    // Если падает один из экспектов, то падает целеком весь тест

    /* toBe() (и подобные методы) называется метчером (matcher), toBe сравнивает результат работы переданной в 
    expect функции с переданным параметром */
    // toBe() мспользуется с примитивами!!! Для проверки объектов/массивов необходимо использовать toEqual()!!!!
    expect(sum(1, 3)).toBe(4);
        
    // toBe() мспользуется с примитивами!!! Для проверки объектов/массивов необходимо использовать toEqual()!!!!
    expect(sum(1, 3)).toEqual(4);
  });

  test('Other methods for testing integer:', () => {
    // Результат работы функции должен быть больше 5
    expect(sum(4, 8)).toBeGreaterThan(5);

    // ...результат больше или равен 12
    expect(sum(4, 8)).toBeGreaterThanOrEqual(12);

    // ...результат должен быть меньше 13
    expect(sum(4, 8)).toBeLessThan(13);

    // ...меньше или равен 12
    expect(sum(4, 8)).toBeLessThanOrEqual(12);
  })

  test('Metods for testing floats:', () => {
    /* Метчер для проверки суммы дробных чисел, означает что результат "должен быть близок к". 
    При тестировании с помощью toBe() получили бы кравсный тест т.к. JS суммирует дробные "по своему" */
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  })
});

/* Пишем тетсы для второй функции, в дескрайб первым параматром указываем имя тестируемой функции, 
далее в каждом test (в первом параметре) описываем что именно тестируем (описание теста) */
describe('Native null function:', () => {
  test('shoul return null', () => {
    // проверяем вывод функции на null
    expect(nativeNull()).toBe(null); 

    // метчер конкретно для null, в данном случае аналогичен верхнему
    expect(nativeNull()).toBeNull(); // Так же существует toBeNaN()

    // метчер проверяет является ли возвращаемое значение falsy (0, -0, '', null, false, undefined)
    expect(nativeNull()).toBeFalsy();

    // метчер проверяет определено ли значение
    expect(nativeNull()).toBeDefined();

    // .not является аналогом !. toBeTruthy - проверяет явлется ли значение истинным
    expect(nativeNull()).not.toBeTruthy();

    // toBeUndefined - проверяет является ли значение undefined
    expect(nativeNull()).not.toBeUndefined();
  })
});