function sockMerchant(n, ar) {
  const arrLength = n;
  const counters = [];
  let models = [];
  let output = 0;

  // Delete duplicate items from the array
  const uniqueAr = ar.filter((item, index) => {
    return ar.indexOf(item) === index;
  });

  // Sort elements from the array
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

  // function for filter an array
  function filterArr(array, compare) {
    const model = array.filter((x) => x === compare);
    return model;
  }

  models = uniqueAr.sort(compareNumeric);

  if (arrLength === ar.length) {
    for (let i = 0; i < models.length; i++) {
      arrFilterModel = filterArr(ar, models[i]);

      if (arrFilterModel.length % 2 !== 0) {
        counters.push(arrFilterModel.length - 1);
      } else {
        counters.push(arrFilterModel.length);
      }
    }

    output = counters.reduce((a, b) => a + b, 0) / 2;
  } else throw new Error("The ar length must be iqual to n");

  return output;
}

const res = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log("res", res);
