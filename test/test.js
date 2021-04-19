const expect = chai.expect,
  tarr = [3, 0, 1, 1, 9, 7],
  ta = 7,
  tb = 2,
  tc = 3;

describe("CountGoodTriplets", () => {
  it("Find all of the good triplets", () => {
    expect(countGoodTriplets(tarr, ta, tb, tc)).to.equal(
      4,
      "Please check your function!"
    );
  });
});
