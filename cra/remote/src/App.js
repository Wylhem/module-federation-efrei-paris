import React from 'react';
import Test from './assets/images/test.png';
import NavigationBar from './components/organism/navBar';
import LandingFirstSection from './components/organism/landingFirstSection';

const App = () => (
  <>
    <NavigationBar/>
    <LandingFirstSection
      text="Description of your product."
      buttonText="Call to Action"
      imageUrl={Test}
      imageAlt="Product Image"
    />
  </>
);

export default App;
