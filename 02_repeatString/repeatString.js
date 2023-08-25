const repeatString = function (message, repeatNum) {
  let repeatMessage = '';
  let i = 0;

  do {
    switch (true) {
      case repeatNum === 0:
        repeatMessage = "";
        break;
      case repeatNum < 0:
        repeatMessage = "ERROR";
        break;
      default:
        repeatMessage = repeatMessage.concat(message);
        break;
    }

    i++
  } while (i < repeatNum);

  return repeatMessage;
};

// Do not edit below this line
module.exports = repeatString;
