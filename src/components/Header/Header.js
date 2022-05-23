import "./header.sass";

//Icons
import Icon from "@mdi/react";
import { mdiConsoleNetworkOutline, mdiMenu } from "@mdi/js";

function Navbar() {
  function showMenu() {
    var display = document.getElementById("nav").style.display;
    if(display == "none")
        document.getElementById("nav").style.display = 'block';
    else
        document.getElementById("nav").style.display = 'none';
}
  
  return (
    <header className="header">
      <button className="header__menu" onClick={showMenu}>
        <Icon path={mdiMenu} size={1.3} />
      </button>
      <p>MyTasks</p>
    </header>
  ); 
}

export default Navbar;
