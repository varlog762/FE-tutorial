class Lodash {
  compact(array) {
    const result = [];

    for (let item of array) {
      if (item) {
        result.push(item);
      }
    }

    console.log(result);
    return result;
  }

  groupBy(array, prop) {
    const result = {};

    for (let item of array) {
      if (typeof prop === 'function') {
        if (!result[prop(item)]) {
          result[prop(item)] = [];
        }
        result[prop(item)].push(item);
      } else {
        if (!result[item[prop]]) {
          result[item[prop]] = [];
        }
        result[item[prop]].push(item);
      }
    }

    return result
  }
}

module.exports = Lodash;
