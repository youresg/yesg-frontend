import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setCookie } from './Cookies';

const Redirection = () => {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const accessToken = urlParams.get("accessToken");
    console.log("Access Token:", accessToken);
    
    // Access Token Cookie에 저장  
    setCookie("accessToken", accessToken);  

    const navigateToHome = async () => {
      await navigate("/home");
    };

    navigateToHome();    
    
  }, [location.search]);

  return <div>Loading ...</div>;
  
};

export default Redirection;
