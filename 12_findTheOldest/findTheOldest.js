const findTheOldest = function (people) {
  people.reduce((acc, item) => {
    if (item.yearOfDeath) {
      acc = item.yearOfDeath;
    } else {
      acc = new Date().getFullYear();
    }

    return (item.age = acc - item.yearOfBirth);
  }, 0);

  return people.sort((a, b) => b.age - a.age)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
