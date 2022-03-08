import Programs from "./pages/programs";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/programs" element={<Programs />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default App;
