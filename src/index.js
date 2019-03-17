module.exports = function check(str, bracketsConfig) {

  if (str.length % 2 != 0) return false;

  var openedBrackets = [];
  var closedBrackets = [];

  for (var i = 0; i < bracketsConfig.length; i++) {
    openedBrackets.push(bracketsConfig[i][0]);
    closedBrackets.push(bracketsConfig[i][1]);
  }

  var openedStack = [];

  for (var i = 0; i < str.length; i++) {
    if (openedStack.length == 0) {
      if (!openedBrackets.includes(str[i])) return false;
      openedStack.push(str[i]);
    } else {
      var lastOpenedIndex = openedBrackets.indexOf(openedStack[openedStack.length - 1]);
      if (str[i] == closedBrackets[lastOpenedIndex]) {
        openedStack.pop();
      } else if (openedBrackets.includes(str[i])) {
        openedStack.push(str[i]);
      } else {
        return false;
      }
    }
  }

  return openedStack.length == 0;
}
