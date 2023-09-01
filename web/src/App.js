import Navi from "./nav";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './components/main';
import ESG from './components/esg';
import Information from './components/information';
import Community from './components/community';
import Redirection from "./components/Redirection";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <div>
            <BrowserRouter>
                <Navi />
                <Routes>
                    <Route path="/home" element={<Main />} />
                    <Route path="/ESG" element={<ESG />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/information" element={<Information />} />
                    <Route path="/oauth2/redirect" element={<Redirection />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
