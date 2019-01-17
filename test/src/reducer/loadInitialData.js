import {LOAD_REQUEST, LOAD_REQUEST_SUCCESS} from '../action/loadDataActions';

const INITIAL_STATE = {
  loadData: {result: [], error: null, loading: false},
  // userResult: { result: [], error: null,loading:false }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_REQUEST:
      return {...state, loadData: {result: [], error: null, loading: true}};
    case LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        loadData: {result: action.payload, error: null, loading: false},
      };
    // case LOAD_REQUEST_ERROR:
    //     return { ...state, userResult: { error: action.payload, authenticated: false, loading:false } };
    // case LOAD_REQUEST_UNLOADED:
    //     return { ...state, userResult: { result: [], error: null, authenticated: false, loading:false } };
  }
  return state;
}
