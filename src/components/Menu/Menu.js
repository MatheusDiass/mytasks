//Components
import MenuProfile from "./components/MenuProfile";
import MenuList from "./components/MenuList";

//Icons
import Icon from "@mdi/react";
import { mdiArrowLeftCircleOutline } from '@mdi/js';

//Helpers
import showNav from "../../helpers/showNav";

function Menu() {
  return (
    <nav className="nav">
      <span className="nav__back" onClick={showNav}>
        <Icon path={mdiArrowLeftCircleOutline} size={1.3} />
      </span>
      <MenuProfile />
      <MenuList />
    </nav>
  );
}

export default Menu;
