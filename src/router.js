import { BrowserRouter, Routes, Route } from "react-router-dom";

//Screens
import LoginScreen from "./screen/LoginScreen";
import AddTaskScreen from "./screen/AddTaskScreen";
import AddGroupScreen from "./screen/AddGroupScreen";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginScreen />} path="/" />
        <Route element={<AddTaskScreen />} path="addtask" />
        <Route element={<AddGroupScreen />} path="addgroup" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
