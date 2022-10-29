import { baseXToDecimal, decimalToBaseX } from "./decimal";

export const octalToBaseX = (value: string, base: string) => {
  const decimalValue = baseXToDecimal(value, "8");

  switch (base) {
    case "2":
      return decimalToBaseX(decimalValue, "2");
    case "10":
      return decimalValue;
    case "16":
      return decimalToBaseX(decimalValue, "16");
  }
};
