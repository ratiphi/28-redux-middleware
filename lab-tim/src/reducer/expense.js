let initialState = {};

let expenseValidate = (expense) => {
  let {id, categoryId, name, price, timestamp} = expense;
  if(!id || !categoryId || !name || !price || !timestamp) {
    throw new Error('VALIDATION FAILED: Expense must contain id, categoryId, name, price, and timestamp.');
  }
};

let categoryValidate = (category) => {
  let {id, title, timestamp} = category;
  if(!id || !title || !timestamp) {
    throw new Error('VALIDATION FAILED: Category must contain id, title, and timestamp.');
  }
};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch (type) {
  case 'CATEGORY_CREATE':
    console.log('EXPENSE: CATEGORY_CREATE', payload);
    return {...state, [payload.id]: []};

  case 'CATEGORY_DELETE':
    return {...state, [payload.id]: undefined};

  case 'EXPENSE_CREATE': {
    // categoryValidate(payload);
    // line below is same thing as let categoryId = payload.categoryId;
    let {categoryId} = payload;
    let categoryExpenses = state[categoryId];
    return {...state, [categoryId]: [...categoryExpenses, payload]};
  }

  case 'EXPENSE_UPDATE': {
    console.log('EXPENSE_UPDATE', payload);
    // let {categoryId} = payload;
    // let categoryExpenses = state[categoryId];
    // return {...state, [categoryId]: categoryExpenses.map((expense) => expense.id === payload.id ? payload : expense)};
    let updateState = state;
    let {categoryId} = payload;
    updateState[categoryId] = updateState[categoryId].map((expense) => {
      if (expense.id === payload.id) expense = payload;
      return expense;
    });
    return {...updateState};
  }

  case 'EXPENSE_DELETE': {
    let {categoryId} = payload;
    let categoryExpenses = state[categoryId];
    return {...state, [categoryId]: categoryExpenses.filter((expense) => expense.id !== payload.id)};
  }

  default:
    return state;
  }
};
