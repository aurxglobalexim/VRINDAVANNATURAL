import React from 'react';

/**
 * Official VRINDAVAN NATURALS Circular Emblem SVG
 */
export const VrindavanEmblem: React.FC<{ className?: string }> = ({
  className = 'w-12 h-12',
}) => {
  const uniqueId = React.useId();
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient
          id={`leafArc-${uniqueId}`}
          x1="20"
          y1="15"
          x2="115"
          y2="130"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#86C61B" />
          <stop offset="50%" stopColor="#3E921B" />
          <stop offset="100%" stopColor="#125E1F" />
        </linearGradient>
        <linearGradient
          id={`mortarWood-${uniqueId}`}
          x1="50"
          y1="66"
          x2="114"
          y2="104"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#C1731D" />
          <stop offset="55%" stopColor="#8E4A0D" />
          <stop offset="100%" stopColor="#5D2D06" />
        </linearGradient>
        {/* Bottom circular arc for curved VRINDAVAN NATURALS text */}
        <path
          id={`bottomArc-${uniqueId}`}
          d="M 18,90 A 64,64 0 0,0 142,90"
          fill="none"
        />
      </defs>

      {/* Outer Sweeping Green Crescent & Upper Leaf */}
      <path
        d="M30 100C16 71 25 34 56 20C74 12 94 15 106 23C88 23 67 33 53 52C41 68 37 86 43 103C51 122 72 131 94 126C112 122 125 106 131 86C129 110 112 131 88 136C61 142 39 124 30 100Z"
        fill={`url(#leafArc-${uniqueId})`}
      />
      <path
        d="M37 72C37 42 64 18 104 21C88 37 74 48 48 58C64 44 80 34 95 28C69 32 48 48 37 72Z"
        fill="#79BC1C"
      />

      {/* Rolling Green Farm Hills & Golden-Brown Path */}
      <path
        d="M36 82C51 82 65 88 76 97C61 97 47 94 37 89C36 86 36 84 36 82Z"
        fill="#2E7D1B"
      />
      <path
        d="M39 96C53 96 67 101 75 109C61 112 48 106 39 96Z"
        fill="#57A51E"
      />
      <path
        d="M49 112C59 109 68 109 75 113C67 120 56 118 49 112Z"
        fill="#2E7D1B"
      />
      <path
        d="M69 122C77 106 91 93 117 88C112 93 96 104 84 124C79 124 73 124 69 122Z"
        fill="#AC6719"
      />
      <path
        d="M88 121C97 110 108 101 121 96C116 109 103 118 88 121Z"
        fill="#70B61C"
      />

      {/* Two Sprouting Green Leaves Inside Mortar */}
      <path d="M78 72C66 68 61 55 64 45C73 48 80 57 78 72Z" fill="#2B7C1A" />
      <path d="M81 72C78 56 88 41 101 37C103 52 95 65 81 72Z" fill="#1E6C18" />
      <path
        d="M81 70C85 57 93 46 100 40"
        stroke="#8FD42F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M77 70C73 61 68 53 65 48"
        stroke="#8FD42F"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Wooden Pestle */}
      <path
        d="M92 68L109 46C112.5 42 118.5 43.5 120.5 47.5C122.5 51.5 120.5 56.5 116.5 59L102.5 70.5H92Z"
        fill="#A65B14"
      />
      <circle cx="115" cy="49.5" r="6" fill="#C77621" />

      {/* Brown Wooden Mortar Bowl */}
      <path
        d="M54 68C65 73.5 97 73.5 110 68C109 88 96 98.5 82 98.5C68 98.5 55 88 54 68Z"
        fill={`url(#mortarWood-${uniqueId})`}
      />
      <path
        d="M54 68C68 74 97 74 110 68"
        stroke="#DC8E34"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* Curved Bottom Arc Text: VRINDAVAN NATURALS */}
      <text
        fill="#084E1D"
        fontSize="13.2"
        fontWeight="800"
        letterSpacing="0.05em"
        fontFamily="Outfit, Plus Jakarta Sans, sans-serif"
      >
        <textPath href={`#bottomArc-${uniqueId}`} startOffset="50%" textAnchor="middle">
          VRINDAVAN NATURALS
        </textPath>
      </text>
    </svg>
  );
};

interface VrindavanFullLogoProps {
  className?: string;
  variant?: 'default' | 'light';
}

/**
 * Proportionally Locked Single-SVG Official VRINDAVAN NATURALS Logo
 * Tightly cropped viewBox (0 0 500 156) for crisp alignment in header, footer, and product graphics.
 */
