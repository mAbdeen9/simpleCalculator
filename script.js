const current = document.querySelector(".current");
const total = document.querySelector(".total");
const numbersBtns = document.querySelectorAll("[data-number]");
const mathBtns = document.querySelectorAll("[data-math]");
const equelBtn = document.querySelector("[data-equals]");
const deleteBtn = document.querySelector("[data-delete]");
const delteAllBtn = document.querySelector("[data-all-clear]");

class Calculator {
  constructor(current, total) {
    this.current = current;
    this.total = total;
    this.choosenOp = "";
    this.clear();
  }

  clear() {
    this.current.innerHTML = "";
    this.total.innerHTML = "";
    this.choosenOp = "";
  }

  appendNumber(num) {
    if (this.total.innerHTML != "") this.total.innerHTML = "";
    if (num === "." && this.current.innerHTML.includes(".")) return;
    this.current.innerHTML += num;
  }

  deleteOne() {
    if (this.choosenOp == this.current.innerHTML.slice(-1)) this.choosenOp = "";
    this.current.innerHTML = this.current.innerHTML.slice(0, -1);
  }

  chooseMath(math) {
    // if (this.total.innerHTML != "")  this.current.innerHTML
    if (this.choosenOp != "") return;
    this.current.innerHTML += math;
    this.choosenOp = math;
  }

  compute() {
    let res = "";
    if (this.total.innerHTML > 0) res = +this.total.innerHTML;

    this.current.innerHTML.split(this.choosenOp);
    switch (this.choosenOp) {
      case "×":
        res =
          +this.current.innerHTML.split(this.choosenOp)[0] *
          +this.current.innerHTML.split(this.choosenOp)[1];
        break;
      case "%":
        res =
          +this.current.innerHTML.split(this.choosenOp)[0] %
          +this.current.innerHTML.split(this.choosenOp)[1];
        break;
      case "÷":
        res =
          +this.current.innerHTML.split(this.choosenOp)[0] /
          +this.current.innerHTML.split(this.choosenOp)[1];
        break;
      case "-":
        res =
          +this.current.innerHTML.split(this.choosenOp)[0] -
          +this.current.innerHTML.split(this.choosenOp)[1];
        break;
      case "+":
        res =
          +this.current.innerHTML.split(this.choosenOp)[0] +
          +this.current.innerHTML.split(this.choosenOp)[1];
        break;
    }
    this.current.innerHTML = "";
    this.choosenOp = "";
    this.updateDisplay(+res.toFixed(3));
  }

  updateDisplay(res) {
    this.total.innerHTML = res;
  }
}

let calc = new Calculator(current, total);

numbersBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calc.appendNumber(btn.innerHTML);
  });
});

delteAllBtn.addEventListener("click", () => {
  calc.clear();
});

mathBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calc.chooseMath(btn.dataset.math.toLowerCase());
  });
});

equelBtn.addEventListener("click", () => {
  calc.compute();
});

deleteBtn.addEventListener("click", () => {
  calc.deleteOne();
});
