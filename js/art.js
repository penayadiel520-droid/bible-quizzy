/* Drawings (viewBox 0 0 160 120, except the 320x170 heroes). Fills come from the .a-* / .s-* classes in index.html. */
const BASE_ART = {
  book: `<svg class="art" viewBox="0 0 320 170" role="img" aria-label="An open Bible glowing on a hill under a crescent moon">
    <rect class="a-sky" width="320" height="170" rx="18"/>
    <circle class="a-star tw" cx="34" cy="30" r="1.6"/><circle class="a-star" cx="70" cy="58" r="1.1"/>
    <circle class="a-star tw" cx="112" cy="22" r="1.4"/><circle class="a-star" cx="150" cy="46" r="1"/>
    <circle class="a-star tw" cx="196" cy="28" r="1.5"/><circle class="a-star" cx="214" cy="70" r="1"/>
    <circle class="a-star tw" cx="292" cy="86" r="1.2"/><circle class="a-star" cx="58" cy="92" r="1"/>
    <circle class="a-star tw" cx="302" cy="20" r="1.1"/><circle class="a-star" cx="16" cy="64" r="1"/>
    <circle class="a-gold" cx="256" cy="44" r="17"/><circle class="a-sky" cx="264" cy="38" r="15"/>
    <path class="a-hill" d="M0 126 Q70 96 150 118 T320 108 V170 H0Z"/>
    <ellipse class="a-glow" cx="160" cy="118" rx="84" ry="34"/>
    <ellipse class="a-glow" cx="160" cy="118" rx="48" ry="20"/>
    <path class="a-hill2" d="M0 150 Q90 126 176 144 T320 138 V170 H0Z"/>
    <path class="a-clay" d="M106 133 Q134 128 160 140 Q186 128 214 133 L214 138 Q186 134 160 145 Q134 134 106 138Z"/>
    <path class="a-page" d="M160 114 Q138 102 114 108 L114 131 Q138 125 160 136 Z"/>
    <path class="a-page" d="M160 114 Q182 102 206 108 L206 131 Q182 125 160 136 Z"/>
    <g class="s-line" stroke-width="1.6" stroke-linecap="round">
      <path d="M122 116 Q137 111 152 117"/><path d="M122 122 Q137 117 152 123"/><path d="M122 128 Q134 123 146 127"/>
      <path d="M168 117 Q183 111 198 116"/><path d="M168 123 Q183 117 198 122"/><path d="M174 127 Q186 123 198 128"/>
    </g>
    <g class="s-gold" stroke-width="2" stroke-linecap="round"><path d="M160 98 V88"/><path d="M140 101 L134 93"/><path d="M180 101 L186 93"/></g>
  </svg>`,
  mirror: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A mirror with an arrow bouncing back toward the one who pointed it">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-glow" cx="96" cy="56" r="44"/>
    <path class="s-stroke" stroke-width="3" stroke-linecap="round" d="M96 94 V106 M82 108 H110"/>
    <ellipse class="a-glass" cx="96" cy="54" rx="26" ry="36"/>
    <ellipse class="s-gold" stroke-width="4" cx="96" cy="54" rx="26" ry="36"/>
    <path class="s-star" stroke-width="3" stroke-linecap="round" d="M84 38 L92 30 M82 50 L100 32"/>
    <path class="s-stroke" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 5" d="M18 42 Q44 40 64 48"/>
    <path class="s-gold" stroke-width="2.5" stroke-linecap="round" d="M64 62 Q44 70 24 70"/>
    <path class="s-gold" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="M31 64 L23 70 L31 76"/>
  </svg>`,
  scales: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="Balanced scales">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="22" cy="20" r="1.3"/><circle class="a-star" cx="140" cy="16" r="1.1"/><circle class="a-star tw" cx="132" cy="98" r="1"/>
    <circle class="a-glow" cx="80" cy="28" r="24"/>
    <path class="s-stroke" stroke-width="3" stroke-linecap="round" d="M80 22 V96 M36 36 H124"/>
    <path class="s-stroke" stroke-width="1.6" d="M36 36 L24 66 M36 36 L48 66 M124 36 L112 66 M124 36 L136 66"/>
    <circle class="a-gold" cx="80" cy="20" r="5"/>
    <path class="a-gold" d="M20 66 H52 Q46 80 36 80 Q26 80 20 66Z"/>
    <path class="a-gold" d="M108 66 H140 Q134 80 124 80 Q114 80 108 66Z"/>
    <path class="a-gold-deep" d="M70 96 H90 L98 104 H62Z"/>
  </svg>`,
  heart: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A heart with a small flame glowing inside">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-glow" cx="80" cy="62" r="44"/>
    <g class="s-gold" stroke-width="2" stroke-linecap="round"><path d="M80 12 V20"/><path d="M42 22 L47 28"/><path d="M118 22 L113 28"/><path d="M26 58 H34"/><path d="M126 58 H134"/></g>
    <path class="a-heart" d="M80 100 C40 74 34 52 46 40 C58 28 74 34 80 46 C86 34 102 28 114 40 C126 52 120 74 80 100Z"/>
    <path class="a-gold" d="M80 52 C89 61 91 69 87 77 C85 81 75 81 73 77 C69 69 72 62 80 52Z"/>
    <path class="a-star" d="M80 64 C83 68 84 72 82 75 C81 77 79 77 78 75 C76 72 77 68 80 64Z"/>
  </svg>`,
  lamp: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="An ancient oil lamp with a flame">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="24" cy="22" r="1.3"/><circle class="a-star" cx="58" cy="30" r="1"/><circle class="a-star tw" cx="142" cy="96" r="1.1"/>
    <circle class="a-glow" cx="120" cy="42" r="36"/><circle class="a-glow" cx="120" cy="42" r="20"/>
    <path class="s-clay" stroke-width="5" stroke-linecap="round" d="M38 72 Q22 70 24 60 Q26 54 34 58"/>
    <path class="a-clay" d="M34 78 Q34 64 62 62 L96 62 Q108 62 116 58 L124 56 Q127 62 118 68 Q104 82 76 84 Q40 86 34 78Z"/>
    <ellipse class="a-clay2" cx="66" cy="64" rx="17" ry="3.5"/>
    <path class="a-clay2" d="M60 84 H92 L88 90 H64Z"/>
    <path class="a-gold" d="M120 55 C113 47 115 37 121 28 C128 38 130 47 124 55Z"/>
    <path class="a-star" d="M121 53 C118 48 119 43 122 39 C125 44 125 49 123 53Z"/>
  </svg>`,
  coins: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="Coins stacking up">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-glow" cx="80" cy="74" r="42"/>
    <ellipse class="a-gold-deep" cx="62" cy="96" rx="22" ry="7"/><ellipse class="a-gold" cx="62" cy="93" rx="22" ry="7"/>
    <ellipse class="a-gold-deep" cx="62" cy="87" rx="22" ry="7"/><ellipse class="a-gold" cx="62" cy="84" rx="22" ry="7"/>
    <ellipse class="a-gold-deep" cx="62" cy="78" rx="22" ry="7"/><ellipse class="a-gold" cx="62" cy="75" rx="22" ry="7"/>
    <ellipse class="a-gold-deep" cx="62" cy="69" rx="22" ry="7"/><ellipse class="a-gold" cx="62" cy="66" rx="22" ry="7"/>
    <ellipse class="a-gold-deep" cx="104" cy="96" rx="22" ry="7"/><ellipse class="a-gold" cx="104" cy="93" rx="22" ry="7"/>
    <ellipse class="a-gold-deep" cx="104" cy="87" rx="22" ry="7"/><ellipse class="a-gold" cx="104" cy="84" rx="22" ry="7"/>
    <circle class="a-gold" cx="106" cy="48" r="10"/><circle class="a-gold-deep" cx="106" cy="48" r="5"/>
    <path class="s-stroke" stroke-width="2" stroke-linecap="round" d="M106 18 V30 M97 24 V33 M115 24 V33"/>
  </svg>`,
  scroll: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="An open scroll of the law">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-glow" cx="80" cy="60" r="46"/>
    <rect class="a-page" x="40" y="26" width="80" height="68"/>
    <rect class="a-clay" x="31" y="18" width="11" height="84" rx="5.5"/>
    <rect class="a-clay" x="118" y="18" width="11" height="84" rx="5.5"/>
    <g class="s-line" stroke-width="2.5" stroke-linecap="round"><path d="M52 40 H108"/><path d="M52 50 H104"/><path d="M52 60 H108"/><path d="M52 70 H98"/><path d="M52 80 H106"/></g>
  </svg>`,
  sunrise: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A path turning toward a rising sun">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-glow" cx="116" cy="70" r="40"/>
    <g class="s-gold" stroke-width="2" stroke-linecap="round"><path d="M116 36 V44"/><path d="M90 46 L95 52"/><path d="M142 46 L137 52"/><path d="M80 66 H88"/><path d="M144 66 H152"/></g>
    <circle class="a-gold" cx="116" cy="72" r="17"/>
    <path class="a-hill" d="M0 78 Q60 64 118 74 T160 70 V120 H0Z"/>
    <path class="a-hill2" d="M0 96 Q60 84 110 94 T160 92 V120 H0Z"/>
    <path class="a-path" d="M46 120 Q60 98 96 86 Q110 81 114 76 L118 77 Q114 86 100 92 Q74 104 72 120Z"/>
  </svg>`,
  pen: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A pen underlining a line of text">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <rect class="a-page" x="22" y="24" width="116" height="74" rx="6"/>
    <g class="s-line" stroke-width="3" stroke-linecap="round"><path d="M34 40 H120"/><path d="M34 54 H110"/><path d="M34 68 H124"/><path d="M34 84 H96"/></g>
    <path class="s-gold" stroke-width="3.2" stroke-linecap="round" d="M34 75 Q58 71 82 75 T124 74"/>
    <g transform="rotate(-35 118 64)"><rect class="a-pen" x="112" y="24" width="11" height="44" rx="3"/><path class="a-gold" d="M112 68 H123 L117.5 78Z"/></g>
  </svg>`,
  footprints: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="Footprints on a mountain path heading toward the dawn">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="20" cy="18" r="1.3"/><circle class="a-star" cx="46" cy="28" r="1"/><circle class="a-star tw" cx="142" cy="18" r="1.2"/>
    <circle class="a-glow" cx="106" cy="52" r="38"/>
    <g class="s-gold" stroke-width="2" stroke-linecap="round"><path d="M106 24 V32"/><path d="M84 34 L89 40"/><path d="M128 34 L123 40"/></g>
    <circle class="a-gold" cx="106" cy="56" r="13"/>
    <path class="a-hill" d="M0 74 L28 50 L50 64 L80 40 L104 62 L130 46 L160 64 V120 H0Z"/>
    <path class="a-hill2" d="M0 98 Q46 82 92 90 T160 86 V120 H0Z"/>
    <path class="a-path" d="M34 120 Q52 102 80 94 Q96 89 104 80 L109 81 Q102 93 86 100 Q66 108 62 120Z"/>
    <g class="a-gold-deep">
      <ellipse cx="47" cy="113" rx="2.4" ry="3.8" transform="rotate(59 47 113)"/>
      <ellipse cx="59" cy="109" rx="2.2" ry="3.5" transform="rotate(59 59 109)"/>
      <ellipse cx="67" cy="101" rx="2" ry="3.2" transform="rotate(59 67 101)"/>
      <ellipse cx="78" cy="99" rx="1.8" ry="2.9" transform="rotate(59 78 99)"/>
      <ellipse cx="86" cy="92" rx="1.6" ry="2.6" transform="rotate(59 86 92)"/>
      <ellipse cx="95" cy="90" rx="1.4" ry="2.3" transform="rotate(59 95 90)"/>
    </g>
  </svg>`,
  voice: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="Waves of a message going out from one glowing point across the earth">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="18" cy="20" r="1.3"/><circle class="a-star" cx="44" cy="12" r="1"/>
    <circle class="a-star tw" cx="140" cy="22" r="1.2"/><circle class="a-star" cx="118" cy="12" r="1"/>
    <circle class="a-glow" cx="80" cy="80" r="44"/>
    <path class="s-star" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="3 5" d="M22 82 A58 58 0 0 1 138 82"/>
    <g class="s-gold" stroke-width="2.6" stroke-linecap="round">
      <path d="M68 82 A12 12 0 0 1 92 82"/>
      <path d="M56 82 A24 24 0 0 1 104 82"/>
      <path d="M44 82 A36 36 0 0 1 116 82"/>
    </g>
    <path class="a-hill" d="M0 92 Q80 70 160 92 V120 H0Z"/>
    <path class="a-hill2" d="M0 106 Q80 90 160 106 V120 H0Z"/>
    <path class="a-gold-deep" d="M25 92 V86 L30 81 L35 86 V92Z"/>
    <path class="a-gold-deep" d="M125 92 V86 L130 81 L135 86 V92Z"/>
    <circle class="a-gold" cx="80" cy="80" r="5"/>
  </svg>`,
  /* ---- John drawings ---- */
  johnHero: `<svg class="art" viewBox="0 0 320 170" role="img" aria-label="Dawn breaking over the Sea of Galilee, with a small fire glowing on the shore">
    <rect class="a-sky" width="320" height="170" rx="18"/>
    <circle class="a-star tw" cx="30" cy="24" r="1.5"/><circle class="a-star" cx="66" cy="44" r="1.1"/>
    <circle class="a-star tw" cx="104" cy="18" r="1.3"/><circle class="a-star" cx="146" cy="38" r="1"/>
    <circle class="a-star tw" cx="176" cy="16" r="1.2"/><circle class="a-star" cx="20" cy="62" r="1"/>
    <circle class="a-star tw" cx="300" cy="22" r="1.1"/>
    <ellipse class="a-glow" cx="236" cy="94" rx="112" ry="62"/>
    <ellipse class="a-glow" cx="236" cy="94" rx="62" ry="34"/>
    <circle class="a-gold" cx="236" cy="96" r="20"/>
    <g class="s-gold" stroke-width="2" stroke-linecap="round"><path d="M236 58 V66"/><path d="M206 68 L211 74"/><path d="M266 68 L261 74"/></g>
    <path class="a-hill" d="M0 90 Q50 70 112 84 T226 88 Q270 80 320 84 V104 H0Z"/>
    <rect class="a-glass" x="0" y="100" width="320" height="42"/>
    <g class="s-gold" stroke-width="2" stroke-linecap="round" opacity=".85"><path d="M214 108 H258"/><path d="M222 116 H250"/><path d="M229 124 H243"/></g>
    <g class="s-star" stroke-width="1.4" stroke-linecap="round"><path d="M24 112 H44"/><path d="M140 120 H164"/><path d="M286 114 H304"/></g>
    <path class="a-hill2" d="M64 116 H114 L106 126 H72Z"/>
    <path class="s-stroke" stroke-width="2" stroke-linecap="round" d="M89 116 V92"/>
    <path class="a-hill2" d="M0 142 Q90 130 180 140 T320 136 V170 H0Z"/>
    <ellipse class="a-glow" cx="132" cy="146" rx="30" ry="11"/>
    <path class="a-clay2" d="M120 150 L144 146 L145 149 L121 153Z"/><path class="a-clay2" d="M122 146 L146 151 L145 154 L121 149Z"/>
    <path class="a-gold" d="M133 128 C126 135 127 143 133 146 C139 143 140 135 133 128Z"/>
    <path class="a-star" d="M133 136 C130 140 130 143 133 145 C136 143 136 140 133 136Z"/>
  </svg>`,
  dove: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A dove coming down in a beam of light">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="22" cy="20" r="1.3"/><circle class="a-star" cx="138" cy="24" r="1.1"/><circle class="a-star tw" cx="26" cy="96" r="1"/>
    <path class="a-glow" d="M64 0 H96 L124 120 H36Z"/>
    <circle class="a-glow" cx="80" cy="60" r="32"/>
    <path class="a-page" d="M76 54 C66 38 48 32 34 36 C48 42 58 54 70 66Z"/>
    <path class="a-page" d="M84 54 C94 38 112 32 126 36 C112 42 102 54 90 66Z"/>
    <path class="a-page" d="M74 40 L80 30 L86 40Z"/>
    <ellipse class="a-page" cx="80" cy="60" rx="11" ry="17"/>
    <circle class="a-page" cx="80" cy="80" r="7.5"/>
    <path class="a-gold" d="M77 86 L80 93 L83 86Z"/>
    <circle class="a-sky" cx="77" cy="80" r="1.3"/><circle class="a-sky" cx="83" cy="80" r="1.3"/>
  </svg>`,
  jar: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A stone water jar filled to the brim with wine">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="24" cy="22" r="1.3"/><circle class="a-star" cx="134" cy="18" r="1.1"/><circle class="a-star tw" cx="140" cy="94" r="1"/>
    <circle class="a-glow" cx="80" cy="64" r="44"/>
    <path class="a-clay" d="M60 36 H100 L97 44 Q116 54 114 76 Q112 98 96 104 H64 Q48 98 46 76 Q44 54 63 44Z"/>
    <rect class="a-clay2" x="56" y="30" width="48" height="8" rx="3"/>
    <ellipse class="a-heart" cx="80" cy="31" rx="21" ry="3.2"/>
    <path class="s-line" stroke-width="2" stroke-linecap="round" d="M52 66 Q80 72 108 66"/>
    <path class="s-line" stroke-width="2" stroke-linecap="round" d="M50 80 Q80 86 110 80"/>
    <g class="s-gold" stroke-width="2" stroke-linecap="round"><path d="M80 12 V20"/><path d="M58 18 L62 24"/><path d="M102 18 L98 24"/></g>
  </svg>`,
  well: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A stone well at noon with a bucket on a rope">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-glow" cx="126" cy="26" r="22"/><circle class="a-gold" cx="126" cy="26" r="10"/>
    <path class="a-hill" d="M0 96 Q80 84 160 96 V120 H0Z"/>
    <rect class="a-clay2" x="50" y="28" width="5" height="42"/><rect class="a-clay2" x="105" y="28" width="5" height="42"/>
    <rect class="a-clay" x="44" y="24" width="72" height="7" rx="3"/>
    <path class="s-line" stroke-width="1.6" d="M80 31 V50"/>
    <path class="a-gold" d="M72 50 H88 L86 60 H74Z"/>
    <rect class="a-clay2" x="46" y="68" width="68" height="30" rx="4"/>
    <ellipse class="a-clay" cx="80" cy="68" rx="36" ry="8"/>
    <ellipse class="a-glass" cx="80" cy="68" rx="27" ry="5"/>
    <g class="s-line" stroke-width="1.4"><path d="M46 82 H114"/><path d="M64 74 V82 M96 74 V82 M80 82 V98 M58 82 V98 M102 82 V98"/></g>
  </svg>`,
  bread: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A basket with five small loaves and two fish">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="20" cy="18" r="1.3"/><circle class="a-star" cx="142" cy="22" r="1.1"/>
    <circle class="a-glow" cx="80" cy="70" r="46"/>
    <ellipse class="a-gold" cx="54" cy="70" rx="13" ry="8"/><ellipse class="a-gold" cx="106" cy="70" rx="13" ry="8"/>
    <ellipse class="a-gold" cx="70" cy="64" rx="13" ry="8"/><ellipse class="a-gold" cx="92" cy="64" rx="13" ry="8"/>
    <ellipse class="a-gold" cx="81" cy="56" rx="13" ry="8"/>
    <g class="s-clay" stroke-width="1.6" stroke-linecap="round"><path d="M76 54 L80 59 M82 53 L86 58"/><path d="M65 62 L69 67 M87 62 L91 67"/></g>
    <path class="a-glass" d="M36 46 Q48 36 60 46 Q48 56 36 46Z"/><path class="a-glass" d="M36 46 L28 40 L28 52Z"/>
    <path class="a-glass" d="M124 46 Q112 36 100 46 Q112 56 124 46Z"/><path class="a-glass" d="M124 46 L132 40 L132 52Z"/>
    <path class="a-clay2" d="M30 74 H130 Q126 100 108 104 H52 Q34 100 30 74Z"/>
    <g class="s-line" stroke-width="1.4"><path d="M34 84 H126"/><path d="M40 94 H120"/><path d="M60 74 V104 M80 74 V104 M100 74 V104"/></g>
  </svg>`,
  eye: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="An eye opening to the light">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="22" cy="20" r="1.3"/><circle class="a-star" cx="138" cy="98" r="1.1"/>
    <circle class="a-glow" cx="80" cy="60" r="46"/>
    <g class="s-gold" stroke-width="2.2" stroke-linecap="round"><path d="M80 10 V20"/><path d="M48 18 L54 26"/><path d="M112 18 L106 26"/><path d="M28 38 L36 42"/><path d="M132 38 L124 42"/></g>
    <path class="a-page" d="M22 62 Q80 22 138 62 Q80 102 22 62Z"/>
    <circle class="a-glass" cx="80" cy="62" r="20"/>
    <circle class="a-sky" cx="80" cy="62" r="9"/>
    <circle class="a-star" cx="86" cy="56" r="4"/>
    <path class="s-stroke" stroke-width="3" stroke-linecap="round" d="M22 62 Q80 22 138 62"/>
  </svg>`,
  gate: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A sheep pen with an open gate and a shepherd's staff">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="24" cy="18" r="1.3"/><circle class="a-star" cx="60" cy="28" r="1"/><circle class="a-star tw" cx="138" cy="20" r="1.2"/>
    <circle class="a-gold" cx="120" cy="30" r="9"/><circle class="a-sky" cx="125" cy="26" r="8"/>
    <path class="a-hill" d="M0 94 Q80 80 160 94 V120 H0Z"/>
    <path class="a-glow" d="M62 58 H98 V98 H62Z"/>
    <ellipse class="a-page" cx="40" cy="54" rx="12" ry="7.5"/><circle class="a-clay2" cx="28" cy="52" r="4.5"/>
    <ellipse class="a-page" cx="122" cy="54" rx="12" ry="7.5"/><circle class="a-clay2" cx="134" cy="52" r="4.5"/>
    <path class="a-clay2" d="M16 60 H62 V98 H16Z"/><path class="a-clay2" d="M98 60 H144 V98 H98Z"/>
    <g class="s-line" stroke-width="1.4"><path d="M16 72 H62 M16 85 H62 M98 72 H144 M98 85 H144"/><path d="M32 60 V72 M48 72 V85 M30 85 V98 M114 60 V72 M128 72 V85 M112 85 V98"/></g>
    <path class="s-gold" stroke-width="3.5" stroke-linecap="round" fill="none" d="M80 100 V42 Q80 28 92 28 Q102 28 102 38"/>
  </svg>`,
  tomb: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="An open tomb with its stone rolled away at sunrise">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="22" cy="18" r="1.3"/><circle class="a-star" cx="56" cy="12" r="1"/>
    <circle class="a-glow" cx="128" cy="66" r="34"/>
    <circle class="a-gold" cx="128" cy="70" r="13"/>
    <g class="s-gold" stroke-width="2" stroke-linecap="round"><path d="M128 40 V48"/><path d="M106 50 L111 56"/><path d="M150 50 L145 56"/></g>
    <path class="a-hill" d="M0 72 Q38 34 90 46 Q128 56 160 80 V120 H0Z"/>
    <path class="a-glass" d="M40 98 V76 Q40 60 56 60 Q72 60 72 76 V98Z"/>
    <ellipse class="a-glow" cx="56" cy="88" rx="12" ry="9"/>
    <circle class="a-clay" cx="96" cy="86" r="17"/>
    <circle class="s-line" stroke-width="1.6" cx="96" cy="86" r="11"/>
    <path class="a-hill2" d="M0 98 Q80 88 160 98 V120 H0Z"/>
  </svg>`,
  basin: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A basin of water with a towel draped over the side">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="138" cy="18" r="1.3"/><circle class="a-star" cx="120" cy="34" r="1"/>
    <circle class="a-glow" cx="80" cy="72" r="44"/>
    <path class="a-clay2" d="M40 26 H60 L64 40 Q64 52 50 52 Q38 52 38 40Z"/>
    <path class="a-clay2" d="M60 30 L70 28 L66 36Z"/>
    <path class="s-star" stroke-width="2.2" stroke-linecap="round" d="M69 33 Q76 42 76 64"/>
    <path class="a-clay" d="M32 70 H128 Q124 98 98 100 H62 Q36 98 32 70Z"/>
    <ellipse class="a-glass" cx="80" cy="70" rx="48" ry="7"/>
    <ellipse class="s-line" stroke-width="2" cx="80" cy="70" rx="48" ry="7"/>
    <path class="a-page" d="M104 66 Q116 54 126 60 L130 96 Q122 100 114 94Z"/>
    <g class="s-line" stroke-width="1.4"><path d="M114 66 L120 92"/><path d="M121 62 L126 90"/></g>
  </svg>`,
  vine: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A grapevine with branches full of fruit">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="22" cy="18" r="1.3"/><circle class="a-star" cx="140" cy="16" r="1.1"/>
    <circle class="a-glow" cx="80" cy="60" r="46"/>
    <path class="s-clay" stroke-width="6" stroke-linecap="round" d="M80 112 Q74 84 82 62 Q88 44 80 22"/>
    <path class="s-clay" stroke-width="3" stroke-linecap="round" d="M80 76 Q58 68 40 52 M82 60 Q104 54 122 42 M78 92 Q100 90 118 78 M81 40 Q66 34 56 24"/>
    <g class="a-leaf"><ellipse cx="48" cy="48" rx="9" ry="6" transform="rotate(-30 48 48)"/><ellipse cx="112" cy="40" rx="9" ry="6" transform="rotate(20 112 40)"/><ellipse cx="62" cy="26" rx="8" ry="5" transform="rotate(-20 62 26)"/><ellipse cx="108" cy="84" rx="8" ry="5" transform="rotate(15 108 84)"/><ellipse cx="88" cy="30" rx="7" ry="4.5" transform="rotate(30 88 30)"/></g>
    <g class="a-heart"><circle cx="38" cy="58" r="4"/><circle cx="45" cy="60" r="4"/><circle cx="41" cy="65" r="4"/><circle cx="48" cy="67" r="3.5"/><circle cx="44" cy="72" r="3.5"/>
      <circle cx="122" cy="48" r="4"/><circle cx="129" cy="50" r="4"/><circle cx="125" cy="55" r="4"/><circle cx="131" cy="58" r="3.5"/><circle cx="127" cy="62" r="3.5"/>
      <circle cx="118" cy="84" r="3.6"/><circle cx="124" cy="87" r="3.6"/><circle cx="120" cy="92" r="3.4"/></g>
  </svg>`,
  cross: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="Three crosses on a hill, the middle one in front of a glowing sky">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="20" cy="18" r="1.2"/><circle class="a-star" cx="142" cy="22" r="1"/>
    <circle class="a-glow" cx="80" cy="54" r="46"/><circle class="a-glow" cx="80" cy="54" r="26"/>
    <path class="a-hill" d="M0 100 Q80 66 160 100 V120 H0Z"/>
    <g opacity=".55"><rect class="a-clay2" x="31" y="58" width="5" height="34"/><rect class="a-clay2" x="23" y="66" width="21" height="4"/>
      <rect class="a-clay2" x="124" y="58" width="5" height="34"/><rect class="a-clay2" x="116" y="66" width="21" height="4"/></g>
    <rect class="a-clay2" x="76" y="20" width="8" height="66"/><rect class="a-clay2" x="58" y="36" width="44" height="7"/>
    <rect class="a-page" x="71" y="24" width="18" height="8" rx="1"/>
  </svg>`,
  net: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A fishing boat at dawn with a net full of fish">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-glow" cx="34" cy="62" r="30"/><circle class="a-gold" cx="34" cy="64" r="10"/>
    <rect class="a-glass" x="0" y="62" width="160" height="58"/>
    <g class="s-star" stroke-width="1.4" stroke-linecap="round"><path d="M12 76 H28"/><path d="M20 104 H40"/><path d="M128 110 H146"/></g>
    <path class="a-clay" d="M44 54 H112 L102 68 H54Z"/>
    <path class="s-stroke" stroke-width="2" stroke-linecap="round" d="M78 54 V26"/>
    <path class="a-glow" d="M100 66 Q140 66 144 92 Q124 108 98 96Z"/>
    <path class="s-line" stroke-width="1.6" fill="none" d="M100 66 Q140 66 144 92 Q124 108 98 96Z"/>
    <g class="s-line" stroke-width="1"><path d="M108 66 L104 98 M118 66 L116 102 M128 68 L130 102 M138 74 L140 98"/><path d="M100 76 H142 M99 86 H144"/></g>
    <g class="a-gold"><ellipse cx="112" cy="80" rx="5" ry="2.5"/><ellipse cx="126" cy="76" rx="5" ry="2.5"/><ellipse cx="122" cy="90" rx="5" ry="2.5"/><ellipse cx="136" cy="88" rx="4.5" ry="2.2"/><ellipse cx="110" cy="92" rx="4.5" ry="2.2"/></g>
  </svg>`,
  /* ---- Whole-Bible drawings ---- */
  library: `<svg class="art" viewBox="0 0 320 170" role="img" aria-label="A shelf of books glowing by lamplight under a night sky">
    <rect class="a-sky" width="320" height="170" rx="18"/>
    <circle class="a-star tw" cx="28" cy="22" r="1.5"/><circle class="a-star" cx="64" cy="46" r="1.1"/>
    <circle class="a-star tw" cx="102" cy="18" r="1.3"/><circle class="a-star" cx="140" cy="40" r="1"/>
    <circle class="a-star tw" cx="182" cy="20" r="1.4"/><circle class="a-star" cx="214" cy="52" r="1"/>
    <circle class="a-star tw" cx="300" cy="78" r="1.2"/><circle class="a-star" cx="20" cy="70" r="1"/>
    <circle class="a-star tw" cx="304" cy="18" r="1.1"/>
    <circle class="a-gold" cx="258" cy="40" r="16"/><circle class="a-sky" cx="266" cy="34" r="14"/>
    <path class="a-hill" d="M0 128 Q80 104 170 120 T320 112 V170 H0Z"/>
    <ellipse class="a-glow" cx="166" cy="112" rx="96" ry="30"/>
    <rect class="a-heart" x="66" y="76" width="14" height="52"/>
    <rect class="a-glass" x="81" y="84" width="12" height="44"/>
    <rect class="a-clay" x="94" y="70" width="17" height="58"/>
    <rect class="a-gold-deep" x="112" y="80" width="12" height="48"/>
    <rect class="a-hill2" x="125" y="66" width="15" height="62"/>
    <rect class="a-heart" x="141" y="78" width="13" height="50"/>
    <rect class="a-clay" x="155" y="72" width="18" height="56"/>
    <rect class="a-glass" x="174" y="82" width="12" height="46"/>
    <rect class="a-gold-deep" x="187" y="68" width="15" height="60"/>
    <rect class="a-hill2" x="203" y="86" width="13" height="42"/>
    <g transform="rotate(16 218 128)"><rect class="a-heart" x="218" y="78" width="14" height="50"/></g>
    <g class="s-gold" stroke-width="1.4" opacity=".75">
      <path d="M66 82 H80 M66 121 H80 M81 90 H93 M81 121 H93 M94 76 H111 M94 121 H111 M112 86 H124 M112 121 H124 M125 72 H140 M125 121 H140"/>
      <path d="M141 84 H154 M141 121 H154 M155 78 H173 M155 121 H173 M174 88 H186 M174 121 H186 M187 74 H202 M187 121 H202 M203 92 H216 M203 121 H216"/>
    </g>
    <rect class="a-clay2" x="56" y="128" width="222" height="8" rx="2"/>
    <circle class="a-glow" cx="268" cy="104" r="14"/>
    <path class="a-clay" d="M242 128 Q242 118 256 118 H262 L268 114 Q268 120 262 124 Q258 128 252 128Z"/>
    <path class="a-gold" d="M268 112 C264 106 265 100 269 94 C273 100 274 106 270 112Z"/>
    <path class="a-hill2" d="M0 152 Q90 140 176 150 T320 146 V170 H0Z"/>
  </svg>`,
  ark: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="Noah's ark resting on calm water under a rainbow">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="18" cy="18" r="1.3"/><circle class="a-star" cx="142" cy="16" r="1.1"/>
    <path class="s-gold" stroke-width="4" d="M20 88 A60 60 0 0 1 140 88"/>
    <path class="s-clay" stroke-width="4" d="M28 88 A52 52 0 0 1 132 88"/>
    <path class="s-star" stroke-width="3" d="M36 88 A44 44 0 0 1 124 88"/>
    <rect class="a-glass" x="0" y="88" width="160" height="32"/>
    <path class="a-clay" d="M34 80 H126 L114 98 H46Z"/>
    <rect class="a-clay2" x="56" y="64" width="48" height="16"/>
    <path class="a-clay" d="M52 66 L80 52 L108 66Z"/>
    <rect class="a-gold" x="76" y="68" width="8" height="7" rx="1"/>
    <g class="s-star" stroke-width="1.4" stroke-linecap="round"><path d="M12 102 H28"/><path d="M122 108 H142"/><path d="M62 112 H82"/></g>
    <path class="a-page" d="M116 44 Q124 36 133 40 Q126 42 124 48 Q120 46 116 44Z"/>
  </svg>`,
  tablets: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="Two stone tablets of the law in front of a glowing mountain">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="20" cy="18" r="1.3"/><circle class="a-star" cx="140" cy="22" r="1.1"/>
    <circle class="a-glow" cx="80" cy="56" r="48"/>
    <g class="s-gold" stroke-width="2" stroke-linecap="round"><path d="M80 8 V16"/><path d="M54 14 L59 21"/><path d="M106 14 L101 21"/></g>
    <path class="a-hill" d="M0 104 L40 62 L62 78 L96 38 L160 100 V120 H0Z"/>
    <path class="a-page" d="M50 98 V46 Q50 30 65 30 Q79 30 79 46 V98Z"/>
    <path class="a-page" d="M81 98 V46 Q81 30 95 30 Q110 30 110 46 V98Z"/>
    <g class="s-line" stroke-width="2" stroke-linecap="round"><path d="M57 50 H72 M57 60 H72 M57 70 H72 M57 80 H68"/><path d="M88 50 H103 M88 60 H103 M88 70 H103 M88 80 H99"/></g>
    <path class="a-hill2" d="M0 110 Q80 98 160 108 V120 H0Z"/>
  </svg>`,
  tent: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="The tabernacle tent under a pillar of fire">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="22" cy="20" r="1.3"/><circle class="a-star" cx="136" cy="16" r="1.1"/><circle class="a-star tw" cx="128" cy="44" r="1"/>
    <circle class="a-glow" cx="80" cy="34" r="30"/>
    <path class="a-gold" opacity=".9" d="M74 52 Q68 32 80 12 Q92 32 86 52Z"/>
    <path class="a-star" d="M78 50 Q76 38 80 28 Q84 38 82 50Z"/>
    <path class="a-hill" d="M0 92 Q80 80 160 92 V120 H0Z"/>
    <rect class="a-page" opacity=".5" x="16" y="80" width="128" height="14" rx="2"/>
    <g class="s-line" stroke-width="1.6"><path d="M24 80 V94 M36 80 V94 M124 80 V94 M136 80 V94"/></g>
    <path class="a-clay2" d="M48 94 V68 L80 56 L112 68 V94Z"/>
    <path class="a-clay" d="M44 70 L80 54 L116 70 L112 72 L80 59 L48 72Z"/>
    <rect class="a-heart" x="72" y="76" width="16" height="18"/>
  </svg>`,
  crown: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A golden crown set with jewels">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="20" cy="20" r="1.3"/><circle class="a-star" cx="140" cy="18" r="1.1"/><circle class="a-star tw" cx="24" cy="98" r="1"/>
    <circle class="a-glow" cx="80" cy="64" r="48"/>
    <g class="s-gold" stroke-width="2" stroke-linecap="round"><path d="M80 10 V18"/><path d="M50 18 L55 25"/><path d="M110 18 L105 25"/></g>
    <path class="a-gold" d="M38 86 L32 44 L56 64 L80 34 L104 64 L128 44 L122 86Z"/>
    <rect class="a-gold-deep" x="36" y="84" width="88" height="13" rx="3"/>
    <circle class="a-heart" cx="80" cy="68" r="6"/><circle class="a-glass" cx="57" cy="74" r="4.5"/><circle class="a-glass" cx="103" cy="74" r="4.5"/>
    <circle class="a-star" cx="32" cy="42" r="4"/><circle class="a-star" cx="80" cy="32" r="4"/><circle class="a-star" cx="128" cy="42" r="4"/>
  </svg>`,
  harp: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A lyre with music notes floating up">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="20" cy="22" r="1.3"/><circle class="a-star" cx="142" cy="96" r="1.1"/>
    <circle class="a-glow" cx="80" cy="62" r="46"/>
    <path class="s-clay" stroke-width="6" stroke-linecap="round" d="M54 94 Q40 60 50 30 M106 94 Q120 60 110 30"/>
    <path class="s-clay" stroke-width="6" stroke-linecap="round" d="M46 32 H114"/>
    <g class="s-line" stroke-width="1.5"><path d="M62 34 V92 M71 34 V92 M80 34 V92 M89 34 V92 M98 34 V92"/></g>
    <path class="a-clay2" d="M48 90 H112 Q110 104 80 104 Q50 104 48 90Z"/>
    <g class="a-gold"><circle cx="132" cy="58" r="4"/><circle cx="26" cy="72" r="3.5"/><circle cx="140" cy="34" r="3"/></g>
    <path class="s-gold" stroke-width="2" d="M135.5 58 V44 M29 72 V58 M142.6 34 V24"/>
  </svg>`,
  wall: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A city wall with a gate and a tower">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="20" cy="18" r="1.3"/><circle class="a-star" cx="44" cy="32" r="1"/><circle class="a-star tw" cx="140" cy="20" r="1.2"/>
    <circle class="a-glow" cx="80" cy="60" r="44"/>
    <rect class="a-clay2" x="8" y="56" width="144" height="50"/>
    <g class="a-clay2"><rect x="8" y="48" width="12" height="10"/><rect x="30" y="48" width="12" height="10"/><rect x="118" y="48" width="12" height="10"/><rect x="140" y="48" width="12" height="10"/></g>
    <rect class="a-clay" x="58" y="32" width="44" height="74"/>
    <g class="a-clay"><rect x="58" y="24" width="9" height="10"/><rect x="75.5" y="24" width="9" height="10"/><rect x="93" y="24" width="9" height="10"/></g>
    <path class="a-gold" d="M68 106 V82 Q68 70 80 70 Q92 70 92 82 V106Z"/>
    <rect class="a-gold" x="76" y="42" width="8" height="12" rx="4"/>
    <g class="s-line" stroke-width="1.2" opacity=".7"><path d="M8 70 H58 M102 70 H152 M8 86 H58 M102 86 H152"/><path d="M26 56 V70 M44 70 V86 M24 86 V106 M118 56 V70 M136 70 V86 M120 86 V106"/></g>
    <path class="a-hill" d="M0 104 Q80 98 160 104 V120 H0Z"/>
  </svg>`,
  lion: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A lion's face, calm and quiet">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="18" cy="18" r="1.3"/><circle class="a-star" cx="142" cy="20" r="1.1"/><circle class="a-star tw" cx="140" cy="100" r="1"/>
    <circle class="a-glow" cx="80" cy="62" r="50"/>
    <path class="a-gold-deep" d="M80 16 L88 28 L102 20 L104 34 L118 32 L112 46 L126 52 L116 62 L126 72 L112 78 L118 92 L104 90 L102 104 L88 96 L80 108 L72 96 L58 104 L56 90 L42 92 L48 78 L34 72 L44 62 L34 52 L48 46 L42 32 L56 34 L58 20 L72 28Z"/>
    <circle class="a-gold" cx="61" cy="42" r="7"/><circle class="a-gold" cx="99" cy="42" r="7"/>
    <circle class="a-gold" cx="80" cy="64" r="26"/>
    <circle class="a-sky" cx="70" cy="58" r="3"/><circle class="a-sky" cx="90" cy="58" r="3"/>
    <path class="a-clay2" d="M74 68 H86 L80 75Z"/>
    <path class="s-stroke" stroke-width="2" stroke-linecap="round" d="M80 75 V80 M80 80 Q74 85 69 81 M80 80 Q86 85 91 81"/>
  </svg>`,
  fish: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A huge fish swimming under the waves">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-glow" cx="128" cy="24" r="18"/><circle class="a-gold" cx="128" cy="24" r="8"/>
    <rect class="a-glass" x="0" y="42" width="160" height="78"/>
    <path class="s-star" stroke-width="1.6" stroke-linecap="round" d="M0 44 Q10 38 20 44 T40 44 T60 44 T80 44 T100 44 T120 44 T140 44 T160 44"/>
    <path class="a-clay" d="M120 78 L148 60 L141 78 L148 96Z"/>
    <path class="a-clay" d="M22 78 Q56 48 104 64 Q118 70 126 78 Q118 86 104 92 Q56 108 22 78Z"/>
    <path class="a-clay2" d="M72 60 Q84 46 98 62Z"/>
    <circle class="a-star" cx="42" cy="73" r="4"/><circle class="a-sky" cx="42" cy="73" r="1.8"/>
    <path class="s-stroke" stroke-width="2" stroke-linecap="round" d="M24 80 Q32 85 40 83"/>
    <g class="s-star" stroke-width="1.4"><circle cx="18" cy="62" r="3"/><circle cx="12" cy="52" r="2"/><circle cx="26" cy="54" r="1.6"/></g>
  </svg>`,
  star: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A bright star shining over a little town on the hills">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="20" cy="22" r="1.3"/><circle class="a-star" cx="40" cy="44" r="1"/><circle class="a-star tw" cx="138" cy="18" r="1.2"/><circle class="a-star" cx="124" cy="52" r="1"/>
    <circle class="a-glow" cx="80" cy="38" r="34"/>
    <path class="a-glow" d="M74 44 H86 L108 104 H52Z"/>
    <path class="a-gold" d="M80 12 L86 32 L106 38 L86 44 L80 64 L74 44 L54 38 L74 32Z"/>
    <circle class="a-star" cx="80" cy="38" r="4"/>
    <path class="a-hill" d="M0 92 Q60 76 110 88 T160 86 V120 H0Z"/>
    <path class="a-clay2" d="M58 98 V88 L64 82 L70 88 V98Z"/><rect class="a-clay2" x="73" y="86" width="15" height="12"/><path class="a-clay2" d="M91 98 V90 L97 84 L103 90 V98Z"/>
    <g class="a-gold"><rect x="62" y="90" width="4" height="4"/><rect x="78" y="89" width="4" height="4"/><rect x="95" y="91" width="4" height="4"/></g>
    <path class="a-hill2" d="M0 104 Q80 94 160 104 V120 H0Z"/>
  </svg>`,
  ship: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A sailing ship crossing the sea at night">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="20" cy="18" r="1.3"/><circle class="a-star" cx="52" cy="12" r="1"/><circle class="a-star tw" cx="148" cy="44" r="1.1"/>
    <circle class="a-gold" cx="132" cy="24" r="10"/><circle class="a-sky" cx="137" cy="20" r="9"/>
    <circle class="a-glow" cx="80" cy="56" r="40"/>
    <rect class="a-glass" x="0" y="82" width="160" height="38"/>
    <path class="s-stroke" stroke-width="2.4" d="M80 80 V20"/>
    <path class="a-page" d="M83 24 Q114 46 83 74Z"/>
    <path class="a-page" opacity=".8" d="M77 30 Q54 50 77 72Z"/>
    <path class="a-gold" d="M80 18 L94 22 L80 26Z"/>
    <path class="a-clay" d="M28 80 H132 L120 98 H40Z"/>
    <g class="s-star" stroke-width="1.4" stroke-linecap="round"><path d="M10 104 H26"/><path d="M60 110 H82"/><path d="M128 106 H148"/></g>
  </svg>`,
  letter: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A letter on a scroll with a wax seal and a quill">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="18" cy="18" r="1.3"/><circle class="a-star" cx="20" cy="100" r="1"/>
    <circle class="a-glow" cx="76" cy="62" r="46"/>
    <rect class="a-page" x="34" y="26" width="82" height="70" rx="3"/>
    <rect class="a-clay" x="28" y="20" width="94" height="10" rx="5"/>
    <rect class="a-clay" x="28" y="92" width="94" height="10" rx="5"/>
    <g class="s-line" stroke-width="2.4" stroke-linecap="round"><path d="M44 40 H106"/><path d="M44 50 H100"/><path d="M44 60 H106"/><path d="M44 70 H88"/></g>
    <circle class="a-heart" cx="100" cy="80" r="8"/><circle class="s-gold" stroke-width="1.6" cx="100" cy="80" r="4.5"/>
    <path class="a-pen" d="M126 14 Q150 26 138 58 L134 60 Q137 36 126 14Z"/>
    <path class="s-stroke" stroke-width="1.6" stroke-linecap="round" d="M134 60 L130 72"/>
  </svg>`,
  throne: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A shining throne inside a rainbow, over a sea of glass">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="18" cy="18" r="1.3"/><circle class="a-star" cx="142" cy="16" r="1.1"/><circle class="a-star tw" cx="22" cy="56" r="1"/>
    <circle class="a-glow" cx="80" cy="62" r="46"/>
    <path class="s-gold" stroke-width="3" d="M28 98 A52 52 0 0 1 132 98"/>
    <path class="s-star" stroke-width="2" d="M37 98 A43 43 0 0 1 123 98"/>
    <path class="a-gold" d="M62 88 V44 Q62 30 80 30 Q98 30 98 44 V88Z"/>
    <rect class="a-heart" x="67" y="44" width="26" height="30" rx="6"/>
    <rect class="a-gold-deep" x="54" y="76" width="52" height="10" rx="3"/>
    <rect class="a-gold-deep" x="60" y="86" width="40" height="12" rx="2"/>
    <ellipse class="a-glass" cx="80" cy="106" rx="62" ry="7"/>
    <g class="s-gold" stroke-width="2" stroke-linecap="round"><path d="M80 12 V20"/><path d="M58 18 L62 24"/><path d="M102 18 L98 24"/></g>
  </svg>`,
  sheaf: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A sheaf of barley in a field at harvest">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-glow" cx="124" cy="62" r="30"/><circle class="a-gold" cx="124" cy="66" r="12"/>
    <path class="a-hill" d="M0 80 Q60 68 120 78 T160 76 V120 H0Z"/>
    <g class="s-gold" stroke-width="2.2" stroke-linecap="round"><path d="M80 82 L66 50 M80 82 L72 46 M80 82 L80 44 M80 82 L88 46 M80 82 L94 50"/><path d="M80 80 L68 104 M80 80 L92 104 M80 80 L80 106 M80 80 L74 105 M80 80 L86 105"/></g>
    <g class="a-gold"><ellipse cx="64" cy="44" rx="4" ry="9" transform="rotate(-18 64 44)"/><ellipse cx="71" cy="39" rx="4" ry="9" transform="rotate(-8 71 39)"/><ellipse cx="80" cy="36" rx="4" ry="9"/><ellipse cx="89" cy="39" rx="4" ry="9" transform="rotate(8 89 39)"/><ellipse cx="96" cy="44" rx="4" ry="9" transform="rotate(18 96 44)"/></g>
    <rect class="a-clay2" x="72" y="74" width="16" height="7" rx="2"/>
    <path class="a-hill2" d="M0 104 Q80 96 160 104 V120 H0Z"/>
  </svg>`,
  sling: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="A shepherd's sling and five smooth stones from a stream">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="20" cy="18" r="1.3"/><circle class="a-star" cx="140" cy="20" r="1.1"/>
    <circle class="a-glow" cx="80" cy="56" r="42"/>
    <path class="s-clay" stroke-width="2.6" stroke-linecap="round" d="M42 26 Q58 66 72 72 M118 26 Q102 66 88 72"/>
    <circle class="s-clay" stroke-width="2.4" cx="42" cy="22" r="4"/>
    <ellipse class="a-clay2" cx="80" cy="74" rx="11" ry="7"/>
    <path class="a-hill" d="M0 88 Q80 80 160 88 V120 H0Z"/>
    <path class="a-glass" d="M0 96 Q80 88 160 96 V106 Q80 98 0 108Z"/>
    <g class="a-page"><ellipse cx="48" cy="104" rx="7" ry="5"/><ellipse cx="64" cy="108" rx="6" ry="4.5"/><ellipse cx="80" cy="104" rx="7" ry="5"/><ellipse cx="96" cy="108" rx="6" ry="4.5"/><ellipse cx="111" cy="104" rx="6.5" ry="5"/></g>
  </svg>`,
  temple: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="The temple with two bronze pillars and a glowing doorway">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="20" cy="18" r="1.3"/><circle class="a-star" cx="140" cy="20" r="1.1"/><circle class="a-star tw" cx="132" cy="44" r="1"/>
    <circle class="a-glow" cx="80" cy="64" r="46"/>
    <rect class="a-clay2" x="42" y="44" width="76" height="50"/>
    <path class="a-clay" d="M36 46 L80 22 L124 46Z"/>
    <rect class="a-gold" x="71" y="62" width="18" height="32" rx="2"/>
    <rect class="a-gold-deep" x="52" y="52" width="8" height="42"/><rect class="a-gold-deep" x="100" y="52" width="8" height="42"/>
    <circle class="a-gold" cx="56" cy="51" r="5"/><circle class="a-gold" cx="104" cy="51" r="5"/>
    <rect class="a-hill2" x="34" y="94" width="92" height="6"/><rect class="a-hill" x="26" y="100" width="108" height="6"/>
    <path class="a-hill" d="M0 106 Q80 100 160 106 V120 H0Z"/>
  </svg>`,
  flame: `<svg class="art" viewBox="0 0 160 120" role="img" aria-label="Fire falling on a stone altar">
    <rect class="a-sky" width="160" height="120" rx="16"/>
    <circle class="a-star tw" cx="20" cy="20" r="1.3"/><circle class="a-star" cx="140" cy="18" r="1.1"/><circle class="a-star tw" cx="30" cy="62" r="1"/>
    <circle class="a-glow" cx="80" cy="60" r="44"/>
    <path class="s-gold" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="M90 6 L82 18 L91 20 L84 32"/>
    <path class="a-gold" d="M80 82 C60 68 64 48 74 34 C74 48 82 50 84 42 C88 54 100 60 96 72 C94 78 88 82 80 82Z"/>
    <path class="a-star" d="M80 80 C72 74 72 64 78 56 C80 64 86 66 88 72 C88 77 84 80 80 80Z"/>
    <g class="a-clay2"><rect x="46" y="82" width="22" height="11" rx="2"/><rect x="70" y="82" width="22" height="11" rx="2"/><rect x="94" y="82" width="20" height="11" rx="2"/><rect x="52" y="94" width="26" height="11" rx="2"/><rect x="80" y="94" width="28" height="11" rx="2"/></g>
    <path class="a-hill" d="M0 104 Q80 98 160 104 V120 H0Z"/>
  </svg>`
};
