
import React, {Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import i18n from './i18n';
import { i18nextProvider, I18nextProvider } from 'react-i18next';

ReactDOM.render(
    <Suspense fallback="Loading.....">
        <I18nextProvider>
            <App />
        </I18nextProvider>
    </Suspense>
    , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
