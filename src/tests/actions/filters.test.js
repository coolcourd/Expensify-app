import {
  setStartDate,
  setEndDate,
  sortbyAmount,
  sortbyDate,
  setTextFilter
} from '../../actions/filters';
import moment from 'moment';


test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test("should generate set end date action object",()=>{
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test("Should generate sort by Amount action object",()=>{
  expect(sortbyAmount()).toEqual({type: 'SORT_BY_AMOUNT'});
});

test("Should generate sort by Date action object",()=>{
  expect(sortbyDate()).toEqual({type: 'SORT_BY_DATE'});
});

test("Should generate set Text Filter action object with default text value",()=>{
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test("Should generate set Text Filter action object with custom text value",()=>{
  const action = setTextFilter('1qaz');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '1qaz'
  });
});
