import React, { useState } from 'react';
import './componentStyles/personForm.css';
import { Person, addPerson, stateSize } from '../redux/person.slice';
import { useAppDispatch, useAppSelector } from '../redux/store.hooks';
import { TextField, Button, Container } from '@mui/material';

const PersonForm: React.FC = () => {
    const size = useAppSelector(stateSize)
    const dispatch = useAppDispatch();

    const [person, setPerson] = useState<Person>({
        id: null,
        name: '',
        age: null
    })

    const clearFields = () => {
        setPerson({
            id: 0,
            name : '',
            age: 0
        });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // int version of our Name String input to check if number (should return NaN)
        let checkNameInt = parseInt(person.name);

        // check if input fields are blank
        if(person.age === null || person.name === ''){
            alert('must give a name and age');
            return;
        }

        //checks if name contains numbers
        if(isNaN(checkNameInt) == false){
            alert('name must contain letters');
            return;
        }

        // check if age contains letters
        if(isNaN(person.age) == true){
            alert('age must contain numbers');
            return;
        }

        dispatch(addPerson(person));
        clearFields();
    }

    const handleChange = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>) => setPerson((prev) => {
        (prev as any)[name] = value;
        prev.id = size+1;
        return {...prev}
    })

    const { id, name, age } = person;

    return(
        <div className='personForm'>
            <Container fixed>
                <div className='description'>
                    <h2>Add Person To List</h2>
                    <p>When you type into the fields below you will have the option to add a Name and Age - in that order. When you click
                    Submit you will then add this new person to your person list which will be viewable on the homepage! All ID's are created
                    automatically!
                    </p>
                </div>
                <div className='form'>
                    <form onSubmit={handleSubmit}>
                        <TextField className='formInput' type="text" aria-label='input-name' placeholder='name' name='name' value={name} onChange={handleChange} />
                        <TextField className='formInput' type="text" aria-label='input-age' placeholder='age' name='age' value={age} onChange={handleChange} />
                        <Button variant="outlined" aria-label='add-button' type='submit' className='formBtn'>Submit</Button>
                    </form>
                </div>
            </Container>
        </div>

    );
}

export default PersonForm;