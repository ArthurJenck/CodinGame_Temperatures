/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()) // the number of temperatures to analyse
var inputs = readline().split(" ")

let closestToZero = null
for (let i = 0; i < n; i++) {
  const t = parseInt(inputs[i]) // a temperature expressed as an integer ranging from -273 to 5526
  if (closestToZero === null) {
    closestToZero = t
  } else {
    const numToTest = t < 0 ? -t : t
    const positiveCurrentClosest =
      closestToZero < 0 ? -closestToZero : closestToZero
    closestToZero =
      numToTest < positiveCurrentClosest
        ? t
        : numToTest === positiveCurrentClosest
        ? closestToZero === t
          ? closestToZero
          : positiveCurrentClosest
        : closestToZero
  }
}
closestToZero = closestToZero === null ? 0 : closestToZero

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(closestToZero)
