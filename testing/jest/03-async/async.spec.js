const Ajax = require('./async');

describe('Ajax: echo', () => {
  // Тестирование асинхронного кода используя async/await
  test('shoul return data', async () => {
    const result = await Ajax.echo('Some data');

    expect(result).toBe('Some data');
  });

  // Тестирование асинхронного кода используя promise
  test('shoul return promise', () => {
    return Ajax.echo('Some data')
      .then(data => expect(data).toBe('Some data'));
  });

  // Тестируем обработку ошибок используя promise
  test('shoul return error with promise', () => {
    return Ajax.echo().catch(err => expect(err).toBeInstanceOf(Error));
  });

  // Тестируем обработку ошибок используя async/await
  test('shoul return error', async () => {
    try {
      return await Ajax.echo();
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
});