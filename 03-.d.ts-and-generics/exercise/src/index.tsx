import React, {
    FunctionComponent,
    useState,
    FormEvent,
    ChangeEvent,
} from 'react'
import ReactDOM from 'react-dom'

interface Todo {
    description: string
    completed: boolean
}

interface TodoItemProps {
    todo: Todo
}

const TodoItem: FunctionComponent<TodoItemProps> = (props) => {
    const [checked, setChecked] = useState(props.todo.completed)

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>
        setChecked(event.target.checked)
    return (
        <li>
            <label
                style={{ textDecoration: checked ? 'line-through' : 'none' }}
                htmlFor="completed"
            >
                description: {props.todo.description}{' '}
            </label>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                id="completed"
            />
        </li>
    )
}

interface FormProps {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    value: string
}

const Form = ({ onSubmit, value, onChange }: FormProps) => {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" onChange={onChange} value={value} />
        </form>
    )
}

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [value, setValue] = useState('')

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const newTodo: Todo = {
            description: value,
            completed: false,
        }

        setTodos([...todos, newTodo])

        setValue('')
    }

    return (
        <div>
            <h1>My Todo list</h1>
            <ul>
                {!todos.length ? (
                    <div>Nothing to do!</div>
                ) : (
                    todos.map((todo) => <TodoItem todo={todo} />)
                )}
            </ul>
            <Form onChange={onChange} value={value} onSubmit={onSubmit} />
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <TodoList />
    </React.StrictMode>,
    document.getElementById('root')
)
