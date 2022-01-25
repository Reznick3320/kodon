import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AppForm';

function AppForm() {
    const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false);
    const [valueError, setValueError] = useState('');

    const [kodon, setKodon] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/test-api/'
        }).then(response => {
            setKodon(response.data)
        })
    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        setTouched(true);
        setValueError(validateValue());
    }
    
    function handleChange(event) {
        setValue(event.target.value)    
    }

    function validateValue() {
        const kods = kodon.map(k => k.kod).filter(item => {
            if (item == value) {
                return item
            }
        })
    
        if (value != kods || value == '') return 'Не найдено';
        else return 'Найдено';
        return '';
    }

    return (
        <div>
            <h1>Задана цепочка</h1>
            <ul>
                {kodon.map(k => (
                    <li key={k.id}>{k.kod}</li>
                ))}
            </ul>
            <form className='appForm' onSubmit={handleSubmit}> 
                <input className='input' 
                    value={value} 
                    onChange={handleChange}
                   
                />
                <button className='button' type='submit' >Search</button>
                {touched && valueError && (<div>{valueError}</div>)}
            </form>
        </div>
    )
}

export default AppForm;