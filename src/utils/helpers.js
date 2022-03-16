export function loadCreditCards(creditCartData, key) {
  if (localStorage.getItem(`${key}`)) {
    return JSON.parse(localStorage.getItem(`${key}`));
  }
  return creditCartData;
}

export const reverseDate = (string) => {
  const removeDashString = string.slice(2, -3).replace('-', '/');
  const reverseStringArray = removeDashString.split().reverse();

  let reverseString = reverseStringArray.toString();
  let year = reverseString.slice(0, 2);
  let slash = reverseString.slice(2, 3);
  let month = reverseString.slice(3, 5);

  let result = month.concat(slash, year);

  return result;
};

export const addWhiteSpace = (string) => {
  let arrStr = string.split('');

  arrStr.splice(4, 0, 'space');
  arrStr.splice(9, 0, 'space');
  arrStr.splice(14, 0, 'space');

  let result = arrStr.join('');

  return result.replaceAll('space', ' ');
};
