function runProgram(input) {
  //console.log(input)
  input = input.trim().split("\n");
  var tc = input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var [N, val] = input[line].trim().split(" ").map(Number);
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;

    differenceOfK(N, val, arr);
    //console.log(n,arr1,arr2)
  }
}
function differenceOfK(N, val, arr) {
  let first = 0;
  let second = 0;
  let flag = false;
  while (first < N && second < N) {
    let temp = arr[second] - arr[first];
    if (temp == val && first != second) {
      flag = true;
    }
    if (temp < val) {
      second++;
    } else {
      first++;
    }
  }
  if (flag === true) {
    console.log("Yes");
  } else {
    console.log("No");
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
