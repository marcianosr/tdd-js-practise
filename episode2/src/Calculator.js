const Calculator = {
  init() {
    console.log('Starting up calculator....');
    this.reset();
    return this;
  },

  reset() {
      this.result = 0;
  },

  add(a, b) {
    let sum;

    if (b) {
      sum = a + b;
    }
    else {
      sum = a;
    }

    this.result += sum;
    return this;
  },

  subtract(a) {
     this.result -= a;
     return this;
  },

  times(a) {
     this.result *= a;
     return this;
  },

  square(a) {
     Math.pow(a, 2);
     return this;
  }
}

export default Calculator;
