export default store => next => action => {
  console.log('__ACTION__', action);

  try {
    let result = next(action);
    console.log('__REPORTER_STATE__', store.getState());
    console.log('__REPORTER_STORE__', store);

    return result;
  } catch(e) {
    e.action = action;
    console.error('__ERROR__', e);
    return e;
  }
};
