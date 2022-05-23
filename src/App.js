import "./assets/sass/app.sass";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

function App() {
  return <div className="App">
    <Menu />
    <Header />
    <Footer />
  </div>;
}

export default App;
