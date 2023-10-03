import calculator from "calculator";


describe("calculator tests", () => {
  it("should work", async () => {
    expect(true).toBe(true);
  });
  it("should sum two numbers", async () => {

    const n1 = 2
    const n2 = 3

    const result = calculator.sum(n1, n2)
    expect(result).toBe(5);
  });

  it("should subtract two numbers", async () => {
    const n1 = 3
    const n2 = 2

    const result = calculator.sub(n1, n2)
    expect(result).toBe(1);
  });
  it("should multiply two numbers", async () => {
    const n1 = 2
    const n2 = 3

    const result = calculator.mul(n1, n2)
    expect(result).toBe(6);
  });

  it("should divide two numbers", async () => {
    const n1 = 6
    const n2 = 3

    const result = calculator.div(n1, n2)
    expect(result).toBe(2);
  });

  it("should return 0 when diving by zero", async () => {
    const n1 = 6
    const n2 = 0

    const result = calculator.div(n1, n2)
    expect(result).toBe(0);
  })

});
