import "./header.sass";

//Icons
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

//Helpers
import showNav from "../../helpers/showNav";

function Navbar() {
  return (
    <header className="header">
      <button className="header__menu" onClick={showNav}>
        <Icon path={mdiMenu} size={1.3} />
      </button>
      <p>MyTasks</p>
    </header>
  );
}

export default Navbar;
