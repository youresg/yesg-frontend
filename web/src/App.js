
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './page/main';
import ESG from './page/esg';
import  Information from './page/information';
import Community from './page/community';

function App() {
   const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/success')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
        
        axios.post('/api/success', null, { params: {'param' :'success'} })
        .then(response => {
            console.log('POST 요청 성공:', response.data);
        })
        .catch(error => {
            console.log('POST 요청 실패:', error);
        })
    }, []);

    return (
        <Router>
        <div>
            백엔드에서 가져온 데이터입니다 : {hello}
        
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/esg" element={<ESG />} />
            <Route path="/information" element={<Information/>} />
            <Route path="/community" element={<Community/>} />
        </Routes>
        </div></Router>
    );
}

export default App;