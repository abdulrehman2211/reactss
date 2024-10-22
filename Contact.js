// import React from 'react';
// import './Contact.css';
// import whatsapp from './whatsapp.png';

// const Contact = () => {
//   return (
//     <section className="contact">
//       <div className="container">
//         <div style={{backgroundColor:"lightblue"}}><h2 className="section-title">Contact Us</h2></div>
//         <p className="section-description">
//           We'd love to hear from you. Reach out to us and let's chat about your project.
//         </p>
      
      
//         <div className="contact-info">
//           <h3>Contact Information</h3>
//           <ul>
//             <li><span>Phone:</span> 923481861662</li>
//             <li><span>Email:</span> info@example.com</li> 
//                    <li><span>Address:</span> 123 Main St, Anytown, USA</li>
//           </ul>
//         </div>
//         <div className="whatsapp-button">
//           <a href="https://wa.me/923481861662" target="_blank" rel="noopener noreferrer">
//             <img src={whatsapp} alt="WhatsApp" />
//             <span></span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;




import React from 'react';
import whatsapp from './whatsapp.png';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container mt-5">
        {/* Contact Section with Info and Image */}
        <div className="contact-section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '50px', backgroundColor: 'white', border: '1px solid #dee2e6', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          {/* Contact Information */}
          <div className="contact-info" style={{ maxWidth: '50%' }}>
            <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#ffffff', backgroundColor: '#a3c6e7', padding: '10px 20px', display: 'inline-block' }}>
              CONTACT US
            </h1>
            <p>
              <i className="fas fa-map-marker-alt"></i>{' '}
              <a href="https://www.google.com/maps?q=Malaz,+Riyadh+KSA" target="_blank" style={{ color: '#6c757d', textDecoration: 'none' }}>
                Malaz, Riyadh KSA
              </a>
            </p>
            <p>
              <i className="fas fa-phone"></i>{' '}
              <a href="https://wa.me/966571273141" target="_blank" style={{ color: '#6c757d', textDecoration: 'none' }}>
                +966-571273141
              </a>
            </p>
            <p>
              <i className="fas fa-envelope"></i>{' '}
              <a href="mailto:valueplusfc@gmail.com" style={{ color: '#6c757d', textDecoration: 'none' }}>
                valueplusfc@gmail.com
              </a>
            </p>
          </div>

          {/* Contact Image with Hexagons */}
          <div className="contact-image" style={{ maxWidth: '50%', position: 'relative' }}>
            <img
              src="https://storage.googleapis.com/a1aa/image/LuybwiLYnhp2GFd0VjV18Lcfj11PqMV5kj5ufb7qVWjelQRnA.jpg"
              alt="A desk with a laptop, an alarm clock, and some documents"
              style={{ width: '100%', borderRadius: '5px' }}
            />
            {/* Hexagons */}
            <div className="hexagon" style={{ position: 'absolute', top: '0px', left: '100px', backgroundColor: '#a3c6e7', width: '100px', height: '57.74px', clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
            <div className="hexagon" style={{ position: 'absolute', top: '20px', left: '120px', backgroundColor: '#d1e7f3', width: '100px', height: '57.74px', clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
            <div className="hexagon" style={{ position: 'absolute', top: '80px', left: '240px', backgroundColor: '#6c757d', width: '100px', height: '57.74px', clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
            <div className="hexagon" style={{ position: 'absolute', top: '140px', left: '360px', backgroundColor: 'transparent', border: '2px solid #6c757d', width: '100px', height: '57.74px', clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
            <div className="hexagon" style={{ position: 'absolute', top: '200px', left: '480px', backgroundColor: 'transparent', border: '2px solid #6c757d', width: '100px', height: '57.74px', clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
            <div className="hexagon" style={{ position: 'absolute', top: '260px', left: '600px', backgroundColor: '#d1e7f3', width: '100px', height: '57.74px', clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="whatsapp-button" style={{ position: 'absolute', bottom: '100px', left: '60px' }}>
  <a href="https://wa.me/923481861662" target="_blank" rel="noopener noreferrer">
    <img src={whatsapp} alt="WhatsApp" style={{ width: '70px', height: '70px' }} />
  </a>
</div>

      </div>
    </section>
  );
};

export default Contact;
