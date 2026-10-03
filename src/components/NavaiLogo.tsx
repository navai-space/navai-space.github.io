import React from 'react';
import navaiLogo from '../assets/logo/svg/NAVAI-logo_primary.svg';

interface NavaiLogoProps {
  className?: string;
}

export default function NavaiLogo({ className = 'h-10' }: NavaiLogoProps) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img src={navaiLogo} alt="NAVAI Space" className="h-full w-auto max-w-full" draggable={false} />
    </div>
  );
}
