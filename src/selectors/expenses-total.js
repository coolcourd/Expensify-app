import numeral from "numeral";

export default (expenses) => {
  return numeral((expenses
    .map(x => x.amount)
    .reduce((a, b) => a + b, 0))/100)
    .format("$0,0.00");
}
