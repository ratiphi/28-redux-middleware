import uuid from 'uuid/v4';

export const expenseCreate = (expense) => {
  expense.id = uuid();
  expense.timestamp = new Date();
  // expense.name = '';
  // expense.price = 0;
  // expense.categoryId = null;
  return {
    type: 'EXPENSE_CREATE',
    payload: expense,
  };
};

export const expenseInsert = (expense) => {
  return {
    type: 'EXPENSE_CREATE',
    payload: expense,
  };
};

export const expenseUpdate = (expense) => {
  return {
    type: 'EXPENSE_UPDATE',
    payload: expense,
  };
};

export const expenseDelete = (expense) => {
  return {
    type: 'EXPENSE_DELETE',
    payload: expense,
  };
};
