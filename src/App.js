import "./assets/sass/app.sass";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

//Routes
import Router from "./router";

function App() {
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
