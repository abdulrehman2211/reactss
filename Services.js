// import React from 'react';

// const  = () => {
//   return (
//    <div>
//     <div> <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#26619c', minHeight: '50vh' }}>
//       <h1 style={{ color: 'white' }}></h1>
//       {/* Container for image and text */}
//       <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
//         {/* Image on the left */}
//         <div>
//           <img src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" alt="" width="600" height="533" padd/>
//         </div>
//         {/* Text on the right */}
//         <div style={{ color: 'white', textAlign: 'left', paddingRight: '30px', fontSize: '19px' }}>
//           <h1 style={{fontWeight:"bold", fontSize:"71px"}}>ABOUT US</h1>
//           <br />
//           <br />
//           Our consultation service prioritizes client
//           <br />
//           needs by offering personalized solutions after 
//           <br/>
//           listening and understanding their unique
//           <br/>
//           requirements.
//           <span style={{ fontWeight: 'bold' }}>
         
//           <br/>
//           <br/>
//           Our team is passionate about what 
//           <br/>
//           we do, and we are committed to 
//           <br/>
//           providing the best business advice.
//           </span>
//         </div>
//       </div>
//     </div></div>
//     <div> <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#26619c', minHeight: '50vh' }}>
//       <h1 style={{ color: 'white' }}></h1>
//       {/* Container for image and text */}
//       <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
//         {/* Image on the left */}
//         <div style={{ color: 'white', textAlign: 'left', paddingRight: '30px', fontSize: '15px' }}>
          
//           <br />
//           <span style={{ fontWeight: 'bold', fontSize: '90px' }}>CORE VALUES</span>

//           <br />
//           <div style={{ textAlign: 'center' }}>
//   <span style={{ fontWeight: 'bold',  }}>Accountability</span>
//   <br />
//   <span>We take responsibility for our actions and results.</span>
// </div>

//           <br />
//           <div style={{ textAlign: 'center' }}>
//   <span style={{ fontWeight: 'bold' }}>Excellence</span>
//   <br />
//   We are dedicating to providing top-tier consultation services.
// </div>

//           <br />
//           <div style={{ textAlign: 'center' }}>
//   <span style={{ fontWeight: 'bold' }}>Integrity</span>
//   <br />
//   <span>We maintain high ethical standards.</span>
// </div>

//         </div>

//         <div>
//           <img src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" alt="" width="600" height="533" padd/>
//         </div>
//         {/* Text on the right */}
//              </div>
//              <br/>
//              <br/>
//              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#26619c', padding: '20px', minHeight: '50vh' }}>
//       {/* Text Section */}
//       <div style={{ color: 'white', textAlign: 'left', paddingRight: '30px', fontSize: '15px' }}>
//         <br />
//         <span style={{ fontWeight: 'bold', fontSize: '90px', textAlign:"center" }}>WHY US?</span>
//         <br />
//         <span>
//           Our distinctive feature is our client-focused
//           <br /> strategy. We place a high value on
//           <br /> comprehending the specific requirements
//           <br /> and obstacles of each client.
//         </span>
//         <br />
//       </div>

//       {/* Image Section */}
//       <div style={{ paddingRight: '300px' }}>
//         <img src="https://th.bing.com/th/id/OIP.3IdV01GqyJeJPWlCNH4r5QHaDr?rs=1&pid=ImgDetMain" alt="Description" width="600" height="533" paddingleft="100px" />
//       </div>
//     </div>   </div></div>
//    </div>
    
//   );
// }

// export default Home;
import React from 'react';


const Services = () => {
  return (
    <div className="home-container">
      {/* Top Section with Title and Images */}
      <div className="top-section">
        <div className="images-container">
          <div className="hexagon">
            <img 
              src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" 
              alt="image1" 
            />
          </div>
          <div className="hexagon">
            <img 
              src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" 
              alt="image2" 
            />
          </div>
          <div className="hexagon">
            <img 
              src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" 
              alt="image3" 
            />
          </div>
        </div>
        <div className="services-text">
          <h1>OUR SERVICES</h1>
          <p>We strive to provide top-notch service.</p>
        </div>
      </div>

      {/* Bottom Section with Services */}
      <div className="bottom-section">
        <div className="hexagon-large">
          <h3>ACCOUNTING</h3>
        </div>
        <div className="hexagon-large">
          <h3>HR SERVICES</h3>
        </div>
        <div className="hexagon-large">
          <h3>INVESTOR SERVICES</h3>
          <ul>
            <li>Business Investment License</li>
            <li>Industrial Investment License</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
