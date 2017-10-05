import uuid from 'uuid/v4';

export const categoryCreate = (category) => {
  // category.id = uuid();
  // category.name = '';
  // category.budget = 0;
  // category.timestamp = new Date();
  return {
    type: 'CATEGORY_CREATE',
    payload: {...category, id: uuid(), timestamp: new Date()},
  };
};

export const categoryUpdate = (category) => {
  return {
    type: 'CATEGORY_UPDATE',
    payload: category,
  };
};

export const categoryDelete = (category) => {
  return {
    type: 'CATEGORY_DELETE',
    payload: category,
  };
};
