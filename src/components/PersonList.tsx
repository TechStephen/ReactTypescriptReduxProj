import React from 'react';
import './componentStyles/personList.css';
import { useAppSelector, useAppDispatch } from '../redux/store.hooks'
import { getPersons, removePerson, updatePerson } from '../redux/person.slice'
import { LoggingIn, AuthenticationStatusLoggedIn } from '../redux/authentication.slice';
import { Grid, Card, CardContent, CardActions, Typography, Button, Container } from '@mui/material';


const PersonList: React.FC = () => {
    const personList = useAppSelector(getPersons);
    const Auth = useAppSelector(AuthenticationStatusLoggedIn)
    const dispatch = useAppDispatch();

    const removePersonFromList = (id: number) => {
        dispatch(removePerson(id));
    }

    const updatePersonInList = (id: number) => {
        dispatch(updatePerson(id));
    }

    return(
        <div className='personList'>
            <Grid container justifyContent="center" className='gridContainer'>
                {personList.map((person: any) => (
                    <div key={person.id}>
                        <Grid item lg={3} md={4} sm={6} xs={12} className="cardGrid">
                            <Card className='card' style={{ backgroundColor: "rgb(212, 212, 212)" }}>
                                <CardContent>
                                    <Typography gutterBottom><b>ID: </b> {person.id}</Typography>
                                    <Typography gutterBottom><b>Name: </b> {person.name}</Typography>
                                    <Typography gutterBottom><b>Age: </b> {person.age}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button className="removeBtn" variant='outlined' aria-label={`${person.id}-button-delete`} onClick={() => {
                                        removePersonFromList(person.id);
                                    }}>Remove</Button>
                                    <Button className='updateBtn' variant='outlined' aria-label={`${person.id}-button-delete`} onClick={() => {
                                        updatePersonInList(person.id);
                                    }}>Update</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </div>
                ))}
            </Grid>
        </div>
    );
}

export default PersonList;