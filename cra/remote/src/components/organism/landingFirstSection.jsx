import React from 'react';
import TextWithButton from '../molecules/textWithButton';
import Image from '../atoms/image';

const LandingFirstSection = ({ text, buttonText, imageUrl, imageAlt }) => (
  <div>
    <div>
      <TextWithButton text={text} buttonText={buttonText}/>
    </div>
    <div>
      <Image src={imageUrl} alt={imageAlt} />
    </div>
  </div>
);

export default LandingFirstSection;