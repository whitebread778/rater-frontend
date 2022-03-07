import Programs from './pages/programs';
import { Route, Routes } from 'react-router-dom';


const App = () => {
    return (
        <>
            <Routes>
                <Route path="/programs" element={<Programs />}></Route>
            </Routes>
        </>

    )
}

export default App;