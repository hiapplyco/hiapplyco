import React from 'react';

interface ColorfulApplyLogoProps {
  className?: string;
}

const ColorfulApplyLogo: React.FC<ColorfulApplyLogoProps> = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="font-black text-4xl tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <span style={{ color: '#8B5CF6' }}>A</span>
        <span style={{ color: '#6366F1' }}>P</span>
        <span style={{ color: '#3B82F6' }}>P</span>
        <span style={{ color: '#10B981' }}>L</span>
        <span style={{ color: '#059669' }}>Y</span>
      </span>
    </div>
  );
};

export default ColorfulApplyLogo;