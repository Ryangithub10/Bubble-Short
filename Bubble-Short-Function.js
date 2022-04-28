// fungsi bubble short
// fungsi
let arrayChecker = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      var bool1 = true;
    } else if (arr[i] > arr[i + 1]) {
      var bool2 = false;
      break;
    }
  }
  
  if (bool2 !== false) {
    bool2 = true;
  }
  if (bool1 !== true) {
    bool1 = false;
  }
  
  return bool1 && bool2;
}

let bubbleShort = function(arr) {
  
  while (!arrayChecker(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let index2 = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = index2;
      }
    }
  }
  
  return arr;
}

// array/variable
let arrayShort = [9, 6, 8, 3, 10, 15, 30, 20, 15];

// exec fungsi
console.log(bubbleShort(arrayShort));
