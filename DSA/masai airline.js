function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let A = input[1].trim().split(" ").map(Number);
  let B = input[2].trim().split(" ").map(Number);
  xyz(N, A, B);
}
function xyz(N, A, B) {
  for (let i = 0; i < N; i++) {
    if (A[i] > 15 || B[i] > 7) {
      console.log("Stop");
    } else {
      console.log("Boarding");
    }
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
