export const findByTestArr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const getLastEntryOfMonth = sales => {
  const returnArr = [];
  let startMonth = "Jan";
  for (let i = 0; i < sales.length - 1; i++) {
    let obj = sales[i + 1];
    if (obj.month !== startMonth) {
      returnArr.push(sales[i]);
      startMonth = obj.month;
    }
  }
  returnArr.push(sales[sales.length - 1]);
  console.log(returnArr);
  return returnArr.sort((a, b) => {
    return new Date(a.weekEnding) - new Date(b.weekEnding);
  });
};
