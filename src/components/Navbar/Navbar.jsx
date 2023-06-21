import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from '../Cart/Cart';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <span>BR</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/1">FEMININO</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/2">MASCULINO</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/3">INFANTIL</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to="/">ALCLISBOA.</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/about">SOBRE</Link>
                    </div>


                    <div className="item">
                        <Link className="link" to="/blog">BLOG</Link>
                    </div>

                    <div className="icons">
                        <SearchIcon/>
                        <Link className="link" to="/user"><PersonOutlineOutlinedIcon/></Link>
                        <Link className="link" to="/wishlist"><FavoriteBorderOutlinedIcon/></Link>
                        <div className="cartIcon" onClick={()=>setOpen(!open)}>
                            <ShoppingCartOutlinedIcon/>
                            <span>2</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart/>}
        </div>
    )
}

export default Navbar
