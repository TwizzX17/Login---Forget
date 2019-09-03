import React, { Component } from "react";
import bannerfrontpage from '../assets/banner-frontpage.jpg';
import logo from '../assets/Logo.svg';
import { Redirect } from 'react-router';

class Home extends Component {

    render() {
        
        return (
            <div>
                <nav id="f-nav">
                    <div>
                        <ul>
                            <li>DataBreaches</li>
                            <li>Home</li>
                            <img src={logo} />
                            <li>About us</li>
                            <li>Login To App</li>
                        </ul>
                    </div>
                </nav>
                <div>
                    <div id="banner">
                        <img src={bannerfrontpage} />
                        <div id="txtoverlay">
                            <h1>Inspirational Text: Wow!</h1>
                            <p>- Exquisite exquisiteness!<br />- Expertly Expertise!<br />- Securest Security!<br />- We're simply the bestest of the best!</p>
                        </div>
                    </div>
                </div>
                <div id="info">
                    <ul>
                        <li>
                            <h1>Some Header</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor. Semper risus in hendrerit gravida rutrum quisque non.
                                Quis blandit turpis cursus in hac habitasse. Id velit ut tortor pretium viverra suspendisse potenti nullam ac.
                                                 </p>
                        </li>
                        <li>
                            <h1>Some Header</h1>
                            <p>Bacon ipsum dolor amet strip steak buffalo short ribs, tri-tip frankfurter salami shankle brisket prosciutto hamburger fatback chuck beef ribs. Swine bacon landjaeger shank ground round drumstick porchetta prosciutto. Spare ribs doner pastrami short loin, corned beef landjaeger tongue.</p>
                        </li>
                        <li>
                            <h1>Some Header</h1>
                            <p>Rump sirloin andouille alcatra. Chicken pastrami andouille short ribs bresaola corned beef beef, pork chop fatback burgdoggen shank hamburger salami kielbasa pork loin. Frankfurter pork belly pork loin strip steak short ribs tri-tip. Salami filet mignon brisket meatloaf, capicola ball tip drumstick.</p>
                        </li>
                        <li>
                            <h1>Some Header</h1>
                            <p>Learn from the best to create your own easy-to-remember but still secure passwords on the fly! there are many experts working in this field and we've collected some of the best methods for you to learn all about right here!</p>
                            <div>Read More</div>
                        </li>
                    </ul>
                </div>
            </div>
            
            );
    }
}
export default Home;