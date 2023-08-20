const mergeSort = (array) => {
  if (array.length === 0) return [];
  if (array.length === 1) return array;
  const leftArray = mergeSort(array.slice(0, Math.ceil(array.length / 2)));
  const rightArray = mergeSort(array.slice(Math.ceil(array.length / 2)));
  const sortedArray = [];
  while (leftArray.length && rightArray.length) {
    sortedArray.push(
      leftArray[0] < rightArray[0]
        ? leftArray.shift()
        : rightArray.shift(),
    );
  }
  sortedArray.push(...leftArray, ...rightArray);
  return sortedArray;
};

export default mergeSort;
