//Components
import Avatar from "../../Avatar/Avatar";

function MenuProfile() {
  return (
    <div className="nav__profile">
      <div className="nav__profile__image">
        <Avatar />
      </div>
      <a href="/" className="nav__profile__link">
        Ver Perfil
      </a>
      <a href="/" className="nav__profile__link">
        Sair
      </a>
    </div>
  );
}

export default MenuProfile;
