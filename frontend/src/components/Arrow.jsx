import React from 'react';

const Arrow = () => {
  const chevronStyle = {
    position: 'relative',
    width: '60px',
    height: '13px',
    opacity: 0,
    transform: 'scale(0.3)',
    animation: 'move-chevron 3s ease-out infinite',
  };

  const chevronBeforeStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '50%',
    background: '#3b82f6',
    transform: 'skewY(30deg)',
  };

  const chevronAfterStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: '50%',
    background: '#3b82f6',
    transform: 'skewY(-30deg)',
  };

  const keyframes = `
    @keyframes move-chevron {
      25% { opacity: 1; }
      33.3% { opacity: 1; transform: translateY(30px) scale(0.95); }
      66.6% { opacity: 1; transform: translateY(40px) scale(0.9); }
      100% { opacity: 0; transform: translateY(55px) scale(0.9); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div 
        className="down-arrow"
        style={{
          display: 'inline-block',
          width: '80px',
          height: '100px',
          paddingBottom: '80px', // Add padding-bottom here
          boxSizing: 'border-box', // Optional: ensures padding is included in total height
        }}
      >
        <div 
          className="arrow-wrapper"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div 
            className="chevron"
            style={{ ...chevronStyle, animationDelay: '0.5s' }}
          >
            <div style={chevronBeforeStyle} />
            <div style={chevronAfterStyle} />
          </div>
          <div 
            className="chevron"
            style={{ ...chevronStyle, animationDelay: '0s' }}
          >
            <div style={chevronBeforeStyle} />
            <div style={chevronAfterStyle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Arrow;