import { expect } from "chai";
import { add, times, subtract, square } from "../src/calculator-fns";

describe("Calculator functions", () => {

  describe("adding numbers", () =>
    it("1 + 1 = 2", () =>
      expect(add(1, 1)).to.eql(2)
    )
  );

  describe("multiplying numbers", () =>
    it("2 * 3 = 6", () =>
      expect(times(2, 3)).to.eql(6)
    )
  );


  describe("subtract numbers", () => {
    it("2 - 2 = 0", () => {
      expect(subtract(2, 2)).to.eql(0)
    })
  })

  describe("square numbers", () => {
    it("square 9 = 81", () => {
      expect(square(9)).to.eql(81)
    })
  })

});
