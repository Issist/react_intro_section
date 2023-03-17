import HeroMob from './images/image-hero-mobile.png';
import HeroDesc from './images/image-hero-desktop.png';
import React from 'react';

function Image() {
  const [imageSrc, setImageSrc] = React.useState('');

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setImageSrc(HeroMob);
      } else {
        setImageSrc(HeroDesc);
      }
    };

    // Call handleResize initially and add event listener for window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <img className='image-hero' src={imageSrc} alt="My Image" />;
}

export default Image;
