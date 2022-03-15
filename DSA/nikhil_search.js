function Search(arr, size, V, X) {
  //   console.log(arr);
  //  var count=0;
  if (V == 0) {
    start = 0;
    end = size - 1;
    res = -1;
    while (start <= end) {
      var mid = start + Math.floor((end - start) / 2);
      if (X == arr[mid]) {
        res = mid;
        end = mid - 1;
      } else if (X < arr[mid]) {
        res = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    if (res == -1) {
      console.log("0");
    } else {
      console.log(size - res);
    }
  } else {
    var start = 0;
    var end = size - 1;
    var res = -1;
    while (start <= end) {
      var mid = start + Math.floor((end - start) / 2);
      if (X == arr[mid]) {
        start = mid + 1;
      } else if (X < arr[mid]) {
        res = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    if (res == -1) {
      console.log("0");
    } else {
      console.log(size - res);
    }
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var size = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  arr.sort((a, b) => a - b);

  var Q = +input[2];
  var line = 3;
  for (var i = 0; i < Q; i++) {
    var [V, X] = input[line].trim().split(" ").map(Number);
    line++;
    Search(arr, size, V, X);
  }
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
