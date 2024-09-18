import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import Heading from "./Components/Heading";
import DisplayTime from "./Components/DisplayTime";

function App() {
  return (
    <div>
      <AppName />
      <Heading />
      <DisplayTime></DisplayTime>
    </div>
  );
}

export default App;
