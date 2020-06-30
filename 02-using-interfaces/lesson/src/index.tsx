import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <React.StrictMode>
        <App
            user={{
                firstName: 'Braedon',
                lastName: 'Gough',
                age: 25,
                createdAt: '2020',
            }}
        />
        <App
            user={{
                firstName: 'Braedon',
                lastName: 'Gough',
                age: 25,
                createdAt: '2020',
            }}
        />
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
