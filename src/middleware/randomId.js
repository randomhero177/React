export default store =>  next => action => {
  if(!action.generateId) return next(action);

  const randomId = 'a' + Math.random().toString() + Math.random().toString();
  next({
    ...action,
    randomId: randomId
  });
}
