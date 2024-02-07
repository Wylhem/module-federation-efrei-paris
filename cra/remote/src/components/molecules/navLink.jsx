import React from 'react';
import Text from '../atoms/Text'
import Button from '../atoms/button'

const NavLink = ({ text }) => (
  <Button >
      <Text content={text} />
    </Button>
);

export default NavLink;