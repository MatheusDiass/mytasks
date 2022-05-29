import api from "../../api";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/GlobalData";

//Hooks
import { useContext, useState } from "react";

//Components
import Button from "../Buttons/Button";

//Helpers
import { setCookie } from "../../helpers/cookieManager";

function LoginForm() {
  const { LoginStatus } = useContext(Context);
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  //Faz o login
  async function login() {
    try {
      const { data } = await api.post("/login", user);
      setCookie("user", data);
      LoginStatus.checkLogin();
      navigate("/addtask");
    } catch (error) {
      console.log(error);
    }
  }

  function handleEmail({ target: { value } }) {
    setUser({ ...user, email: value });
  }

  function handlePassword({ target: { value } }) {
    setUser({ ...user, password: value });
  }

  return (
    <form className="form">
      <label for="email" className="form__label">
        Email:
      </label>
      <input
        className="input input--icon input--user"
        id="email"
        type={"text"}
        value={user.email}
        onChange={handleEmail}
      />

      <label for="password" className="form__label">
        Senha:
      </label>
      <input
        className="input input--icon input--password"
        id="password"
        type={"password"}
        value={user.password}
        onChange={handlePassword}
      />

      <Button text={"Login"} click={login} />
    </form>
  );
}

export default LoginForm;
