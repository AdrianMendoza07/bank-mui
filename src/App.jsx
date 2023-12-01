import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import { DataProvider } from "./components/dataContext";

function App() {
  return (
    <>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/login" Component={Login} />
            <Route path="/home" Component={Home} />
          </Routes>
        </Router>
      </DataProvider>
    </>
  );
}

export default App;
