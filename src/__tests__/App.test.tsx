import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../redux/store';
import App from '../App';

// cases:
//      - display all persons on load
//      - delete persons on delete
//      - add person works and displays new person
//      - update person works and shows updated fields

describe("App Testing", () => {
    test('Inital State should display on load', () => {
        const {getByText} = render(<Provider store={store}><App /></Provider>)
        expect(getByText("ID 1: Name is bob age is 20")).toBeInTheDocument();
        expect(getByText("ID 2: Name is suzie age is 22")).toBeInTheDocument();
    });
    test("Delete person button will delete person", () => {
        const {getByLabelText, queryByText} = render(<Provider store={store}><App /></Provider>);
        const button = getByLabelText('2-button-update');
        fireEvent.click(button);
        expect(queryByText('ID 2: Name is suzie age is 22')).not.toBeInTheDocument();
    });
    test("add person works and displays new person", () => {
        const {getByLabelText, getByText} = render(<Provider store={store}><App /></Provider>);
        const button = getByLabelText("add-button");
        const inputName = getByLabelText("input-name");
        const inputAge = getByLabelText("input-age");
        const inputID = getByLabelText("input-id");
        fireEvent.change(inputName, {target: {value: "sarah"}})
        fireEvent.change(inputAge, {target: {value: "30"}})
        fireEvent.change(inputID, {target: {value: "3"}})
        fireEvent.click(button);
        expect(getByText("ID 3: Name is sarah age is 30")).toBeInTheDocument();
    });
}); 

