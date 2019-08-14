import {
  ChosenOptions,
  Decisions,
  Decision,
  Option
} from "../routes/ProductPage/PurchaseOptions/choices";

export const beautifyChoices = (chosen: ChosenOptions) => {
  const beautifiedChoices = {};
  Decisions.forEach(decision => {
    const key = decision.label;
    const option = decision.options.find(
      option => option.index === chosen[decision.label]
    );
    if (option) {
      beautifiedChoices[key] = option.optionName;
    }
  });
  return beautifiedChoices;
};

export const extractOption = (decision: string, chosen: ChosenOptions) => {
  const decisionInQuestion: Decision = Decisions.find(
    desc => desc.label === decision
  )!;

  const option = decisionInQuestion.options.find(
    (option: Option) => option.index === chosen[decision]
  );

  return option;
};

export const extractLabel = (decision: string, chosen: ChosenOptions) => {
  try {
    const option = extractOption(decision, chosen);

    const label = option ? option.label : null;

    if (!label) {
      throw new Error("Label not extracted");
    }

    return label;
  } catch (e) {
    const message = "Decison not found";
    console.error(message, e);
    throw new Error(message);
  }
};

export const extractOptionName = (decision: string, chosen: ChosenOptions) => {
  try {
    const option = extractOption(decision, chosen);

    const optionName = option ? option.optionName : null;

    if (!optionName) {
      throw new Error("optionName not extracted");
    }

    return optionName;
  } catch (e) {
    const message = "Decison not found";
    console.error(message, e);
    throw new Error(message);
  }
};

export const getProduct = (products: any[], chosen: ChosenOptions) => {
  // console.log("Products", products);
  // console.log("chosen", chosen);
  const chosenSizeLabel = extractLabel("size", chosen);
  // console.log("chosenSizeLabel", chosenSizeLabel);
  const chosenModelLabel = chosen.model ? extractLabel("model", chosen) : null;
  // console.log("chosenModelLabel", chosenModelLabel);

  /* The products on shopify need to be named: 
      12
      13-retina
      13-touch-bar
      15-retina
      15-touch-bar
  */

  const productTitle = `${chosenSizeLabel}${
    chosenModelLabel ? ` ${chosenModelLabel}` : ""
  }`;
  // console.log("TITLEEL", productTitle);

  const chosenProduct = products.find(
    product => product.title === productTitle
  );
  console.log("ChosenProduct", chosenProduct);

  return chosenProduct;
};

export interface ChosenVarientInterface {
  logo: string;
  colour: string;
  storage: string;
}

export const findAllOfMatchedOption = (
  variants: any[],
  name: string,
  value: string
) => {
  const matchedChoices: any[] = [];

  variants.forEach((variant: any) => {
    variant.selectedOptions.forEach((option: any) => {
      if (
        option.name.toLowerCase() === name.toLowerCase() &&
        option.value.toLowerCase() === value.toLowerCase()
      ) {
        matchedChoices.push(variant);
      }
    });
  });
  return matchedChoices;
};

export const matchSelectedVarient = async (
  varients: any,
  chosenVariant: ChosenVarientInterface
) => {
  const rightLogos = await findAllOfMatchedOption(
    varients,
    "logo",
    chosenVariant.logo
  );

  const rightLogosAndColours = await findAllOfMatchedOption(
    rightLogos,
    "colour",
    chosenVariant.colour
  );

  const rightLogosColoursAndStorage = await findAllOfMatchedOption(
    rightLogosAndColours,
    "storage",
    chosenVariant.storage
  );

  return rightLogosColoursAndStorage;
};

export const getVariant = async (products: any[], chosen: ChosenOptions) => {
  const chosenProduct = getProduct(products, chosen);
  console.log("chosen hereeee", chosenProduct);

  const chosenLogoOptionName = extractOptionName("logo", chosen);
  // console.log("chosenSizeOptionName", chosenLogoOptionName);
  const chosenColourOptionName = extractOptionName("colour", chosen);
  // console.log("chosenColourhOptionName", chosenColourOptionName);
  const chosenStorageOptionName = extractOptionName("storage", chosen);
  // console.log("chosenStorageOptionName", chosenStorageOptionName);

  const chosenVariant: ChosenVarientInterface = {
    logo: chosenLogoOptionName,
    colour: chosenColourOptionName,
    storage: chosenStorageOptionName
  };

  console.log("chosenVariant", chosenVariant);
  const variations = chosenProduct.variants;

  console.log("variations", variations);
  const chosenShopifyVariant: any = await matchSelectedVarient(
    variations,
    chosenVariant
  );

  console.log("chosenShopifyVariant", chosenShopifyVariant);

  return chosenShopifyVariant[0].id;
};
