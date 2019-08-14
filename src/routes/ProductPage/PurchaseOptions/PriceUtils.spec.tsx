import { calculateIndividualPrice, calculateOverallPrice } from "./PriceUtils";
import { Decisions } from "./choices";
import { enums } from "./testVars";

describe("PriceIUtils", () => {
  it("should be able to add up the price", () => {
    const chosen = enums;
    const choice = "size";
    const price = calculateIndividualPrice(choice, Decisions, chosen);
    expect(price).toEqual(100);
  });
  it("should work if there is no price", () => {
    const chosen = enums;
    const choice = "colour";
    const price = calculateIndividualPrice(choice, Decisions, chosen);
    expect(price).toEqual(0);
  });
  it("should work if there is hit with random param", () => {
    const chosen = enums;
    const choice = "dsrtyu";
    const price = calculateIndividualPrice(choice, Decisions, chosen);
    expect(price).toEqual(0);
  });
  it("should add up all the prices", () => {
    const chosen = enums;
    const price = calculateOverallPrice(Decisions, chosen);
    expect(price).toEqual(350);
  });
});
