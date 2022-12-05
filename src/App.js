import "./App.css";
import Register from "./components/register";
import Login from "./components/login";
import { RoutesMain as Routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Register />
      <Login />
      <Routes />
    </div>
  );
}

export default App;
