import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [category, setCategory] = useState("Welcome");

  function handleSetContent(category: string) {
    setCategory(category);
  }

  return (
    <div id="body">
      <Header category={category} onSelect={handleSetContent} />
      <Main category={category} />
      <Footer />
    </div>
  );
}

export default App;
