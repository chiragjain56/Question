function runProgram(input) {
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var [n, k] = input[line].trim().split(" ").map(Number);
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;
    xyz(n, k, arr);
    //  console.log(n,k,arr)
  }
}
function xyz(n, k, arr) {
  var left = 0;
  var right = n - 1;
  var s = "";
  var flag = false;
  while (left < right) {
    s = arr[left] + arr[right];
    if (s == k) {
      console.log(left + " " + right);
      flag = true;
    } else if (s > k) {
      right--;
    } else {
      left++;
    }
    if (flag === true) {
      break;
    }
  }
  if (flag === false) {
    console.log("-1" + " " + "-1");
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
