import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import CreateQuestion from "./pages/createQuestion/createQuestion";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/createQuestion" element={<CreateQuestion />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
