import React from 'react';

interface AnybleLogoProps {
  className?: string;
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'wordmark' | 'appIcon';
  showIcon?: boolean;
}

export const AnybleLogo: React.FC<AnybleLogoProps> = ({
  className = '',
  theme = 'light',
  size = 'md',
  variant = 'wordmark',
  showIcon = false,
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#17211b';
  const sparkColor = isDark ? '#C084FC' : '#9333EA';

  const sizeStyles = {
    sm: { height: 26, fontSize: 20 },
    md: { height: 34, fontSize: 26 },
    lg: { height: 42, fontSize: 32 },
    xl: { height: 54, fontSize: 40 },
  }[size];

  // If the standalone official app icon badge is requested (matching public/anyble-icon.svg)
  if (variant === 'appIcon') {
    return (
      <div 
        className={`relative shrink-0 rounded-[12px] bg-gradient-to-b from-[#FCF9F0] to-[#F5F0E1] border border-[#E3DCB6] shadow-xs flex items-center justify-center p-1 select-none ${className}`}
        style={{ width: sizeStyles.height + 8, height: sizeStyles.height + 8 }}
      >
        <svg
          viewBox="0 0 135 44"
          className="w-full h-auto overflow-visible"
          aria-label="Anyble"
        >
          <text
            x="4"
            y="34"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
            fontWeight="900"
            fontSize="35"
            fill="#111111"
            letterSpacing="-1"
          >
            Anybl
          </text>
          <text
            x="97"
            y="34"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
            fontWeight="900"
            fontSize="35"
            fill="#111111"
            letterSpacing="-0.5"
          >
            e
          </text>
          <g stroke="#9333EA" strokeLinecap="round">
            <line x1="106" y1="14" x2="103" y2="6" strokeWidth="3.6" />
            <line x1="113" y1="12" x2="116" y2="4" strokeWidth="3.6" />
            <line x1="119" y1="16" x2="128" y2="10" strokeWidth="3.6" />
          </g>
        </svg>
      </div>
    );
  }

  // Original official Anyble logo wordmark with signature purple spark radiating above 'e'
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {showIcon && (
        <div 
          className="relative shrink-0 rounded-[9px] bg-gradient-to-b from-[#FCF9F0] to-[#F5F0E1] border border-[#E3DCB6] shadow-2xs flex items-center justify-center px-1.5 py-0.5 overflow-hidden"
          style={{ height: sizeStyles.height }}
        >
          {/* Authentic squircle containing the full official logo, never letter A */}
          <svg
            viewBox="0 0 135 44"
            style={{ height: sizeStyles.height * 0.65 }}
            className="w-auto overflow-visible"
            aria-hidden="true"
          >
            <text
              x="4"
              y="34"
              fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
              fontWeight="900"
              fontSize="35"
              fill="#111111"
              letterSpacing="-1"
            >
              Anybl
            </text>
            <text
              x="97"
              y="34"
              fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
              fontWeight="900"
              fontSize="35"
              fill="#111111"
              letterSpacing="-0.5"
            >
              e
            </text>
            <g stroke="#9333EA" strokeLinecap="round">
              <line x1="106" y1="14" x2="103" y2="6" strokeWidth="3.6" />
              <line x1="113" y1="12" x2="116" y2="4" strokeWidth="3.6" />
              <line x1="119" y1="16" x2="128" y2="10" strokeWidth="3.6" />
            </g>
          </svg>
        </div>
      )}

      {/* Official Unedited Anyble Wordmark with Signature Purple Spark */}
      <svg
        viewBox="0 0 135 44"
        style={{ height: sizeStyles.height }}
        className="overflow-visible w-auto block"
        aria-label="Anyble"
      >
        {/* Main "Anybl" text */}
        <text
          x="4"
          y="34"
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
          fontWeight="900"
          fontSize="35"
          fill={textColor}
          letterSpacing="-1"
        >
          Anybl
        </text>

        {/* Letter 'e' */}
        <text
          x="97"
          y="34"
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
          fontWeight="900"
          fontSize="35"
          fill={textColor}
          letterSpacing="-0.5"
        >
          e
        </text>

        {/* Original 3 Radiating Purple Rays above 'e' */}
        <g stroke={sparkColor} strokeLinecap="round">
          <line x1="106" y1="14" x2="103" y2="6" strokeWidth="3.6" />
          <line x1="113" y1="12" x2="116" y2="4" strokeWidth="3.6" />
          <line x1="119" y1="16" x2="128" y2="10" strokeWidth="3.6" />
        </g>
      </svg>
    </div>
  );
};
