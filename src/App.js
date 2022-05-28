import "./assets/sass/app.sass";

//Hooks
import { useEffect } from "react";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

//Helpers
import { getCookie } from "./helpers/cookieManager";

//Routes
import Router from "./router";

function App() {
  let isLoggedIn = false;

  function checkLogin() {
    const user = getCookie("user");

    if(user) {
      isLoggedIn = true;
    }
  }

  useEffect(() => {
    checkLogin();
    console.log(isLoggedIn);
  });

  return (
    <div className="App">
      <Menu />
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
