import "./footer.sass";
import { Context } from "../../context/GlobalData";

//Hooks
import { useContext, useEffect } from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const { LoginStatus } = useContext(Context);

  useEffect(() => {
    LoginStatus.checkLogin();
  }, [LoginStatus]);

  if (LoginStatus.loginStatus) {
    return (
      <footer className="footer">
        <p>MyTasks @ {currentYear}</p>
      </footer>
    );
  } else {
    return <></>;
  }
}

export default Footer;
