import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header} from './components/Header.jsx';
import {Footer} from './components/Footer.jsx';
import {App} from './components/App.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.Fragment>
        <Header/>
        <App/>
        <Footer/>
    </React.Fragment>



);


