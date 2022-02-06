function runProgram(input) {
  input = input.trim().split("\n");
  //console.log(input)
  var N = +input[0];
  //console.log(N)
  var arrayNames = [];
  var arrayMarks = [];
  var arrayRanks = [];
  for (let i = 1; i <= N; i++) {
    let [name, marks] = input[i].split(" ");
    arrayNames.push(name);
    arrayRanks.push(i);
    arrayMarks.push(marks);
  }
  makeLeaderboard(N, arrayNames, arrayMarks, arrayRanks);
  //console.log(N,arrayNames,arrayMarks,arrayRanks);
}
function makeLeaderboard(N, arrayNames, arrayMarks, arrayRanks) {
  let k = 1;
  while (k < N) {
    for (let i = 0; i < N - k; i++) {
      if (arrayMarks[i] < arrayMarks[i + 1]) {
        [arrayMarks[i], arrayMarks[i + 1]] = [arrayMarks[i + 1], arrayMarks[i]];
        [arrayNames[i], arrayNames[i + 1]] = [arrayNames[i + 1], arrayNames[i]];
      }
      if (arrayMarks[i] == arrayMarks[i + 1]) {
        if (arrayNames[i] > arrayNames[i + 1]) {
          [arrayNames[i], arrayNames[i + 1]] = [
            arrayNames[i + 1],
            arrayNames[i],
          ];
        }
      }
    }
    k++;
  }

  for (let i = 0; i < N; i++) {
    if (arrayMarks[i] == arrayMarks[i + 1]) {
      arrayRanks[i + 1] = arrayRanks[i];
    }
  }
  for (let i = 0; i < N; i++) {
    console.log(arrayRanks[i], arrayNames[i]);
  }
}
//-----------------------------------------------------------------------------------------------
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
