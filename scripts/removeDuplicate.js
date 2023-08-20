const removeDuplicate = (array) => {
  const filteredArray = [];
  array.forEach((item) => {
    if (!filteredArray.includes(item)) {
      filteredArray.push(item);
    }
  });
  return filteredArray;
};

export default removeDuplicate;
