import { ChosenOptions, Decision } from "./choices";

export const calculateIndividualPrice = (
  choice: string,
  Decisions: Decision[],
  chosen: ChosenOptions
): number => {
  const price = chosen[choice]
    ? Decisions.find(decision => decision.label === choice)!.options.find(
        option => option.index === chosen[choice]
      )!.price
    : 0;

  return price ? price : 0;
};

export const calculateOverallPrice = (
  Decisions: Decision[],
  chosen: ChosenOptions
) => {
  let price: number = 0;
  Object.keys(chosen).forEach(key => {
    price += calculateIndividualPrice(key, Decisions, chosen);
  });
  return price;
};
