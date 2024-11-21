import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null)
  };

  const handleButtonClick = (e) => {
    //validate the form data
    // checkValidData(email, password);
    // console.log(email.current.value);
    // console.log(password.current.value);
    let message;
    if (!isSignInForm) {
      message = checkValidData(
        name.current.value,
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
    } else {
      message = checkValidData(
        null,
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
    }
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg"
          alt="background-image"
        />
      </div>
      <form
        className="bg-black p-12 absolute w-1/3 my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter your name"
            className="p-4 my-2 w-full  bg-gray-800 rounded-md bg-opacity-80"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter your email"
          className="p-4 my-2 w-full  bg-gray-800 rounded-md bg-opacity-80"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter your password"
          className="p-4 my-2 w-full  bg-gray-800 rounded-md bg-opacity-80"
        />
        <p className="text-red-600 font-bold py-2">{errorMessage}</p>
        <button
          className="bg-red-700 w-full p-4 my-4 rounded-md bg-opacity-80"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="py-4">
            New to Netflix?{" "}
            <strong className="cursor-pointer" onClick={toggleSignInForm}>
              Sign up now.
            </strong>
          </p>
        ) : (
          <p className="py-4">
            Already a user?{" "}
            <strong className="cursor-pointer" onClick={toggleSignInForm}>
              Sign in now.
            </strong>
          </p>
        )}
      </form>
    </>
  );
};

export default Login;
