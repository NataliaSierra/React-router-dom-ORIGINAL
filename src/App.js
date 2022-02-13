import react from "react";
import { 
    BrowserRouter,
    Routes,
    Route } from "react-router-dom";

import { HomePage } from "./components1/HomePage/HomePage.jsx";
import { HomePage2 } from './components2/HomePage2/Homepage2.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element= { <HomePage /> } />
                <Route path='/Home' element={ <HomePage2/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;