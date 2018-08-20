import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

import { I18nextProvider } from "react-i18next";

import i18next from 'i18next';
    import common_it from "./translations/it/common.json";

import common_de from "./translations/de/common.json";
import common_fr from "./translations/fr/common.json";




i18next.init({
        interpolation: { escapeValue: false },  
        lng: 'it',                             
        resources: {
            it: {
                common: common_it        
            },
            
             
            de: {
                common: common_de
            },
            fr: {
                common: common_fr
            }
        },
    });
ReactDOM.render(
    <I18nextProvider i18n={i18next}>

<App />
    </I18nextProvider>

,document.getElementById('root'));
registerServiceWorker();
