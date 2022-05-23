//Images
import profile from "../../assets/images/profile.png";

function Avatar() {
  return (
    <img
      className="avatar avatar--circular"
      src={profile}
      alt="Imagem de Perfil"
    />
  );
}

export default Avatar;
