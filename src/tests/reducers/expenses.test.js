import expensesReducer from '../../reducers/expenses.js';
import expenses from '../fixtures/expenses.js';

test('Should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('Should remove expense that matches provided id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1], expenses[2]]);
});

test('Should not remove any expense if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '13'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should add a new expense', () => {
  const expense = {
    id: '4',
    description: 'dogfood',
    note: 'sdfasdf',
    amount: 2323,
    createdAt: 200
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});


test('Should edit expense that matches provided id', () => {
  const amount = 125222
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(125222);
});

test('Should not edit expense with bad id', () => {
  const amount = 125222
  const action = {
    type: 'EDIT_EXPENSE',
    id: '541',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
     expenses: [expenses[1]]
   }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
