import React from "react";
import "./App.css";
import { initNotification } from "./Services/firebaseService";

function App() {
  return (
    <div className="App">
      <h1>Hello Push Notification</h1>
      <button onClick={initNotification}>Configure Notification</button>
    </div>
  );
}

export default App;
