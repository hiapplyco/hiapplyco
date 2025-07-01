import React from 'react';

interface ColorfulApplyLogoProps {
  className?: string;
}

const ColorfulApplyLogo: React.FC<ColorfulApplyLogoProps> = ({ className = "h-10" }) => {
  // Extract height class and calculate text size
  const heightMatch = className.match(/h-(\d+)/);
  const heightValue = heightMatch ? parseInt(heightMatch[1]) : 10;
  
  // Calculate responsive text size based on height
  const textSizeClass = heightValue >= 14 ? 'text-5xl md:text-6xl' : 
                        heightValue >= 12 ? 'text-4xl md:text-5xl' : 
                        'text-3xl md:text-4xl';
  
  return (
    <div className={`flex items-center ${className}`}>
      <span className={`font-black ${textSizeClass} tracking-tight`} style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
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