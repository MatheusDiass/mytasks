import { useState } from "react";
import { getCookie } from "../../helpers/cookieManager";

function useLoginStatus() {
  const [loginStatus, setLoginStatus] = useState(false);

  const checkLogin = () => {
    let isLoggedIn = false;
    const user = getCookie("user");

    if (user) {
      isLoggedIn = !isLoggedIn;
    }

    setLoginStatus(isLoggedIn);
  };

  return { loginStatus, checkLogin };
}

export default useLoginStatus;
