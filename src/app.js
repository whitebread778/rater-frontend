import Programs from './pages/programs';
import Program from './pages/program';
import { Route, Routes } from 'react-router-dom';


const App = () => {
    return (
        <>
            <Routes>
                <Route path="/programs" element={<Programs />}></Route>
                <Route path="/programs/:id" element={<Program />}></Route>
            </Routes>
        </>

    )
}

export default App;