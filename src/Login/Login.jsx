import './Login.css';
import { useRef } from 'react';


function Login({onLogin}) {

  const userRef = useRef();
  const pinRef = useRef();


  const handleLogin = (e) => {
    e.preventDefault();
    const user = userRef.current.value;
    const pin = pinRef.current.value;
    onLogin(user, pin);
  };

  return (
    <form className="login">
      <input
        type="text"
        placeholder="user"
        className="login__input login__input--user"
        ref={userRef}
      />
      <input
        type="text"
        placeholder="PIN"
        maxLength="4"
        className="login__input login__input--pin"
        ref={pinRef}
      />
      <button className="login__btn" onClick={handleLogin}>&rarr;</button>
    </form>
  );
}

export default Login;