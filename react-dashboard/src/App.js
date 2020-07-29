import React from "react";
import Content from "./components/Content";
import Sidenav from "./components/Sidebar/Sidenav";
import "./App.css";

function App() {
    return (
        <div id="wrapper">
            <Sidenav />
            <Content />
        </div>
    );
}

export default App;
