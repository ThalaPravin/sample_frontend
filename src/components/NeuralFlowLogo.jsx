import React from 'react';

export default function NeuralFlowLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Neural network nodes */}
      <circle cx="12" cy="3" r="2" fill="#020817"/>
      <circle cx="4" cy="12" r="2" fill="#020817"/>
      <circle cx="20" cy="12" r="2" fill="#020817"/>
      <circle cx="8" cy="20" r="2" fill="#020817"/>
      <circle cx="16" cy="20" r="2" fill="#020817"/>
      <circle cx="12" cy="12" r="2.5" fill="#020817"/>
      {/* Connections */}
      <line x1="12" y1="5" x2="12" y2="9.5" stroke="#020817" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="5.4" y1="10.6" x2="9.9" y2="11.1" stroke="#020817" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="18.6" y1="10.6" x2="14.1" y2="11.1" stroke="#020817" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="10.8" y1="14.1" x2="8.8" y2="18.1" stroke="#020817" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="13.2" y1="14.1" x2="15.2" y2="18.1" stroke="#020817" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Outer glow nodes */}
      <circle cx="12" cy="3" r="2" fill="currentColor"/>
      <circle cx="4" cy="12" r="2" fill="currentColor"/>
      <circle cx="20" cy="12" r="2" fill="currentColor"/>
      <circle cx="8" cy="20" r="2" fill="currentColor"/>
      <circle cx="16" cy="20" r="2" fill="currentColor"/>
      <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
      <line x1="12" y1="5" x2="12" y2="9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      <line x1="5.4" y1="10.6" x2="9.9" y2="11.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      <line x1="18.6" y1="10.6" x2="14.1" y2="11.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      <line x1="10.8" y1="14.1" x2="8.8" y2="18.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      <line x1="13.2" y1="14.1" x2="15.2" y2="18.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
    </svg>
  );
}
