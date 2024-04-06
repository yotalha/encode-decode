const arr = ["neet", "code"];

let x = "";

for (let i = 0; i < arr.length; i++) {
  let word = arr[i].length + "#" + arr[i];
  x = x + word;
}

const y = [];

let i = 0;
while (i < x.length) {
  let j = i;
  while (x[j] != "#") {
    j++;
  }
  let num = parseInt(x.slice(i, j));
  y.push(x.slice(j + 1, j + 1 + num));
  i = j + 1 + num;
}
console.log("y ", y);
