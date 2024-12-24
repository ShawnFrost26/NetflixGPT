import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, user_avatar } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch()

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  const handleButtonClick = (e) => {
    //validate the form data
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
    if (message) return;

    //sign in and sign up logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: user_avatar,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // Profile updated!
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover md:h-full"  
          src={BG_URL}
          alt="background-image"
        />
      </div>
      <form
        className="w-full bg-black p-12 mt-20 absolute md:w-1/3 md:my-36 md:mx-auto right-0 left-0 text-white rounded-md bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-xl md:text-3xl md:py-4">
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
          <p className="py-2  md:py-4">
            New to Netflix?{" "}
            <strong className="cursor-pointer" onClick={toggleSignInForm}>
              Sign up now.
            </strong>
          </p>
        ) : (
          <p className="py-2 md:py-4">
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
