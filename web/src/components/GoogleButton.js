import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import LogoutButton from './LogoutButton.js';
import { getCookie } from "./Cookies.js";

const GoogleButton = () => {

  const clientId = '906642422248-rcirekvpmq69ho3p837vlmk6uo8ip81t.apps.googleusercontent.com';
  const handleGoogleLoginSuccess = (response) => {
    const info = jwtDecode(response.credential);
    console.log('info = ', info);

    const oauth2Url = "http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:8080/oauth2/redirect";
    window.location.href = oauth2Url;

  }
  const handleGoogleLoginFail = (response) => {
    console.log('Google Login Failed');
  }

  return (

    <GoogleOAuthProvider clientId={clientId}>
      {console.log('accessToken = ', getCookie("accessToken"))}
      {getCookie("accessToken") == null ? (
        <GoogleLogin
          buttonText="Login"
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginFail}
        />) : (
        <LogoutButton
          clientId="구글 OAuth 클라이언트 ID"
          buttonText="로그아웃"
        />)}
    </GoogleOAuthProvider>

  );
};
export default GoogleButton;