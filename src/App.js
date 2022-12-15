import "./App.css";
import { UserProvider } from "./context/userContext";
import { RoutesMain as Routes } from "./routes";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes />
      </UserProvider>
    </div>
  );
}

export default App;
