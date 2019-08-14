export interface ChosenOptions {
  size: number;
  model: number;
  logo: number;
  colour: number;
  storage: number;
}

export const defaultChoice: ChosenOptions = {
  size: 0,
  model: 0,
  logo: 0,
  colour: 0,
  storage: 0
};

export interface Decision {
  index: number;
  title: string;
  label: string;
  description: string;
  options: Option[];
  tiles: boolean;
}

export interface Option {
  index: number;
  optionName: string;
  label: string;
  price?: number;
  hex?: string;
}

export const sizeDecision: Decision = {
  index: 1,
  title: "Size",
  label: "size",
  description: "",
  options: [
    {
      index: 1,
      label: 'CaseX for 12" Macbook',
      optionName: "12-inch Display"
      // price: 180
    },
    {
      index: 2,
      label: 'CaseX for 13"',
      optionName: "13-inch Display"
      // price: 200
    },
    {
      index: 3,
      label: 'CaseX for 15"',
      optionName: "15-inch Display"
      // price: 250
    }
  ],
  tiles: false
};

export const modelDecision: Decision = {
  index: 2,
  title: "Model",
  label: "model",
  description: "",
  options: [
    { index: 1, label: "Retina Macbook Pro", optionName: "Retina" },
    {
      index: 2,
      label: "Touch Bar Macbook Pro",
      optionName: "Touch Bar"
    }
  ],
  tiles: true
};

export const logoDecision: Decision = {
  index: 3,
  title: "Logo Material",
  label: "logo",
  description: "",
  options: [
    { index: 1, label: "black", optionName: "Black Steel" },
    { index: 2, label: "white", optionName: "White Steel" },
    { index: 3, label: "steel", optionName: "Brushed Steel" },
    {
      index: 4,
      label: "gold",
      optionName: "24ct Gold Plated",
      price: 40
    }
  ],
  tiles: true
};

export const colourDecision: Decision = {
  index: 4,
  title: "Finish",
  label: "colour",
  description: "",
  options: [
    { index: 1, label: "black", optionName: "Charcoal Black", hex: "#262520" },
    { index: 2, label: "white", optionName: "Off White", hex: "#FBF5E7" }
    // { index: 3, label: "blue", optionName: "Midnight Blue", hex: "red" },
    // { index: 4, label: "coral", optionName: "Coral", hex: "red" },
    // { index: 5, label: "maroon", optionName: "Astec Maroon", hex: "red" }
  ],
  tiles: true
};

export const storageDecision: Decision = {
  index: 5,
  title: "Storage",
  label: "storage",
  description: "",
  options: [
    { index: 1, label: "256GB", optionName: "256GB", price: 159 },
    { index: 2, label: "512GB", optionName: "512GB", price: 229 },
    { index: 3, label: "1TB", optionName: "1TB", price: 319 }
  ],
  tiles: true
};

export const Decisions: Decision[] = [
  sizeDecision,
  modelDecision,
  logoDecision,
  colourDecision,
  storageDecision
];

// export const SortedDecisions = Decisions.sort((decision => decis )
