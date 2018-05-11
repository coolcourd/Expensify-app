import authReducer from '../../reducers/auth';

test('Should return a uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: '143'
  };
  const state = authReducer(undefined, action);
  expect(state).toEqual({uid:'143'});
});

test('Should return no uid for logout', () => {
  const action = {
    type: 'LOGOUT',
  };
  const state = authReducer({uid:'143'}, action);
  expect(state).toEqual({});
});