export const VrindavanFullLogo: React.FC<VrindavanFullLogoProps> = ({
  className = 'h-11 sm:h-13 w-auto',
  variant = 'default',
}) => {
  const uniqueId = React.useId();
  const primaryTextFill = variant === 'light' ? '#FAF7F0' : '#07561F';
  const subTextFill = variant === 'light' ? '#D4B982' : '#07561F';
  const arcTextFill = variant === 'light' ? '#E6C67C' : '#084E1D';

  return (
    <svg
      viewBox="0 0 500 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none block ${className}`}
      role="img"
      aria-label="VRINDAVAN NATURALS - शुद्ध आयुर्वेदिक उत्पाद"
    >
      <defs>
        <linearGradient
          id={`fullLeafArc-${uniqueId}`}
          x1="18"
          y1="14"
          x2="116"
          y2="132"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#86C61B" />
          <stop offset="50%" stopColor="#3E921B" />
          <stop offset="100%" stopColor="#125E1F" />
        </linearGradient>
        <linearGradient
          id={`fullMortar-${uniqueId}`}
          x1="48"
          y1="66"
          x2="112"
          y2="104"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#C1731D" />
          <stop offset="55%" stopColor="#8E4A0D" />
          <stop offset="100%" stopColor="#5D2D06" />
        </linearGradient>
        <path
          id={`fullBottomArc-${uniqueId}`}
          d="M 14,88 A 65,65 0 0,0 144,88"
          fill="none"
        />
      </defs>

      {/* ==================== LEFT: CIRCULAR EMBLEM ==================== */}
      <g transform="translate(0, 0)">
        <path
          d="M28 98C14 68 23 30 54 16C72 8 92 11 104 19C86 19 65 29 51 48C39 64 35 82 41 99C49 118 70 127 92 122C110 118 123 102 129 82C127 106 110 127 86 132C59 138 37 120 28 98Z"
          fill={`url(#fullLeafArc-${uniqueId})`}
        />
        <path
          d="M35 68C35 38 62 14 102 17C86 33 72 44 46 54C62 40 78 30 93 24C67 28 46 44 35 68Z"
          fill="#79BC1C"
        />

        {/* Hills & Farm Path */}
        <path
          d="M34 78C49 78 63 84 74 93C59 93 45 90 35 85C34 82 34 80 34 78Z"
          fill="#2E7D1B"
        />
        <path
          d="M37 92C51 92 65 97 73 105C59 108 46 102 37 92Z"
          fill="#57A51E"
        />
        <path
          d="M47 108C57 105 66 105 73 109C65 116 54 114 47 108Z"
          fill="#2E7D1B"
        />
        <path
          d="M67 118C75 102 89 89 115 84C110 89 94 100 82 120C77 120 71 120 67 118Z"
          fill="#AC6719"
        />
        <path
          d="M86 117C95 106 106 97 119 92C114 105 101 114 86 117Z"
          fill="#70B61C"
        />

        {/* Two Green Leaves in Mortar */}
        <path d="M76 68C64 64 59 51 62 41C71 44 78 53 76 68Z" fill="#2B7C1A" />
        <path d="M79 68C76 52 86 37 99 33C101 48 93 61 79 68Z" fill="#1E6C18" />
        <path
          d="M79 66C83 53 91 42 98 36"
          stroke="#8FD42F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M75 66C71 57 66 49 63 44"
          stroke="#8FD42F"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Pestle & Mortar Bowl */}
        <path
          d="M90 64L107 42C110.5 38 116.5 39.5 118.5 43.5C120.5 47.5 118.5 52.5 114.5 55L100.5 66.5H90Z"
          fill="#A65B14"
        />
        <circle cx="113" cy="45.5" r="6" fill="#C77621" />
        <path
          d="M52 64C63 69.5 95 69.5 108 64C107 84 94 94.5 80 94.5C66 94.5 53 84 52 64Z"
          fill={`url(#fullMortar-${uniqueId})`}
        />
        <path
          d="M52 64C66 70 95 70 108 64"
          stroke="#DC8E34"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Curved Arc Text */}
        <text
          fill={arcTextFill}
          fontSize="13.2"
          fontWeight="800"
          letterSpacing="0.05em"
          fontFamily="Outfit, Plus Jakarta Sans, sans-serif"
        >
          <textPath href={`#fullBottomArc-${uniqueId}`} startOffset="50%" textAnchor="middle">
            VRINDAVAN NATURALS
          </textPath>
        </text>
      </g>

      {/* ==================== RIGHT: STACKED WORDMARK & HINDI SUBTITLE ==================== */}
      {/* Green Leaf Sprouting Above the 'I' in VRINDAVAN */}
      <g transform="translate(230, 3)">
        <path d="M4 22C3 10 12 2 26 2C25 14 16 21 4 22Z" fill="#147627" />
        <path
          d="M5 21C10 13 17 6 24 3"
          stroke="#79C427"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </g>

      {/* Row 1: VRINDAVAN */}
      <text
        x="326"
        y="61"
        textAnchor="middle"
        fill={primaryTextFill}
        fontSize="52"
        fontWeight="800"
        letterSpacing="-0.02em"
        fontFamily="Outfit, Plus Jakarta Sans, sans-serif"
      >
        VRINDAVAN
      </text>

      {/* Row 2: NATURALS */}
      <text
        x="326"
        y="104"
        textAnchor="middle"
        fill={primaryTextFill}
        fontSize="47"
        fontWeight="800"
        letterSpacing="0.025em"
        fontFamily="Outfit, Plus Jakarta Sans, sans-serif"
      >
        NATURALS
      </text>

      {/* Row 3: Horizontal Green Line + Center Double Leaf Motif */}
      <line
        x1="180"
        y1="118"
        x2="300"
        y2="118"
        stroke={subTextFill}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <g transform="translate(306, 106)">
        <path d="M18 19C10 18 3 11 3 3C11 3 18 9 18 19Z" fill="#238225" />
        <path d="M22 19C30 18 37 11 37 3C29 3 22 9 22 19Z" fill="#11661E" />
        <path
          d="M15 16L7 7M25 16L33 7"
          stroke="#8AD02E"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <line
        x1="352"
        y1="118"
        x2="472"
        y2="118"
        stroke={subTextFill}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Row 4: शुद्ध आयुर्वेदिक उत्पाद */}
      <text
        x="326"
        y="146"
        textAnchor="middle"
        fill={subTextFill}
        fontSize="23"
        fontWeight="700"
        fontFamily="'Noto Sans Devanagari', Plus Jakarta Sans, sans-serif"
      >
        शुद्ध आयुर्वेदिक उत्पाद
      </text>
    </svg>
  );
};
