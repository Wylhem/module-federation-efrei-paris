import React from 'react';
import NavLink from '../molecules/navLink';
import Text from '../atoms/Text';

const NavigationBar = () => (
  <nav>
    <div>
      <Text content="Logo" />
    </div>
    <NavLink text="Home" onClick={() => console.log('Navigate to Home')} />
    <NavLink text="About" onClick={() => console.log('Navigate to About')} />
    <NavLink text="Contact" onClick={() => console.log('Navigate to Contact')} />
  </nav>
);

export default NavigationBar;