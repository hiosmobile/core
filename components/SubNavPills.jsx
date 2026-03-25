import React from 'react';
import RippleButton from './RippleButton';

export default function SubNavPills({ tabs, activeTab, setActiveTab }) {
    return (
        <div className="sub-nav-pills-header">
            {tabs.map((tab) => (
                <RippleButton 
                    key={tab.id} 
                    className={`sub-header-tab ${activeTab === tab.id ? 'active' : ''}`} 
                    onClick={() => setActiveTab(tab.id)}
                >
                    {tab.label}
                </RippleButton>
            ))}
        </div>
    );
}