import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Main from "./components/Main/Main.js"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;