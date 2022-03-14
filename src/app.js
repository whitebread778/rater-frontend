import Programs from "./pages/programs";
import Program from "./pages/program";
import SideNav from "./components/SideNav"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "./styles/App.css";


const App = () => {
    return (
        <>
        <SideNav />
        <Routes>
            <Route path="/programs" element={<Programs />}></Route>
            <Route path="/programs/:id" element={<Program />}></Route>
            <Route exact path="/" element={<Home />}></Route>
        </Routes>
        </>
    );
};

export default App;
