import "./assets/sass/app.sass";

//Components
import { GlobalData } from "./context/GlobalData";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

//Helpers
//import checkLogin from "./helpers/checkLogin";

//Routes
import Router from "./router";

function App() {
  return (
    <GlobalData>
      <div className="App">
        <Menu />
        <Header />
        <main>
          <Router />
        </main>
        <Footer />
      </div>
    </GlobalData>
  );
}

export default App;
