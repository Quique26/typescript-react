import useNewSubForm from '../hooks/useNewSubForm'
import { useEffect } from 'react'
import {IMGMan, IMGWoman, Sub} from './types.d'

interface FormProps{
    onNewSub: (newSub: Sub) => void,
    privacyPolicy: boolean
}

const Form = ({ onNewSub, privacyPolicy }: FormProps) => {
     const [inputValues, dispatch] = useNewSubForm()

    useEffect(() => {
        if (inputValues.sex === 'Hombre') {
            const randomIndex = Math.floor(Math.random() * Object.keys(IMGMan).length) + 1;
            const randomAvatar = IMGMan[randomIndex];
            dispatch({
                type: 'change_value',
                payload: {
                    inputName: 'avatar',
                    inputValue: randomAvatar,
                },
            });
        } else if (inputValues.sex === 'Mujer') {
            const randomIndex = Math.floor(Math.random() * Object.keys(IMGWoman).length) + 1;
            const randomAvatar = IMGWoman[randomIndex];
            dispatch({
                type: 'change_value',
                payload: {
                    inputName: 'avatar',
                    inputValue: randomAvatar,
                },
            });
        }
    }, [inputValues.sex, dispatch]);


    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        if (!inputValues.privacyPolicy){
            return
        }
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
        

        if (name === 'sex') {
            if (value === 'Hombre') {
                const randomIndex = Math.floor(Math.random() * Object.keys(IMGMan).length) + 1;
                const randomAvatar = IMGMan[randomIndex];
                dispatch({
                    type: 'change_value',
                    payload: {
                        inputName: 'avatar',
                        inputValue: randomAvatar,
                    },
                });
            } else if (value === 'Mujer') {
                const randomIndex = Math.floor(Math.random() * Object.keys(IMGWoman).length) + 1;
                const randomAvatar = IMGWoman[randomIndex];
                dispatch({
                    type: 'change_value',
                    payload: {
                        inputName: 'avatar',
                        inputValue: randomAvatar,
                    },
                });
            }
        }
    }

    const handleCheckboxChange = () => {
        dispatch({
            type: "change_value",
            payload: {
                inputName: 'privacyPolicy',
                inputValue: (!inputValues.privacyPolicy).toString()// Invertir el valor del checkbox
            }
        });
    };

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
                <select onChange={handleChange} value={inputValues.sex} name='sex'>
                    <option value=""></option>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                </select>
                <div>
                    <input onClick={handleCheckboxChange} type="checkbox" id='checkbox' checked={inputValues.privacyPolicy}  required/> 
                    <label htmlFor="checkbox"> Aceptar las políticas de privacidad</label>
                </div>
                <button onClick={handleClear} type='button'> Clear the form</button>
                <button type='submit'>Save new sub!</button>
            </form>
        </div>
    )
}

export default Form