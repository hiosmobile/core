import React from 'react';
import RippleButton from './RippleButton';

export default function MenuActionBtn({ icon, text, className = '', onClick }) {
    return (
        <RippleButton delay={150} className={`roundedImage button ${className}`.trim()} onClick={onClick}>
            <span className="material-symbols-rounded">{icon}</span>
            <span className="button-text">{text}</span>
        </RippleButton>
    )
}