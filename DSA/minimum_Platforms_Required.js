//write code here
const minPlatform = (arrArr, arrDep) => {
  let n = arrArr.length;
  arrArr.sort((a, b) => a - b);
  arrDep.sort((a, b) => a - b);
  // console.log(arrArr)
  // console.log(arrDep)
  let i = 0;
  let j = 0;
  let count = 0;
  let max = -1;
  while (i < n && j < n) {
    if (arrArr[i] <= arrDep[j]) {
      i++;
      count++;
      if (count > max) {
        max = count;
      }
    } else {
      count = 0;
      j++;
      if (count > max) {
        max = count;
      }
    }
  }
  console.log(max);
};
function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arrArr = input[1].trim().split(" ");
  let arrDep = input[2].trim().split(" ");
  // console.log(arrArr,arrDep);
  for (let i = 0; i < n; i++) {
    let nstr = "";
    for (let j = 0; j < arrArr[i].length; j++) {
      let str = arrArr[i];
      if (str[j] == ":") {
        continue;
      } else {
        nstr = nstr + str[j];
      }
    }
    arrArr[i] = nstr;
  }

  arrArr = arrArr.map(Number);
  for (let i = 0; i < n; i++) {
    let nstr = "";
    for (let j = 0; j < arrDep[i].length; j++) {
      let str = arrDep[i];
      if (str[j] == ":") {
        continue;
      } else {
        nstr = nstr + str[j];
      }
    }
    arrDep[i] = nstr;
  }
  arrDep = arrDep.map(Number);
  minPlatform(arrArr, arrDep);
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
