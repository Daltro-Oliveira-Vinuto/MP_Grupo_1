import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          <Login/>
        }>
        </Route>
        <Route path="/register" element={
          <Register/>
        }>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
