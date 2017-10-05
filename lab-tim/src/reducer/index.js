import {combineReducers} from 'redux';

import expenseReducer from './expense.js';
import categoryReducer from './category.js';

export default combineReducers({
  categories: categoryReducer,
  expenses: expenseReducer,
});
