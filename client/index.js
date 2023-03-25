import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App.jsx';

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)
import styles from './styles/application.scss'

root.render(

    <React.StrictMode>
        <App />
    </React.StrictMode>

)
