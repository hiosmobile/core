import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Vaso } from 'vaso';

export default function Card({ title, children, className='', bodyClass='' }) {
  const { acrylicEnabled, backgroundEnabled } = useContext(ThemeContext);

  const isJoining = className.includes('joinTop') || className.includes('joinBottom') || className.includes('joinMiddle');
  const baseClass = isJoining ? 'card' : 'card full';

  const isAcrylic = acrylicEnabled && backgroundEnabled;

  const cardContent = (
    <div className={`card-body ${bodyClass}`.trim()} style={{ flexGrow: 1 }}>
      {title && <h5 className="card-title">{title}</h5>}
      {children}
    </div>
  );

  if (isAcrylic) {
    const radius = 0;

    return (
      <Vaso
        className={`${baseClass} ${className}`.trim()}
        radius={radius}
        depth={0.5}        
        blur={3}          
        dispersion={0.5}   
        style={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          background: 'transparent',
          backdropFilter: 'none',
          WebkitBackdropFilter: 'none'
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--glass-tint)', borderRadius: radius, pointerEvents: 'none', zIndex: 0 }} />
        
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          {cardContent}
        </div>
      </Vaso>
    );
  }

  return (
    <div className={`${baseClass} ${className}`.trim()} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {cardContent}
    </div>
  );
}