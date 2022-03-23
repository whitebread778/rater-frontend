import Programs from "./pages/programs";
import Program from "./pages/program";
import SideNav from "./components/SideNav";
import WriteReviews from "./pages/writeReviews";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "./styles/App.css";
import ReviewPage from "./pages/reviewPage";

const App = () => {
    return (
        <>
        <SideNav />
        <Routes>

            <Route exact path="/programs" element={<Programs />}></Route>
            <Route path="/programs/:schoolProgramId" element={<Program />}></Route>
            {/* <Route path="/writeReviews" element={<WriteReviews />}></Route> */}
            <Route path="/programs/:schoolProgramId/writeReviews" element={<WriteReviews />}></Route>

            <Route exact path="/" element={<Home />}></Route>
            <Route path="/programs/:schoolProgramId/reviews" element = {<ReviewPage />}></Route>
        </Routes>
        </>
    );
};

export default App;
