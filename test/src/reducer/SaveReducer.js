import {UPDATE_REQUEST_SUCCESS} from '../action/SaveActions';

const INITIAL_STATE = {
  saveResult: {result: [], error: null, loading: false},
};

export default function(state = {result: [], isLoading: false}, action) {
  switch (action.type) {
    // case UPDATE_REQUEST:
    //     return { ...state, saveResult: { result: action.payload, error: null, authenticated: false, loading:true } };
    case UPDATE_REQUEST_SUCCESS:
      return {...state, result: action.payload, loading: false};
    // case UPDATE_REQUEST_ERROR:
    //     return { ...state, saveResult: { error: action.payload, authenticated: false, loading:false } };
    // case UPDATE_REQUEST_UNLOADED:
    //     return { ...state, saveResult: { result: [], error: null, authenticated: false, loading:false } };
  }
  return state;
}
