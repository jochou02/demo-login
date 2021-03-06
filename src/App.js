import { useEffect, useState } from "react";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import './App.css';
import {auth} from './firebase-config'

function App() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({})

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [])

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth, 
        registerEmail, 
        registerPassword
      );
      console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth, 
        loginEmail, 
        loginPassword
      );
      console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  }

  const logout = async () => {

    await signOut(auth);
  }

  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input 
          value={registerEmail}
          placeholder="Email" 
          onChange={(event) => {
            setRegisterEmail(event.target.value)
          }}
        />
        <input 
          value={registerPassword}
          placeholder="Password" 
          onChange={(event) => {
            setRegisterPassword(event.target.value)
          }}
        />

        <button onClick={register}>Create User</button>
      </div>

      <dive>
        <h3> Login </h3>
        <input 
          value={loginEmail}
          placeholder="Email" 
          onChange={(event) => {
            setLoginEmail(event.target.value)
          }}
        />
        <input 
          value={loginPassword}
          placeholder="Password" 
          onChange={(event) => {
            setLoginPassword(event.target.value)
          }}
        />

        <button onClick={login}>Login</button>
      </dive>

      <h4> User Logged In: </h4>
      {user ? user.email : "Not Logged In"}

      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default App;
