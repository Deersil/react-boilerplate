import { createAction } from 'redux-act';
/**
 * Creates action object
 *
 * @param  {string} moduleName A name of the module
 *
 * @return {function} A function that receives action name as a string and returns actions
 */
const createApiAction = moduleName => name => ({
  cancel: createAction(`${moduleName}:${name}::CANCEL`),
  failure: createAction(`${moduleName}:${name}::FAILURE`),
  fromState: createAction(`${moduleName}:${name}::FROM_STATE`),
  request: createAction(`${moduleName}:${name}::REQUEST`),
  success: createAction(`${moduleName}:${name}::SUCCESS`),
  throttle: createAction(`${moduleName}:${name}::THROTTLE`),
});

export default createApiAction;
