import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Header.css'
import 'font-awesome/css/font-awesome.min.css';
import logo from './restaurant.jpg';
class Header extends React.Component {
    
    render() {
        return (
            <nav>
                <div class="topnav">
                    <Link to="/Home"><img src={logo} width="80" height="80" class="d-inline-block align-top" alt='logo' id="logo"/></Link>
                    <Link to="/Home" className='link' data-testid="home">Home</Link>
                    <Link to="/Categories" className='link' data-testid="categories">Categories</Link>
                    <Link to="/Orders" className='link' data-testid="orders">Orders</Link>
                    <Link to="/Feedback" className='link' data-testid="feedback">Feedback</Link>
                    {/* <div class="topnav-right">
                        <Link to='/Cart' className='link'>
                            <i className="fa fa-shopping-cart"></i>
                        </Link>
                    </div> */}
                </div>
            </nav>
        )
    }
}
export default Header;