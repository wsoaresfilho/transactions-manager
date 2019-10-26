import React from 'react';
import Header from '../components/Header/Header';
import RegisterTransactionContainer from '../components/RegisterTransaction/RegisterTransactionContainer';
import './app.css';

function App() {
    return (
        <div className='app'>
            <Header />
            <div className='app-container'>
                <RegisterTransactionContainer />
            </div>
        </div>
    );
}

export default App;
