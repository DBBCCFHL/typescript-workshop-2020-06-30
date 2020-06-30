import React, { FunctionComponent, FormEvent, ChangeEvent } from 'react'
import logo from './logo.svg'
import './App.css'

interface Props<User> {
    user: User
}

interface BraedonsUser {
    name: string
    age: string
}

const App = (props: Props<BraedonsUser>) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>

                {props.user.age}
                {props.user.name}
            </header>
        </div>
    )
}

export const SecondApp = (
    props: Props<{ firstName: string; lastName: string }>
) => {
    return (
        <>
            <div>hey there</div>
            <div>{props.user.firstName}</div>
            <div>{props.user.lastName}</div>
        </>
    )
}

interface UserProps {
    firstName: string
    age: number
}

const User: React.FunctionComponent<UserProps> = ({
    firstName,
    age,
    children,
}) => {
    const onChange = (event: ChangeEvent) => {
        event.preventDefault()

        console.log('form submitted')
    }

    return (
        <form>
            <input type="text" onChange={onChange} />
            <div>age: {age}</div>
            <div>{children}</div>
        </form>
    )
}

export default App
