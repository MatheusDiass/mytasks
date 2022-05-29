import './assets/sass/app.sass';

//Components
import { GlobalData } from './context/GlobalData';
import Footer from './components/Footer/Footer';

//Helpers
//import checkLogin from "./helpers/checkLogin";

//Routes
import Router from './router';

function App() {
  return (
    <GlobalData>
      <div className="App">
        <Router />
        <Footer />
      </div>
    </GlobalData>
  );
}

export default App;
