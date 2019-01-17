import {combineReducers} from 'redux';
import {reducer as reducerForm} from 'redux-form';
import saveResult from './SaveReducer';
import loadInitialData from './loadInitialData';

const rootReducer = combineReducers({
  form: reducerForm,
  updateData: saveResult,
  loadinitial: loadInitialData,
});

export default rootReducer;
