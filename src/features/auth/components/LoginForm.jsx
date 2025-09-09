import Button from "../../../ui/Button";
import AuthForm from "./AuthForm";
import { useReducer } from "react";
import { NavLink } from "react-router";

//Initial state for reducer function
const initialState = {
  email: "test@example.cl",
  username: "",
  password: "test123",
  error: null,
  isLoading: false,
};

//Action types
const FETCH_START = "FETCH_START";
const FETCH_ERROR = "FETCH_ERROR";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const HANDLE_INPUT_CHANGE = "HANDLE_INPUT_CHANGE";

//Action creators (To dispatch)
const handleInputEmail = (event) => ({
  type: "HANDLE_INPUT_CHANGE",
  field: "email",
  value: event.target.value,
});

const handleInputUsername = (event) => ({
  type: "HANDLE_INPUT_CHANGE",
  field: "username",
  value: event.target.value,
});

const handleInputPassword = (event) => ({
  type: "HANDLE_INPUT_CHANGE",
  field: "password",
  value: event.target.value,
});

const fetchStart = () => ({ type: "FETCH_START" });

const fetchSuccess = () => ({ type: "FETCH_SUCCESS" });

const fetchError = (error) => ({ type: "FETCH_ERROR", payload: error });

//Reducer function
function reducer(state, action) {
  switch (action.type) {
    case HANDLE_INPUT_CHANGE: {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case FETCH_START: {
      return { ...state, isLoading: true, error: null };
    }
    case FETCH_SUCCESS: {
      return { ...state, isLoading: false, error: null };
    }
    case FETCH_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
  }
}

export default function LoginForm({ mode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { email, username, password, error } = state;

  function handleSubmit(e) {
    e.preventDefault();

    if (!/^[a-zA-Z0-9]*$/.test(username)) {
      return;
    }
  }

  return (
    <AuthForm onSubmit={handleSubmit}>
      <div className="flex py-4 text-purple-400">
        <NavLink to="/register">Haven't registered yet?</NavLink>
      </div>
      <Button
        width={"w-45"}
        borderColor={"border-purple-300"}
        textColor={"text-purple-600"}
        hoverBgColor={"hover:bg-purple-300"}
        hoverTextColor={"hover:text-white"}
      >
        Login
      </Button>
    </AuthForm>
  );
}
