import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses.js";

test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe("$0.00");
});

test('should correctly add up a single expense', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toBe("$1.95");
});

test('should correctly add multiple expenses', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe("$1,141.95");
});
