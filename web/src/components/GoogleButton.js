import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const GoogleButton = () => {
  
  const clientId = '906642422248-rcirekvpmq69ho3p837vlmk6uo8ip81t.apps.googleusercontent.com';
  const navigate = useNavigate();
  const handleGoogleLoginSuccess = async (response) => {
    const info = jwtDecode(response.credential);
    console.log('info = ', info);
    
    const serverResponse = await axios.post("http://localhost:8080/oauth2/authorization/google");
    console.log('serverResponse = ',serverResponse);
  }
  const handleGoogleLoginFail = async (response) => {
    console.log('Google Login Failed');
  }

  return (


    <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          buttonText="Login"
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginFail}
        />
      </GoogleOAuthProvider>
    
  );
};
export default GoogleButton;