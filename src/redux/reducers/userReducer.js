const initialState = {
      user: null,
      loading: true,
      error: null,
    };
    
    const userReducer = (state = initialState, action) => {
      switch (action.type) {
        case "REGISTER_SUCCESS":
        case "LOGIN_SUCCESS":
          return { ...state, user: action.payload, loading: false, error: null };
        case "REGISTER_FAILURE":
        case "LOGIN_FAILURE":
          return { ...state, user: null, loading: false, error: action.payload };
        case "LOGOUT":
          return { ...state, user: null, loading: false, error: null };
        default:
          return state;
      }
    };
    
    export default userReducer;