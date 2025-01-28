import React from 'react';


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
const Header = () => {
    return ( 
        <div className='headerSection'>
            <div className="left">
                <div className="title">
                    <h2>Easykart</h2>
                </div>
            </div>
            <div className="center">
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Children</li>
                    <li>Beauty</li>
                </ul>
            </div>
            <div className="search">
                <input type="text" placeholder="Search..." />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="right">
                <div className="signin">
                    Signin / Signup
                </div>
                <div className="cart">
                    Cart
                </div>
            </div>
        </div>
     );
}
 
export default Header;