import React from 'react';
import Header from '../components/Header/Header.jsx';
import RegisterFormContainer from '../components/RegisterForm/RegisterFormContainer';
import './app.css';

function App() {
    return (
        <div className='app'>
            <Header />
            <div className='app-container'>
                <RegisterFormContainer />
            </div>
        </div>
    );
}

export default App;