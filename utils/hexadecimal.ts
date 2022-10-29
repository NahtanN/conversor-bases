import { baseXToDecimal, decimalToBaseX } from "./decimal";

export const hexadecimalToBaseX = (value: string, base: string) => {
  const decimalValue = baseXToDecimal(value, "16");

  switch (base) {
    case "2":
      return decimalToBaseX(decimalValue, "2");
    case "8":
      return decimalToBaseX(decimalValue, "8");
    case "10":
      return decimalValue;
  }
};
