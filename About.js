


import React from 'react';

const About = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
      {/* ABOUT US SECTION */}
      <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#f4f4f9', minHeight: '60vh', padding: '60px 0', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ flex: 1, padding: '0 40px', textAlign: 'left' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 'bold', color: '#444' }}>About Us</h2>
          <p style={{ fontSize: '20px', marginBottom: '15px' }}>
            Our consultation service prioritizes client needs by offering personalized solutions after listening and understanding their unique requirements.
          </p>
          <p style={{ fontSize: '20px' }}>
            Our team is passionate about what we do, and we are committed to providing the best business advice.
          </p>
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {['gyf5I5e4dvgmNkg38peurbe1e5gJvX1WGQC0sOZKUU4tq9EdC.jpg', 'cUi5uo4yMn5TG1SmwofRKmQHTnPaCWkObGjkFa1ez65StnoTA.jpg', 'CyxXAWWUA1bzDlO54eKDOz3kfP4ly51tIzdrzjkCEYtRtnoTA.jpg', 'PPmFRkTdiqZiHh5BGNgeYromavJeCXZZFZGfARxpatLfXgiOB.jpg'].map((imgSrc, index) => (
            <img
              key={index}
              src={`https://storage.googleapis.com/a1aa/image/${imgSrc}`}
              alt={`Image ${index + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
          ))}
        </div>
      </div>

      {/* CORE VALUES SECTION */}
      <div style={{ display: 'flex', flexDirection: 'row-reverse', backgroundColor: '#445a77', color: '#fff', minHeight: '60vh', padding: '60px 0', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ flex: 1, padding: '0 40px', textAlign: 'left' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 'bold', color: '#fff' }}>Core Values</h2>
          <p style={{ fontSize: '20px', marginBottom: '15px' }}><strong>Accountability</strong><br />We take responsibility for our actions and results.</p>
          <p style={{ fontSize: '20px', marginBottom: '15px' }}><strong>Excellence</strong><br />We are dedicated to providing top-tier consultation services.</p>
          <p style={{ fontSize: '20px' }}><strong>Integrity</strong><br />We maintain high ethical standards.</p>
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateRows: '1fr 1fr', gap: '20px' }}>
          {['cUi5uo4yMn5TG1SmwofRKmQHTnPaCWkObGjkFa1ez65StnoTA.jpg', 'fCQHrSUE0fm36UnSfWcSMZD2gJh2VAybZCnd5bBEB96oaPRnA.jpg'].map((imgSrc, index) => (
            <img
              key={index}
              src={`https://storage.googleapis.com/a1aa/image/${imgSrc}`}
              alt={`Core Value Image ${index + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
          ))}
        </div>
      </div>

      {/* WHY US SECTION */}
      <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#f4f4f9', padding: '60px 0', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          {['PPmFRkTdiqZiHh5BGNgeYromavJeCXZZFZGfARxpatLfXgiOB.jpg', 'SsOgII80ww6RM18BVWgQNyilLVHAlGeUPVsNTMvfz0e6LQRnA.jpg', 'fCQHrSUE0fm36UnSfWcSMZD2gJh2VAybZCnd5bBEB96oaPRnA.jpg'].map((imgSrc, index) => (
            <div
              key={index}
              style={{
                width: '120px',
                height: '120px',
                backgroundColor: '#d1e3f8',
                margin: '15px',
                clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src={`https://storage.googleapis.com/a1aa/image/${imgSrc}`}
                alt={`Why Us Image ${index + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          ))}
        </div>
        <div style={{ flex: 1, padding: '0 40px', textAlign: 'left' }}>
          <h1 style={{ fontSize: '40px', fontWeight: 'bold', color: '#445a78' }}>Why Us?</h1>
          <p style={{ fontSize: '20px', color: '#445a78' }}>
            Our distinctive feature is our client-focused strategy. We place a high value on comprehending the specific requirements and obstacles of each client.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

