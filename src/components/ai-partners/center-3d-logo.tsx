import React from 'react';

interface Center3DLogoProps {
  onClick: () => void;
}

export const Center3DLogo = ({ onClick }: Center3DLogoProps) => {
  return (
    <div
      className="relative w-48 h-48 cursor-pointer overflow-visible"
      onClick={onClick}
    >
      {/* Outer sun glow layers */}
      <div className="absolute -inset-8 rounded-full opacity-40">
        <div className="absolute inset-0 bg-yellow-300/30 rounded-full blur-3xl" />
      </div>
      <div className="absolute -inset-6 rounded-full opacity-60">
        <div className="absolute inset-0 bg-yellow-400/40 rounded-full blur-2xl" />
      </div>
      <div className="absolute -inset-4 rounded-full opacity-80">
        <div className="absolute inset-0 bg-yellow-500/50 rounded-full blur-xl" />
      </div>

      {/* Main sun container */}
      <div className="relative w-full h-full rounded-full overflow-hidden">
        {/* Yellow sun background with gradient */}
        <div className="absolute inset-0 rounded-full">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 rounded-full" />
        </div>

        {/* Inner sun glow effect */}
        <div className="absolute inset-0 rounded-full pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-white/40 via-yellow-300/20 to-transparent rounded-full" />
          <div className="absolute inset-0 bg-gradient-radial from-yellow-200/30 via-transparent to-transparent rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
        </div>

        {/* Soft edge fade */}
        <div className="absolute inset-0 rounded-full pointer-events-none" style={{
          background: 'radial-gradient(circle at center, transparent 70%, rgba(255, 255, 255, 0.1) 100%)',
        }} />
      </div>

      {/* Outer corona effect */}
      <div className="absolute -inset-2 rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}>
        <div className="absolute inset-0 rounded-full" style={{
          background: 'radial-gradient(circle at center, transparent 50%, rgba(251, 191, 36, 0.2) 70%, transparent 100%)',
        }} />
      </div>
    </div>
  );
};