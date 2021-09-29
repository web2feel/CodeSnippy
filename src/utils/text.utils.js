/**
 * Format Text
 */

export const formatText = (text) => {
  let textArr = text.split(" ");
  return `${textArr[0]}-${textArr[1]}`;
};

