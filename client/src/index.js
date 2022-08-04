import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import './index.css';
import { createRoot } from 'react-dom/client';
import store from './store';


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<Provider store={store}><App/></Provider>);