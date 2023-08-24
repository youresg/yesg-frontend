import Navi from "./nav";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main';
import ESG from './components/esg';
import Information from './components/information';
import Community from './components/community';
import './App.css';

function App() {

    return (
        <div>
            <BrowserRouter>
                <Navi />
                <div></div>
                <Routes>
                    <Route path="/home" element={<Main />} />
                    <Route path="/ESG" element={<ESG />} />
                    <Route path="/information" element={<Information />} />
                    <Route path="/community" element={<Community />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
