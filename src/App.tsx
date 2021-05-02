import React from 'react';
import './App.scss';
// Pages
import {Welcome, ChatBot} from "./pages"

function App() {
  return (
    // <Welcome />
    <div className="wrapper">
      <ChatBot />
    </div>
  );
}

export default App;
