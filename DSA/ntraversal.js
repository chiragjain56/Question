//Enter code here
function ntraverse(n, mat) {
  let str = "";
  for (let i = 0; i < n - 1; i++) {
    str += mat[i][0] + " ";
  }
  let i = n - 1;
  for (let j = 0; j < n; j++) {
    str += mat[i][j] + " ";
    i--;
  }
  for (let i = 1; i < n; i++) {
    str += mat[i][n - 1] + " ";
  }
  console.log(str);
}

function runProgram(input) {
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    let N = +input[line];
    line++;
    let arr = [];
    for (var j = 0; j < N; j++) {
      arr.push(input[line].trim().split(" ").map(Number));
      line++;
    }
    ntraverse(N, arr);
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
