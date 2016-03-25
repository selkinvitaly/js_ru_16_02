export default store => next => action => {
  const { ...args } = action;

  return next({ ...args, generatedId: Date.now() });
};
