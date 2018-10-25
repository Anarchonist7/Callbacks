function findWaldo(arr, found) {
  arr.forEach((item, index) => {
    if (item === 'Waldo') {
      found(index);
    }
  })
}

function actionWhenFound(index) {
  console.log("Found Waldo at index %d!", index);
}

findWaldo(['Alice', 'Bob', 'Waldo', 'Winston'], actionWhenFound);