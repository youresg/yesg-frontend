import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

const GoogleButton = () => {

  const clientId = '906642422248-rcirekvpmq69ho3p837vlmk6uo8ip81t.apps.googleusercontent.com';
  const handleGoogleLoginSuccess = async (response) => {
    const info = jwtDecode(response.credential);
    console.log('info = ', info);
    
    const oauth2Url = "http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:8080/oauth2/redirect";
    window.location.href = oauth2Url;

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