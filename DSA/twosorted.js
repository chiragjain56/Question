function runProgram(input) {
  input = input.trim().split("\n");
  var tc = input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var n = input[line];
    line++;
    var arr1 = input[line].trim().split(" ").map(Number);
    line++;
    var arr2 = input[line].trim().split(" ").map(Number);
    line++;
    twosorted(n, arr1, arr2);
  }
  // console.log(n,arr1,arr2)
}
function twosorted(n, arr1, arr2) {
  left = 0;
  right = n - 1;
  var count = 0;
  while (left < n && right >= 0) {
    if (arr1[left] < arr2[right]) {
      left++;
    } else if (arr1[left] > arr2[right]) {
      right--;
    } else {
      count++;
      left++;
      right--;
    }
  }
  console.log(count);
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

