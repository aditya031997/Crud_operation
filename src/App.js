import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//import Practice2 from "./States/Practice2";
import Json from "./Json";
// import Practice from "./States/Practice1";
import Header from "./laylouts/header";
function App() {
  return (
    <div>
      <Header />
      <Json />
      {/* <Practice /> */}
      {/* <Practice2 text={{ name: "aditya" }} /> */}
    </div>
  );
}

export default App;
