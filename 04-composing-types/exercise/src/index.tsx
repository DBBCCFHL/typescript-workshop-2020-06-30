import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { CatFact, getRandomCatFacts } from './get-random-cat-facts'

type Status = 'idle' | 'loading' | 'resolved' | 'error'
interface Props {
    catFacts: CatFact[]
    status: Status
}

const CatFactsList = (props: Props) => {
    switch (props.status) {
        case 'idle':
            return <div>no cat facts</div>
        case 'loading':
            return <div>Loading...</div>
        case 'error':
            return <div>Something went wrong</div>
        case 'resolved':
            return (
                <ul>
                    {props.catFacts.map((catFact) => (
                        <li key={catFact._id}>{catFact.text}</li>
                    ))}
                </ul>
            )
    }
}

const App: FC = () => {
    const [catFacts, setCatFacts] = React.useState<CatFact[]>([])
    const [status, setStatus] = React.useState<Status>('idle')
    React.useEffect(() => {
        const getFiveCatFacts = async () => {
            try {
                setStatus('loading')
                const facts = await getRandomCatFacts(5)
                setCatFacts(facts)
                setStatus('resolved')
            } catch {
                setStatus('error')
            }
        }

        getFiveCatFacts()
    }, [])
    console.log(catFacts)
    return (
        <>
            <h1>Best Facts about Cats!</h1>
            <CatFactsList status={status} catFacts={catFacts} />
        </>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
