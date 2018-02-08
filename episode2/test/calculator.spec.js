import { expect } from "chai";
import Calculator from "../src/Calculator";


describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = Object.create(Calculator);
    calculator.init();
  });

  it("has a default result of 0", () => {
    expect(calculator.result).to.eql(0);
  });


  it("can add numbers", () => {
    expect(calculator.result).to.eql(0);
    calculator.add(10)
    expect(calculator.result).to.eql(10);
  });

  it("can chain commands", () => {
    expect(calculator.result).to.eql(0);
    calculator.times(2).add(10).times(2)
    expect(calculator.result).to.eql(20);
  });

});
