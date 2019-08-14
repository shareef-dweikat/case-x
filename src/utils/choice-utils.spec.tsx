import {
  sizeDecision,
  ChosenOptions,
  modelDecision,
  logoDecision,
  colourDecision,
  storageDecision
} from "../routes/ProductPage/PurchaseOptions/choices";
import {
  beautifyChoices,
  extractLabel,
  matchSelectedVarient,
  ChosenVarientInterface,
  findAllOfMatchedOption
} from "./choice-utils";
import { mockVariations } from "./test-vars";

describe("Choice Utils", () => {
  xit("Can Beautify the choice", () => {
    const chosen: ChosenOptions = {
      size: 2,
      model: 1,
      logo: 4,
      colour: 3,
      storage: 2
    };

    const expectedResult = {
      size: sizeDecision.options.find(option => option.index === chosen.size)!
        .optionName,
      model: modelDecision.options.find(
        option => option.index === chosen.model
      )!.optionName,
      logo: logoDecision.options.find(option => option.index === chosen.logo)!
        .optionName,
      colour: colourDecision.options.find(
        option => option.index === chosen.colour
      )!.optionName,
      storage: storageDecision.options.find(
        option => option.index === chosen.storage
      )!.optionName
    };

    expect(beautifyChoices(chosen)).toEqual(expectedResult);
  });

  xit("It can deal with model being 0", () => {
    const chosen: ChosenOptions = {
      size: 1,
      model: 0,
      logo: 4,
      colour: 3,
      storage: 2
    };

    const expectedResult = {
      size: sizeDecision.options.find(option => option.index === chosen.size)!
        .optionName,
      logo: logoDecision.options.find(option => option.index === chosen.logo)!
        .optionName,
      colour: colourDecision.options.find(
        option => option.index === chosen.colour
      )!.optionName,
      storage: storageDecision.options.find(
        option => option.index === chosen.storage
      )!.optionName
    };

    expect(beautifyChoices(chosen)).toEqual(expectedResult);
  });
  it("Should Extract a label", () => {
    const chosen: ChosenOptions = {
      size: 2,
      model: 1,
      logo: 2,
      colour: 3,
      storage: 2
    };

    const chosenLogoLabel = extractLabel("logo", chosen);
    expect(chosenLogoLabel).toEqual("white");
  });

  describe("when extracting variants", () => {
    const variations = mockVariations;

    const chosenVariant: ChosenVarientInterface = {
      logo: "Black Steel",
      colour: "Charcoal Black",
      storage: "512GB"
    };

    it("Should extract all with value", () => {
      const matchedVariations = findAllOfMatchedOption(
        variations,
        "logo",
        chosenVariant.logo
      );

      matchedVariations.forEach((variation: any) => {
        expect(variation.selectedOptions[0].value).toEqual(chosenVariant.logo);
      });
    });

    it("Should extract the chosen variant", async () => {
      const chosenVariation = await matchSelectedVarient(
        variations,
        chosenVariant
      );
      console.log(chosenVariation[0].selectedOptions);

      expect(chosenVariation).toBeDefined();
      expect(chosenVariation.length).toEqual(1);
    });
  });
});
