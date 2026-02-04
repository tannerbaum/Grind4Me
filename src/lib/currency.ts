import Big from "big.js";

Big.DP = 2;
Big.RM = Big.roundHalfEven;

export const toCents = (amount: number) => {
  return Number(new Big(amount).times(100).toFixed(0));
};

export const fromCents = (cents: number) => {
  return Number(new Big(cents).div(100).toFixed(2));
};

export const toCurrencyFromCents = (cents: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(fromCents(cents));
};
