import React from 'react';
import './componentStyles/aboutStyle.css';
import me4cropped from '../assets/me4cropped.png';
import { IconContext } from 'react-icons'
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiRedux, SiJest } from 'react-icons/si'
import { MdOutlineDescription } from 'react-icons/md';
import { Container, Grid, Card, CardContent, CardMedia, CardActions, Typography, Button, TableContainer, Table, TableBody, TableRow, TableCell, Paper } from '@mui/material'

const About: React.FC = () => {
    return(
            <div className='About'>
                <Container fixed>
                    <h3 className='aboutTitle'>About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                    <Grid container justifyContent={'center'}>
                        <div className='topRow'>
                            <Grid item>
                                <Card className='aboutCard'>
                                    <CardMedia image={me4cropped} title="image" className='cardMedia'/>
                                    <div className='cardContentAndActions'>
                                        <CardContent className='cardContentAboutMe'>
                                            <Typography variant='h5'><b>Authors Name:</b></Typography>
                                            <Typography variant='h5'>Stephen Schmitz</Typography>
                                        </CardContent>
                                        <CardActions className='actions'>
                                            <Button variant='outlined' className='actionBtn'>
                                                <a href="https://www.stephenschmitz.com/about" target="_blank" className='link'>
                                                    Learn More
                                                </a>
                                            </Button>
                                        </CardActions>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className='languagesUsedCard'>
                                    <CardContent className='cardContentLanguagesUsed'>
                                        <Typography variant='h5' gutterBottom style={{ margin: '0 0 0 55px'}}><b>Languages Used: </b></Typography>
                                        <TableContainer component={Paper} className='table'>
                                            <IconContext.Provider value={{className: 'icons'}}>
                                                <Table>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell style={{ color: 'red'}}><SiCss3 /></TableCell>
                                                            <TableCell style={{ color: 'blue'}}><SiHtml5 /></TableCell>
                                                            <TableCell  style={{ color: 'blue'}}><SiJavascript /></TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell style={{ color: 'blue'}}><SiReact /></TableCell>
                                                            <TableCell style={{ color: 'purple'}}><SiRedux /></TableCell>
                                                            <TableCell style={{ color: 'red'}}><SiJest /></TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </IconContext.Provider>
                                        </TableContainer>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </div>
                        <Grid item>
                            <Card className='descriptionCard'>
                                <CardContent className='cardContentDescription'>
                                    <Typography variant='h5' gutterBottom><b>Description </b></Typography>
                                    <Typography variant='body2' gutterBottom fontSize={20} style={{ letterSpacing: '2px', lineHeight: '40px' }}>This website was written utilizing the tech stack of React/TypeScript/CSS3/Redux/RTL+Jest
                                    with MaterialUI component library as well as React-Icons. Main functionality is to display and add persons with all logic being handled with Redux.</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
    );
}

export default About;