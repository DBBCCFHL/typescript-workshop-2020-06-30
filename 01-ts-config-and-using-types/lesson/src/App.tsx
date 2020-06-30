import React from 'react'
import logo from './logo.svg'
import './App.css'

const objectVar: {} = {
    name: 'Braedon',
    age: 25,
    lovesIceCream: true,
}

const booleanVar = true

// Object where we specify the structure
const objectWithTypes: {
    name: string
    age: number
    lovesIceCream?: boolean
} = {
    name: 'Braedon',
    age: 25,
}

Object.keys(objectWithTypes)

function add(numberOne: number, numberTwo: number) {
    return numberOne + numberTwo
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
