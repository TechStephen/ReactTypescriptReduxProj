import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import produce from 'immer';

export interface Person {
    id: number | null
    name: string,
    age: number | null
}

const initialState: Person[] = [
    {id: 1, name: "bob", age: 20},
    {id: 2, name: "suzie", age: 22}
]

const personSlice = createSlice({
    name: "persons",
    initialState,
    reducers: {
        addPerson: (state, action: PayloadAction<Person>) => {
            state.push(action.payload);
            alert('you have added ' + action.payload.name + " to the list!");
        },

        removePerson: (state, action: PayloadAction<number>) => {
            return state.filter((person) => person.id !== action.payload);
        },

        updatePerson: (state, action: PayloadAction<number>) => {      
            const nextState = produce(state, (draftState) => {
                let newname: string = prompt('enter new name') as string;
                let newage: string = prompt('enter new age') as string;
                let newagenumber: number = parseInt(newage);
                draftState[action.payload-1].name = newname;
                draftState[action.payload-1].age = newagenumber;
            })
            return nextState;
        }
    },
})

export const { addPerson, removePerson, updatePerson } = personSlice.actions
export const getPersons = (state: RootState) => state.persons;
export const stateSize = (state: RootState) => state.persons.length;
export const personReducer = personSlice.reducer;