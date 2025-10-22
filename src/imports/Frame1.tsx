import { useState, useEffect } from "react";
import imgImage1 from "figma:asset/06ef7d1ea7186b13f83f719ceee50effabe5968b.png";

function Discover() {
  return (
    <div className="bg-[rgba(255,254,254,0.26)] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[7px] rounded-[11px] w-[142px] h-[44px] relative overflow-hidden cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-[#ffd700] hover:via-[#ffed4e] hover:to-[#ffd700] hover:shadow-[0px_0px_20px_rgba(255,215,0,0.6)] group" data-name="Discover">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.19)] border-solid inset-0 pointer-events-none rounded-[11px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] group-hover:border-[rgba(255,215,0,0.4)]" />
      <div aria-hidden="true" className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[600ms] ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
      <p className="font-['Aboreto:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[21px] text-nowrap text-white whitespace-pre group-hover:text-[#1a0066] transition-colors duration-300">Discover</p>
    </div>
  );
}

export default function Frame1() {
  const fullText = '"Future Designer for the Present"';
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80); // 80ms per character for smooth typing effect
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="bg-white relative w-full min-h-screen overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full" data-name="image 1">
        <img 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
          src={imgImage1} 
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[rgba(0,26,255,0)] to-[#21008e] via-[51.706%] via-[rgba(17,12,197,0.8)]" />
      
      {/* Content Container - Bottom */}
      <div className="relative z-10 flex flex-col items-center justify-end min-h-screen px-4 sm:px-6 md:px-8 py-8 pb-12 sm:pb-16">
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 max-w-4xl w-full text-center bg-[rgba(0,0,0,0)]">
          {/* Name */}
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic text-[18px] sm:text-[21px] md:text-[24px] text-nowrap text-white whitespace-pre">
            Charles Ley
          </p>
          
          {/* Tagline */}
          <p 
            className="font-['Playfair:Regular',_sans-serif] font-normal leading-[normal] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-white px-4 min-h-[40px] sm:min-h-[48px] md:min-h-[56px] lg:min-h-[64px]" 
            style={{ fontVariationSettings: "'opsz' 12, 'wdth' 100" }}
          >
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
          
          {/* Discover Button */}
          <Discover />
        </div>
      </div>
    </div>
  );
}
