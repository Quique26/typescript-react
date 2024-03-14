import useNewSubForm from '../hooks/useNewSubForm'
import {Sub} from './types.d'

interface FormProps{
    onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: FormProps) => {
    const [inputValues, dispatch] = useNewSubForm()
    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        onNewSub(inputValues)
        dispatch({ type: "clear"})
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = evt.target
        
        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    }

    const handleClear = () =>{
       dispatch({ type: "clear"})
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="nick" />
                <input onChange={handleChange} value={inputValues.subMonths} type="text" name="subMonths" placeholder="subMonths" />
                <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar" />
                <textarea onChange={handleChange} value={inputValues.description}  name="description" placeholder="description" />
                <select onChange={handleChange} value={inputValues.sexo} name='sexo'>
                    <option value=""></option>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                </select>
                <button onClick={handleClear} type='button'> Clear the form</button>
                <button type='submit'>Save new sub!</button>
            </form>
        </div>
    )
}

export default Form