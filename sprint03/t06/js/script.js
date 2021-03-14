function* generator(){
    let num = 1;
    while (true) {
      let n = yield num;
      num += n;
      if (num > 10000)
        num = 1;
    }
  }

let generator = generator();
let n = 1;

while (true) {
    let temp = prompt(`Previous result: ${generator.next(n).value}. Enter a new number:`);
    if (isNaN(temp)) {
        console.error("Invalid number!");
        break;
    }
    n = parseInt(temp);
}