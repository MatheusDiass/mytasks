import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';

//Screens
import LoginScreen from './screen/LoginScreen';
import AddTaskScreen from './screen/AddTaskScreen';
import AddGroupScreen from './screen/AddGroupScreen';
import FriendsScreen from './screen/FriendsScreen';

function Router() {
  return (
    <BrowserRouter>
      <Menu />
      <Header />
      <Routes>
        <Route element={<LoginScreen />} path="/" />
        <Route element={<AddTaskScreen />} path="addtask" />
        <Route element={<AddGroupScreen />} path="addgroup" />
        <Route element={<FriendsScreen />} path="/friends" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
