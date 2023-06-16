exports.increment = (value) => {
  if (value === undefined || value === null)
    throw new Error("value must be defined");
  let counter = value + 1;
  if (counter >= 100) {
    counter = 100;
  }
  return counter;
};
