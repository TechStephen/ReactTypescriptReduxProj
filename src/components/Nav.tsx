import React, { useState } from 'react';
import './componentStyles/navStyle.css';
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from '@mui/material';
import { VscPerson } from 'react-icons/vsc';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const linkStyle = {
    color: "black",
    textDecorationLine: "none",
}

const Nav: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        setOpen(!open);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <div className='nav'>
            <AppBar position='static' color='secondary'>
                <Toolbar >
                    <IconButton>
                        <Link to="/">
                            <VscPerson size={50} color={"lightblue"} />
                        </Link>
                    </IconButton>
                    <Typography variant='h5' fontFamily={"Blippo, fantasy"}>Person App</Typography>
                    <Button
                        className='hamburgerButton'
                        onClick={handleClick}
                        aria-controls={open ? "demo-positioned-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                    >
                        <GiHamburgerMenu size={30} color={"white"}/>
                    </Button>
                    <Menu 
                        open={open} 
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right"
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right"
                        }}
                    >
                            <MenuItem onClick={handleClose}>
                                <Link to="/" style={linkStyle}>Home</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="/addPerson" style={linkStyle}>Add</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="/about" style={linkStyle}>About</Link>
                            </MenuItem>
                        </Menu>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Nav;