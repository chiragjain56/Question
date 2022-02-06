function allTwiceExceptOne(N, arr) {
  //write your code here
  var obj = {};
  var c = 0;
  for (i = 0; i < arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  //console.log( obj)
  for (var key in obj) {
    c = obj[key];
    if (c == 1) {
      console.log(key);
    }
  }
}
