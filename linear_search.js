'use strict'

// Release 0
console.log("==============Linear Search================")
let linearSearch = (target, values) => {
  //write your code here
  for (var m=0; m<values.length; m++){
    if (values[m] == target) {
       return m;
    }
  }
      return -1;
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("==============Global Linear Search============")
let globalLinearSearch = (target, values) => {
  //write your code here
  let tamp = []
  for (var s = 0; s < values.length; s++) {
    if (values[s] === target){
     tamp.push(s)
    }
  }
  return tamp;
}

let banana_arr = "bananaaaa".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
