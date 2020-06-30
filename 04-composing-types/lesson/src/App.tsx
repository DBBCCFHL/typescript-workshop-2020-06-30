import React from 'react'
import logo from './logo.svg'
import './App.css'

interface Company {
    legalName: string
    address: string
    entityType: 'company'
}

interface Person {
    name: string
    address: string
    entityType: 'person'
}

type Entity = Person | Company
// now the entityType property will be typed as 'person' | 'company'

const getEntityName = (entity: Entity) => {
    switch (entity.entityType) {
        case 'company':
            return entity.legalName
        case 'person':
            return entity.name
    }
}

type ButtonColor = 'red' | 'green'

// export enum ButtonColor {
//     RED = 'red',
//     GREEN = 'green',
// }

interface Props {
    buttonColor: ButtonColor // red or green
}

function App({ buttonColor }: Props) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <button style={{ backgroundColor: buttonColor, fontSize: 50 }}>
                    CLICK ME
                </button>
            </header>
        </div>
    )
}

export default App
