import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Scard from "./components/scard";

import Card from "./components/Card";
function App() {
  return (
    <>
      <Navbar />
      <br />
      <Scard />
      <br />
      <Card />
    </>
  );
}

export default App;
