import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
function App() {
  return (
    
    <main className="App font-font">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
