import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

function GoogleLogin() {
  const [ user, setUser ] = useState({});

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }
  
  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

// useEffect hook empty array only runs this hook once
useEffect(()=> {
  /* global google */
  google.accounts.id.initialize({
    client_id: "166936624430-1nr0vphagnjt07c4mmbcg4cnjmeiro10.apps.googleusercontent.com",
    callback: handleCallbackResponse

  });

  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    { theme: "outline", size: "large"}
  );

  google.accounts.id.prompt();
},[]);
// If we have no user: show sign in button
// If we have a user: show logout button
  return (
    <div >
    <div >
      <div id="signInDiv"></div>
      { Object.keys(user).length !== 0 &&
      <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
      }

      { user &&
      <div>
        <h3>{user.name}</h3>
        </div>
        }
    </div>
    </div>
  );
}

export default GoogleLogin;