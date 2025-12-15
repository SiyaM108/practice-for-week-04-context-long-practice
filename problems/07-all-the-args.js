function allTheArgs(func, ...args) {
  // Your code here
  return function(...rest) {
    return func(...args, ...rest);
  };
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
