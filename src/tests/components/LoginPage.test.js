import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../components/LoginPage';

test('Should render login page correctly', () => {
const wrapper = shallow(<Login />);
expect(wrapper).toMatchSnapshot();
});

test('Should call startLogin on button click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<Login startLogin={startLogin}/>);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});
