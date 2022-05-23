import "./menu.sass";
import List from "./components/List";
import { Profiler } from "react";
import Profile from "./components/Profile";
import ImageProfile from "../Avatar/ImageProfile"

function Menu(){
    
    return(
        <header id="header">
            <nav id="nav">
            <ImageProfile />      
            <Profile />
            <List />   
            </nav>
        </header>
    
    );
}

export default Menu;