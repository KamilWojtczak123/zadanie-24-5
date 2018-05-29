'use strict';
const calculateStylePoints = styleNotes => {
  if (!Array.isArray(styleNotes))
    throw TypeError('Style notes must be an array.');
  if (styleNotes.length !== 5)
    throw Error(`There must be 5 notes, not ${styleNotes.length}!!!`);
  const result = styleNotes
    .sort((a, b) => {
      return a - b;
    })
    .slice(1, 4)
    .reduce((acc, curr) => {
      return acc + curr;
    });
  return result;
};

module.exports = calculateStylePoints;
