const removeFromArray = function (initArray, ...removeValue) {
  let filterArray = initArray;

  for (const remove of removeValue) {
    filterArray = filterArray.filter((value) => value !== remove);
  }

  return filterArray;
};

// Do not edit below this line
module.exports = removeFromArray;
