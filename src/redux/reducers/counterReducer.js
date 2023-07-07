const initialState = {
  name: 'Counter',
  counter: 0,
}


const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'DECREMENT_COUNTER':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'RESET_COUNTER':
      return {
        ...state,
        counter: 0,
      };
    case 'SET_COUNTER_VALUE':
      return {
        ...state,
        counter: parseInt(action.payload),
      };
    case 'SET_COUNTER_NAME':
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;