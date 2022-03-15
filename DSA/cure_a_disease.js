function Curedisease(N, vaccine, midichol_count) {
  // console.log(N,vaccine,midichol_count)

  var bag = "";
  for (let i = 0; i < N; i++) {
    if (midichol_count[i] > vaccine[i]) {
      bag += "No";
      console.log(bag);
      break;
    }
  }
  if (bag === "") {
    console.log("Yes");
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  var N = +input[0];
  var vaccine = input[1].trim().split(" ").map(Number);
  var midichol_count = input[2].trim().split(" ").map(Number);
  Curedisease(N, vaccine, midichol_count);
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
