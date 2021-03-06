import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils.js';

export default function AuthPage({ setUser }) {
  // you'll need to track the form state of the email and password
  const [signEmail, setSignEmail] = useState('');
  const [signPassword, setSignPassword] = useState('');


  async function handleSignIn(e) {
    e.preventDefault();
      
    // sign the user in using the form state
    const signInUser = await signIn(signEmail, signPassword);
    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, this should automatically redirect the user to the board game list
    setUser(signInUser);
  }
  
  async function handleSignUp() {

    // sign the user up using the form state
    const signUpUser = await signUp(signEmail, signPassword);
    
    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, this should automatically redirect the user to the board game list
    setUser(signUpUser);
  }

  return (
    <div className='auth'>
      <h1><em>Boardzo</em></h1>
      {/* on submit, sign the user in using the function defined above */}
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
            Email
          {/* on change, update the form state for email */}
          <input value={signEmail} onChange={(e) => setSignEmail(e.target.value)} required type="email" name="email" />
        </label>
        <label>
            Password
          {/* on change, update the form state for password */}
          <input value={signPassword} onChange={(e) => setSignPassword(e.target.value)} required type="password" name="password" />
        </label>
        <button onClick={handleSignIn}>Sign In</button>
        {/* on clicking sign up, sign the user up using the function defined above */}
        <button onClick={handleSignUp} type="button" >Sign Up</button>
      </form>
    </div>
  );
}
