import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import Provider from "react-redux/es/components/Provider";
import 'bootstrap-icons/font/bootstrap-icons.css'






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
);
