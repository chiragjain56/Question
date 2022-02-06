//write your code
function count_it(horsei, horsej, horse_step, n) {
  if (horse_step > n) {
    return [];
  }

  if (horsei < 1 || horsej < 1 || horsei > 10 || horsej > 10) {
    return [];
  }

  if (horse_step == n) {
    return [[horsei, horsej]];
  }

  var sol = [];

  sol = sol.concat(count_it(horsei + 1, horsej + 2, horse_step + 1, n));
  sol = sol.concat(count_it(horsei + 1, horsej - 2, horse_step + 1, n));
  sol = sol.concat(count_it(horsei - 1, horsej + 2, horse_step + 1, n));
  sol = sol.concat(count_it(horsei - 1, horsej - 2, horse_step + 1, n));
  sol = sol.concat(count_it(horsei + 2, horsej + 1, horse_step + 1, n));
  sol = sol.concat(count_it(horsei + 2, horsej - 1, horse_step + 1, n));
  sol = sol.concat(count_it(horsei - 2, horsej + 1, horse_step + 1, n));
  sol = sol.concat(count_it(horsei - 2, horsej - 1, horse_step + 1, n));

  return sol;
}

function runProgram(input) {
  var [i, j, n] = input.split(" ").map(Number);

  var sol = count_it(i, j, 0, n);

  var ma = {};
  var fin_sol = 0;

  for (let i = 0; i < sol.length; i++) {
    if (!(sol[i] in ma)) {
      fin_sol++;
      ma[sol[i]] = 1;
    }
  }

  console.log(fin_sol);
}

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
