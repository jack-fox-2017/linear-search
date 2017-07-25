'use strict'

// Release 0
//# buat looping untuk perulangan dan hitung pajang dari values
//# buat kondisi untuk cek param target sama atau tidak dengan param values
//# jika sama, tampilkan index keberapa
//# jika tidak tampilkan -1

console.log("Linear Search")
let linearSearch = (target, values) => {
  //write your code here
  for(let i=0; i<values.length; i++)
  {
    if(target == values[i])
    {
      return i;
    }
  }
  return -1;
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
2
console.log(linearSearch(9, random_numbers));
-1

//Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
//  write your code here
//console.log(values);
  let push = [];
  for(let i=0; i<banana_arr.length; i++)
  {
    if(target == banana_arr[i])
    {
      push.push(i)
    }
  }
  return push;
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
