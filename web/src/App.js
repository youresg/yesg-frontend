
import React, {useEffect, useState} from 'react';
import axios from 'axios';

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
        <div>
            백엔드에서 가져온 데이터입니다 : {hello}
        </div>
    );
}

export default App;