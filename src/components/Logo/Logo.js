import React from 'react';
import Tilt from 'react-tilt';
import image from './image.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mto'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '5px'}} alt='logo' src={image}/>
        </div>
      </Tilt>
    </div>
  );
}



export default Logo;