import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';

//Screens
import LoginScreen from './screen/LoginScreen';
import AddTaskScreen from './screen/Task/AddTaskScreen';
import TaskListScreen from './screen/Task/TaskListScreen';
import EditTaskScreen from './screen/Task/EditTaskScreen';
import AddGroupScreen from './screen/Group/AddGroupScreen';
import FriendsScreen from './screen/FriendsScreen';
import GroupListScreen from './screen/Group/GroupListScreen';

function Router() {
  return (
    <BrowserRouter>
      <Menu />
      <Header />
      <Routes>
        <Route element={<LoginScreen />} path="/" />
        <Route element={<AddTaskScreen />} path="/addtask" />
        <Route element={<TaskListScreen />} path="/tasks" />
        <Route element={<EditTaskScreen />} path="/tasks/:id"/>
        <Route element={<AddGroupScreen />} path="/addgroup" />
        <Route element={<GroupListScreen />} path="/groups" />
        <Route element={<FriendsScreen />} path="/friends" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
