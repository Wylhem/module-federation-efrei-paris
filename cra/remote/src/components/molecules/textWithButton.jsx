// TextWithButton.js (Molecule)
import React from 'react';
import Text from '../atoms/Text';
import Button from '../atoms/button';

const TextWithButton = ({ text, buttonText}) => (
  <>
    <Text content={text} />
    <Button >
      <Text content={buttonText} />
    </Button>
  </>
);

export default TextWithButton;