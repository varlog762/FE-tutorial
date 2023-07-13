const Lodash = require('./sync');

let _ = new Lodash();

describe('Lodash: compact', () => {

  // Создаем тестовый массив, на котором будем проверять работу функции
  let arr = [false, 32, 'sdvsdv', null, 0, 124, undefined, -0, ''];

  // Функция позволяет выполнять ее содержимое перед каждым тестом
  beforeEach(() => {
    /* Пересоздаем массив каждый раз при запуске теста (нужно в том случае, если функция изменяет его,
     его может также изменить соседний тест, добавив какие-то свои значения и тогда остальные тесты могут отвалиться) */
    arr = [false, 32, 'sdvsdv', null, 0, 124, undefined, -0, ''];
  });

  // Функция позволяет выполнять ее содержимое один раз перед первым тестом 
  //beforeAll();

  // Функция позволяет выполнять ее содержимое после каждого теста
  //afterEach();

  // Функция позволяет выполнять ее содержимое один раз после завершения последнего теста
  // Пересоздаем экземпляр после выполнения тестов (хз зачем)
  afterAll(() => {
    _ = new Lodash;
  });

  test('should be defined', () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test('remove falsy values from array', () => {
    // Создаем массив-результат, с которым будем сравнивать результат работы функции
    const result = [32, 'sdvsdv', 124];

    // Так сравниваем массивы, то необходимо использовать toEqual()
    expect(_.compact(arr)).toEqual(result);
  });

  test('should NOT contains falsy values', () => {

    // Результат работы функции не должен содержать перечисленные параметры
    expect(_.compact(arr)).not.toContain(0);
    expect(_.compact(arr)).not.toContain(-0);
    expect(_.compact(arr)).not.toContain('');
    expect(_.compact(arr)).not.toContain(null);
    expect(_.compact(arr)).not.toContain(false);
    expect(_.compact(arr)).not.toContain(undefined);
  });
});

describe('Lodash: groupBy', () => {

  test('should be defined', () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });

  test('should groups array items by Math.floor', () => {
    const arr = [3.2, 6.4, 2.5, 3.1, 6.9, 2.4, 5.1];
    const result = {
      '3': [3.2, 3.1],
      '6': [6.4, 6.9],
      '2': [2.5, 2.4],
      '5': [5.1],
    };

    expect(_.groupBy(arr, Math.floor)).toEqual(result);
  });

  test('should groups array items by length', () => {
    const arr = ['one', 'two', 'three'];
    const result = {
      3: ['one', 'two'],
      5: ['three'],
    };

    expect(_.groupBy(arr, 'length')).toEqual(result);
  });
});