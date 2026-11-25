"use client";

import React from "react";

interface IsometricFloorPlanProps {
  type: "2bhk-compact" | "2bhk-large" | "3bhk" | "4bhk";
  className?: string;
}

export function IsometricFloorPlan({ type, className = "" }: IsometricFloorPlanProps) {
  // SVG isometric cutaway representation with rooms, walls, furniture, and lighting
  return (
    <div className={`relative w-full aspect-[4/3] bg-gradient-to-b from-slate-50 to-slate-100/60 rounded-xl overflow-hidden flex items-center justify-center p-3 ${className}`}>
      {type === "2bhk-compact" && (
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full object-contain filter drop-shadow-md select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Isometric Floor Base */}
          <polygon points="200,40 370,135 200,235 30,140" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="2" />
          <polygon points="30,140 200,235 200,255 30,160" fill="#94A3B8" />
          <polygon points="200,235 370,135 370,155 200,255" fill="#64748B" />

          {/* Room 1: Master Bedroom (Left) */}
          <polygon points="45,135 150,75 190,105 85,165" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="1" />
          {/* Double Bed */}
          <polygon points="75,135 125,105 145,120 95,150" fill="#1E3A8A" />
          <polygon points="75,135 95,150 95,158 75,143" fill="#172554" />
          {/* Pillows */}
          <polygon points="110,113 125,105 133,111 118,119" fill="#FFFFFF" />
          <polygon points="98,120 113,112 121,118 106,126" fill="#FFFFFF" />

          {/* Room 2: Living & Dining (Center/Right) */}
          <polygon points="150,75 295,155 210,210 85,165" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
          {/* L-Shaped Sofa */}
          <polygon points="180,165 240,130 250,138 190,173" fill="#B45309" />
          <polygon points="180,165 190,173 170,185 160,177" fill="#92400E" />
          {/* Coffee Table */}
          <polygon points="195,155 215,143 223,149 203,161" fill="#475569" />

          {/* Dining Table & Chairs */}
          <polygon points="175,105 210,85 225,97 190,117" fill="#0F172A" />
          <circle cx="178" cy="100" r="4" fill="#3B82F6" />
          <circle cx="218" cy="80" r="4" fill="#3B82F6" />
          <circle cx="230" cy="102" r="4" fill="#3B82F6" />
          <circle cx="190" cy="122" r="4" fill="#3B82F6" />

          {/* Room 3: Second Bedroom (Top) */}
          <polygon points="200,45 270,85 220,115 150,75" fill="#E0F2FE" stroke="#BAE6FD" strokeWidth="1" />
          {/* Bed */}
          <polygon points="215,55 250,75 235,88 200,68" fill="#0369A1" />
          <polygon points="215,55 200,68 200,74 215,61" fill="#075985" />

          {/* Kitchen & Utility (Far Right) */}
          <polygon points="270,85 355,130 295,155 220,115" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
          {/* Kitchen Counter L-shape */}
          <polygon points="280,95 340,128 325,138 270,105" fill="#334155" />
          {/* Sink & Stove marks */}
          <polygon points="295,105 310,113 305,117 290,109" fill="#0284C7" />
          <circle cx="325" cy="122" r="3" fill="#DC2626" />

          {/* Outer 3D Cutaway Isometric Walls */}
          {/* Back Left Wall */}
          <polygon points="30,140 200,40 200,20 30,120" fill="#CBD5E1" opacity="0.9" />
          {/* Back Right Wall */}
          <polygon points="200,40 370,135 370,115 200,20" fill="#94A3B8" opacity="0.85" />
          {/* Inner dividing low walls */}
          <polygon points="150,75 85,165 85,155 150,65" fill="#64748B" opacity="0.7" />
          <polygon points="220,115 295,155 295,145 220,105" fill="#64748B" opacity="0.7" />

          {/* Room Labels */}
          <text x="75" y="125" fill="#1E293B" fontSize="10" fontWeight="bold" transform="rotate(-15 75 125)">Master Bed</text>
          <text x="180" y="195" fill="#1E293B" fontSize="10" fontWeight="bold" transform="rotate(-15 180 195)">Living / Dining</text>
          <text x="210" y="70" fill="#1E293B" fontSize="9" fontWeight="bold" transform="rotate(25 210 70)">Bed 2</text>
          <text x="290" y="115" fill="#1E293B" fontSize="9" fontWeight="bold" transform="rotate(25 290 115)">Kitchen</text>
        </svg>
      )}

      {type === "2bhk-large" && (
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full object-contain filter drop-shadow-md select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Isometric Floor Base */}
          <polygon points="200,35 375,130 200,240 25,145" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="2" />
          <polygon points="25,145 200,240 200,260 25,165" fill="#94A3B8" />
          <polygon points="200,240 375,130 375,150 200,260" fill="#64748B" />

          {/* Master Bedroom with Balcony (Left) */}
          <polygon points="40,140 155,75 195,110 80,175" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="1" />
          {/* Bed with Red Accent Sheet */}
          <polygon points="75,140 130,105 150,120 95,155" fill="#DC2626" />
          <polygon points="75,140 95,155 95,163 75,148" fill="#991B1B" />
          {/* Pillows */}
          <polygon points="115,112 130,103 138,109 123,118" fill="#FFFFFF" />
          <polygon points="102,120 117,111 125,117 110,126" fill="#FFFFFF" />
          {/* Attached Balcony Rail */}
          <polygon points="40,140 80,175 70,185 30,150" fill="#E0F2FE" />
          <line x1="30" y1="150" x2="30" y2="140" stroke="#0284C7" strokeWidth="2" />
          <line x1="70" y1="185" x2="70" y2="175" stroke="#0284C7" strokeWidth="2" />
          <line x1="30" y1="140" x2="70" y2="175" stroke="#0284C7" strokeWidth="1.5" />

          {/* Spacious Living Room */}
          <polygon points="155,75 305,155 210,215 80,175" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
          {/* Modern Sectional Sofa */}
          <polygon points="175,170 235,135 245,143 185,178" fill="#1E293B" />
          <polygon points="175,170 185,178 165,190 155,182" fill="#0F172A" />
          {/* Rug & Glass Table */}
          <polygon points="180,155 220,132 235,143 195,166" fill="#E2E8F0" />
          <polygon points="195,150 215,138 223,144 203,156" fill="#0284C7" opacity="0.6" />

          {/* Second Bedroom */}
          <polygon points="200,40 280,85 225,120 155,75" fill="#E0F2FE" stroke="#BAE6FD" strokeWidth="1" />
          <polygon points="220,50 260,72 245,85 205,63" fill="#4338CA" />

          {/* Modular Kitchen & Breakfast Bar */}
          <polygon points="280,85 365,130 305,155 225,120" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
          <polygon points="290,95 350,128 335,138 280,105" fill="#475569" />
          <circle cx="310" cy="110" r="3" fill="#F59E0B" />
          <circle cx="330" cy="120" r="3" fill="#F59E0B" />

          {/* Outer Walls */}
          <polygon points="25,145 200,35 200,15 25,125" fill="#CBD5E1" opacity="0.9" />
          <polygon points="200,35 375,130 375,110 200,15" fill="#94A3B8" opacity="0.85" />

          <text x="80" y="130" fill="#1E293B" fontSize="10" fontWeight="bold" transform="rotate(-15 80 130)">Master Bed + Balcony</text>
          <text x="175" y="195" fill="#1E293B" fontSize="10" fontWeight="bold" transform="rotate(-15 175 195)">Grand Living</text>
          <text x="220" y="68" fill="#1E293B" fontSize="9" fontWeight="bold" transform="rotate(25 220 68)">Bed 2</text>
        </svg>
      )}

      {(type === "3bhk" || type === "4bhk") && (
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full object-contain filter drop-shadow-md select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Isometric Floor Base */}
          <polygon points="200,30 380,125 200,245 20,150" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="2" />
          <polygon points="20,150 200,245 200,265 20,170" fill="#94A3B8" />
          <polygon points="200,245 380,125 380,145 200,265" fill="#64748B" />

          {/* Master Bedroom Suite (Left) */}
          <polygon points="35,145 140,85 180,115 75,175" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="1" />
          <polygon points="65,145 115,115 135,128 85,158" fill="#047857" />
          {/* Dresser & Ensuite Bath */}
          <polygon points="35,145 75,175 60,185 20,155" fill="#CCFBF1" />
          <polygon points="25,160 40,152 48,157 33,165" fill="#0D9488" />

          {/* Central Living & Dining Hall */}
          <polygon points="140,85 280,165 210,225 75,175" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
          {/* 7-Seater Luxury Curved Sofa */}
          <polygon points="160,180 220,145 230,153 170,188" fill="#1E3A8A" />
          <polygon points="160,180 170,188 150,200 140,192" fill="#172554" />
          {/* 6-Seater Glass Dining Table */}
          <polygon points="160,115 205,90 220,102 175,127" fill="#334155" />

          {/* Bedroom 2 */}
          <polygon points="180,45 250,85 205,115 140,85" fill="#E0F2FE" stroke="#BAE6FD" strokeWidth="1" />
          <polygon points="195,55 230,75 220,85 185,65" fill="#3B82F6" />

          {/* Bedroom 3 */}
          <polygon points="250,85 320,125 270,155 205,115" fill="#FCE7F3" stroke="#FBCFE8" strokeWidth="1" />
          <polygon points="265,95 300,115 290,125 255,105" fill="#BE185D" />

          {/* Kitchen & Servant Quarter */}
          <polygon points="270,155 355,110 375,120 280,165" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
          <polygon points="285,150 345,118 335,126 275,158" fill="#64748B" />

          {/* Outer Walls */}
          <polygon points="20,150 200,30 200,10 20,130" fill="#CBD5E1" opacity="0.9" />
          <polygon points="200,30 380,125 380,105 200,10" fill="#94A3B8" opacity="0.85" />

          <text x="70" y="135" fill="#1E293B" fontSize="9" fontWeight="bold" transform="rotate(-15 70 135)">Suite 1 + Bath</text>
          <text x="160" y="200" fill="#1E293B" fontSize="10" fontWeight="bold" transform="rotate(-15 160 200)">Expansive Living</text>
          <text x="195" y="72" fill="#1E293B" fontSize="8" fontWeight="bold" transform="rotate(25 195 72)">Suite 2</text>
          <text x="260" y="110" fill="#1E293B" fontSize="8" fontWeight="bold" transform="rotate(25 260 110)">Suite 3</text>
        </svg>
      )}

      {/* 3D Cutaway watermark indicator */}
      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-white/90 text-slate-700 text-[9px] font-bold shadow-xs border border-slate-200 pointer-events-none">
        3D Architectural Layout
      </div>
    </div>
  );
}

