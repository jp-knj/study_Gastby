import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hamburger = ({ state }) => {
  let menu = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      // Close our Menu
      menu.style.display = 'none'
    } else if (state.clicked === true || state.clicked === true && state.initial === null){
      // Open our Menu
      menu.style.display = 'block';
  }
});

return (
  <div ref={el => (menu = el)} className='hamburger-menu'>
    <div className='menu-secondary-background-color'></div>
    <div className='menu-layer'>
      <div className='menu-city-background'></div>
      <div className='container'>
        <div className='wrapper'>
          <div className='menu-links'>
            <nav>
              <ul>
                <li><Link to='/opportunities'>Opportunities</Link></li>
                <li><Link to='/solutions'>Solutions</Link></li>
                <li><Link to='/contact-us'>Contact us</Link></li>
              </ul>
            </nav>
            <div className='info'>
              <h3>Our Promise</h3>
              <p>
                The passage experienced a surge in popularity during the 1960s
                when Letraset used it on their dry-transfer sheets, and again
                during the 90s as desktop publishers bundled the text with
                their software.
                </p>
            </div>
            <div className='locations'>
              Locations:
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)};

export default Hamburger;
