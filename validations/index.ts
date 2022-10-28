export type BaseType = "2" | "8" | "10" | "16";

export const validateBaseRules = (value: string, base: BaseType) => {
  let rules: string[];

  switch (base) {
    case "2":
      rules = ["0", "1"];
      break;
    case "8":
      rules = ["0", "1", "2", "3", "4", "5", "6", "7"];
      break;
    case "10":
      rules = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      break;
    case "16":
      rules = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "F",
      ];
      break;
  }

  if (rules.includes(value.toUpperCase())) {
    return true;
  }

  return false;
};
