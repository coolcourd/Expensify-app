import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from "../fixtures/expenses";

let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
 startRemoveExpense = jest.fn();
 editExpense = jest.fn();
 history = { push: jest.fn() };
 wrapper = shallow(<EditExpensePage
   editExpense={editExpense}
   history={history}
   startRemoveExpense={startRemoveExpense}
   expense={expenses[1]}
 />);
})

test("Should render editExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
})

test("Should handle editExpense", () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
})

test("Should handle startRemoveExpense", () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[1].id});
})
