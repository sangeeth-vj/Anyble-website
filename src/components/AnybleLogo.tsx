import React from 'react';

/**
 * Props for the AnybleLogo component
 */
interface AnybleLogoProps {
  className?: string;
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'wordmark' | 'appIcon';
  showIcon?: boolean;
}

/**
 * Height presets for the logo
 */
const SIZES = {
  sm: 26,
  md: 34,
  lg: 42,
  xl: 54,
};

/**
 * The authentic Anyble SVG wordmark.
 * Features:
 * - Clean "Anybl" text
 * - Letter "e"
 * - 3 signature purple radiating rays above "e"
 * (No artificial "A" icon badge)
 */
const WordmarkSvg: React.FC<{ textColor: string; sparkColor: string; height: number }> = ({
  textColor,
  sparkColor,
  height,
}) => (
  <svg
    viewBox="0 0 135 44"
    style={{ height }}
    className="overflow-visible w-auto block select-none"
    aria-label="Anyble"
  >
    {/* First letters: Anybl */}
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

    {/* Last letter: e */}
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

    {/* 3 radiating purple rays above 'e' */}
    <g stroke={sparkColor} strokeLinecap="round">
      <line x1="106" y1="14" x2="103" y2="6" strokeWidth="3.6" />
      <line x1="113" y1="12" x2="116" y2="4" strokeWidth="3.6" />
      <line x1="119" y1="16" x2="128" y2="10" strokeWidth="3.6" />
    </g>
  </svg>
);

/**
 * AnybleLogo
 * Displays the official unedited Anyble brand logo.
 */
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
  const height = SIZES[size];

  // 1. Standalone app icon badge (squircle card containing the authentic wordmark)
  if (variant === 'appIcon') {
    return (
      <div
        className={`relative shrink-0 rounded-[12px] bg-gradient-to-b from-[#FCF9F0] to-[#F5F0E1] border border-[#E3DCB6] shadow-xs flex items-center justify-center p-1 select-none ${className}`}
        style={{ width: height + 8, height: height + 8 }}
      >
        <WordmarkSvg textColor="#111111" sparkColor="#9333EA" height={height * 0.6} />
      </div>
    );
  }

  // 2. Standard brand display: Clean original wordmark
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {showIcon && (
        <div
          className="relative shrink-0 rounded-[9px] bg-gradient-to-b from-[#FCF9F0] to-[#F5F0E1] border border-[#E3DCB6] shadow-2xs flex items-center justify-center px-1.5 py-0.5 overflow-hidden"
          style={{ height }}
        >
          <WordmarkSvg textColor="#111111" sparkColor="#9333EA" height={height * 0.65} />
        </div>
      )}

      <WordmarkSvg textColor={textColor} sparkColor={sparkColor} height={height} />
    </div>
  );
};
