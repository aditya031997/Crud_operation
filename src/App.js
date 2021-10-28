import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Prop from "./component/Prop";
function App() {
  const [user, setUser] = useState();

  const inputChange = (email, password) => {
    setUser({ email, password });
  };
  console.log(user);
  return (
    <div>
      <Header />
      <Prop callBack={inputChange} />
    </div>
  );
}

export default App;
