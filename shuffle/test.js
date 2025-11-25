import { isSorted } from "../issorted/issorted.js"
import { shuffle } from "./fisheryates.js"

let arrSorted = [1,2,3,4,5,6,7,8,9,10];

console.log(`${isSorted(arrSorted)}`)
arrSorted = shuffle(arrSorted);
console.log(`${isSorted(arrSorted)}`)
console.log(`${arrSorted}`)