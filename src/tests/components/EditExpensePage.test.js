import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from "../fixtures/expenses";

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
 startRemoveExpense = jest.fn();
 startEditExpense = jest.fn();
 history = { push: jest.fn() };
 wrapper = shallow(<EditExpensePage
   startEditExpense={startEditExpense}
   history={history}
   startRemoveExpense={startRemoveExpense}
   expense={expenses[1]}
 />);
})

test("Should render editExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
})

test("Should handle startEditExpense", () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
})

test("Should handle startRemoveExpense", () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[1].id});
})
