import Header from "./components/Header";
import Terminal from "./components/Terminal";
import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Terminal.css";
import KaliLogo from "./assets/kali-logo.png";

function App() {
  return (
    <div className="App">
      <img className="logo" src={KaliLogo} alt="Logo" />
      <Header />
      <Terminal />
    </div>
  );
}

export default App;
