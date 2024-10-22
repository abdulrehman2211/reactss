import React from 'react';
import './Home.css';

const Home = () => {
  const hexagonStyle = {
    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
    WebkitClipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
    width: '200px',                  
    height: '195px',
    objectFit: 'cover',
    marginBottom: '0px',  // Ensure no margin at the bottom
    position: 'relative',  // Set position to relative for absolute positioning
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#26619c', minHeight: '92vh', padding: '20px' }}>


      {/* Container for images and text */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '10px' }}>
        <div></div>
        {/* First Two Images (One below the other) */}
        <div style={{ display: 'flex', flexDirection: 'column', marginleft: '110px',marginBottom:"40px" }}>
          {/* Full-size Image 1 */}
          <img 
            src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" 
            alt=""
            style={hexagonStyle}
          />
          <div   style={{ position: 'relative', top: '45px', marginLeft: '50px' }}>
          {/* Image 2 under Image 1 */}
          <img 
            src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" 
            alt="" 
            style={hexagonStyle}
          />
          
          </div>
        </div>

        {/* Third Image positioned to touch the centers of the first and second images */}
        <div style={{ position: 'relative', top: '120px', marginLeft: '-52px' }}> {/* Centering the third image */}
          <img 
            src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" 
            alt="" 
            style={hexagonStyle}
          />
        </div>
        <div style={{ display: 'flex',top: '150px', marginLeft: '-80px' }}>
           {/* Display the third image touching the previous ones */}
           <img 
         src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" 
          alt="" 
         style={hexagonStyle}
          />
   </div>
   <div style={{ display: 'flex',top: '280px',marginTop:"220px", marginLeft: '-220px' }}>
           {/* Display the third image touching the previous ones */}
       <img 
         src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" 
          alt="" 
         style={hexagonStyle}
          />
   </div>

        {/* Text on the right */}
        {/* <div style={{ color: 'white', textAlign: 'left', paddingLeft: '200px', paddingTop:"100px",fontSize: '50px' }}>
          القيمة الزائدة
          <br />
          <span style={{ fontWeight: 'bold' }}>VALUE PLUS</span>
          <br />
          لخدمات الأعمال
          <br />
          for Business Services
        </div> */}
          <div style={{ color: 'white', textAlign: 'left', paddingLeft: '200px', paddingTop:"100px", fontSize: '50px' }}>
      {/* Wrapper div for the animated text */}
      <div className="text-container">
        {/* Arabic text */}
        <span className="urdu-text">القيمة الزائدة</span>
        <br />
        <span className="urdu-text bold">VALUE PLUS</span>
        <br />
        <span className="urdu-text">لخدمات الأعمال</span>
        <br />
        {/* English text (initially hidden) */}
        <span className="english-text">for Business Services</span>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Home;



