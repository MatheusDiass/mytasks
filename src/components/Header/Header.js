import "./header.sass";
import { Context } from "../../context/GlobalData";

//Hooks
import { useContext, useEffect } from "react";

//Icons
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

//Helpers
import showNav from "../../helpers/showNav";

function Navbar() {
  const { LoginStatus } = useContext(Context);

  useEffect(() => {
    LoginStatus.checkLogin();
  }, [LoginStatus]);

  if (LoginStatus.loginStatus) {
    return (
      <header className="header">
        <button className="header__menu" onClick={showNav}>
          <Icon path={mdiMenu} size={1.3} />
        </button>
        <p>MyTasks</p>
      </header>
    );
  } else {
    return <></>;
  }
}

export default Navbar;
