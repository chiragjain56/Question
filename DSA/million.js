let str = "abbabaadcbbc";
let N = 12;

let obj = {};
for (let i = 0; i < N; i++) {
  if (obj.hasOwnProperty(str[i])) {
    obj[str[i]]++;
  } else {
    obj[str[i]] = 1;
  }
}

let bag = "";
for (k in obj) {
  if (obj[k] % 2 == 1) {
    bag += k;
  }
}
if (bag.length < 1) {
  console.log(-1);
} else {
  console.log(bag);
}
