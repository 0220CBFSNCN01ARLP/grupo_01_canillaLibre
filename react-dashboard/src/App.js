import React from "react";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
    return (
        <div id="wrapper">
            <Sidebar />
            <Content />
        </div>
    );
}

export default App;
