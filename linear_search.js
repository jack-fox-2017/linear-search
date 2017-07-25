'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  for (let i = 0; i < values.length; i++) {
    if (target == values[i]) {
      return "Nilai tersebut berada di index " +i

    }
  }
  return -1+ "\nMaaf angka tersebut tidak ada dalam index"
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target,values) => {
  let findingIndex = [];
  for (let i = 0; i < values.length; i++) {
    if (target == values[i]) {
       findingIndex.push(i);
    }
  }
  return "Huruf tersebut berada di index " + findingIndex;
}


let banana_arr = "banana".split("");
console.log(banana_arr);
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
