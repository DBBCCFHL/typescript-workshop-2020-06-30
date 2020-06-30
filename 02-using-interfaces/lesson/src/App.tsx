import React from 'react'
import logo from './logo.svg'
import './App.css'

function getUserName(user: User) {
    return user.firstName + user.lastName
}

interface Timestamps {
    createdAt: string
    updatedAt?: string
    deletedAt?: string
}

interface User extends Timestamps {
    firstName: string
    lastName: string
    age: number
}

interface Props {
    user: User
}

function App(props: Props) {
    const name = getUserName(props.user)
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                {name}
            </header>
        </div>
    )
}

export default App
