const map = require('./mock');

describe('Map function:', () => {
  let array = [];

  // Создаем переменную для мока
  let fn;

  beforeEach(() => {
    array = [1, 2, 3, 5, ];

    // Создаем мок перед запуском каждого теста
    fn = jest.fn(x => x ** 2);

    map(array, fn);
  });

  // Тестируем коллбек
  test('should call callback', () => {

    // Проверяет вызвана ли функция (достигается видимо путем создания мока через Jest)
    expect(fn).toBeCalled();
  });

  test('should call callback 4 times', () => {

    // Проверяет вызвана ли функция необходимое количество раз
    expect(fn).toBeCalledTimes(4);

    // То же самое что выше, но другим способом
    expect(fn.mock.calls.length).toBe(4);
  });

  // Проверяем равно ли возвращаемое значение fn переданному в toBe() при каждом вызове
  test('should pow 2 each element', () => {
    expect(fn.mock.results[0].value).toBe(1);
    expect(fn.mock.results[1].value).toBe(4);
    expect(fn.mock.results[2].value).toBe(9);
    expect(fn.mock.results[3].value).toBe(25);
  });
});