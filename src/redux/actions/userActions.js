// src/redux/actions/userActions.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig.js";
export const register = (email, password) => {
  return (dispatch) => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "REGISTER_SUCCESS", payload: user });
      })
      .catch((error) => {
        dispatch({ type: "REGISTER_FAILURE", payload: error.message });
      });
  };
};

export const login = (email, password) => {
  return (dispatch) => {
      signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILURE", payload: error.message });
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};