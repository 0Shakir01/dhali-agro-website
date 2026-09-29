import React, { useEffect, useRef } from 'react';
import { X, Play, MapPin, Film, Download, Maximize2 } from 'lucide-react';

export default function FarmVideoModal({ isOpen, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy might require user interaction, video is already clicked
      });
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-neutral-900 border border-neutral-700/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800 bg-neutral-950/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-agro-forest/40 border border-agro-leaf/40 text-emerald-400 flex items-center justify-center shrink-0">
              <Film size={18} />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white font-heading leading-tight">
                Dhali Agro — Primary Farm &amp; Field Operations
              </h3>
              <p className="text-[11px] sm:text-xs text-neutral-400 flex items-center gap-1.5 mt-0.5">
                <MapPin size={12} className="text-agro-leaf" />
                <span>Bhola, 4 No. Ward, Abdullahpur, Charfashion</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close video player"
          >
            <X size={18} />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            controls
            playsInline
            poster="/images/farm/dhali-farm-video-poster.jpg"
            preload="metadata"
          >
            {/* Optimized high-speed web stream version */}
            <source src="/videos/dhali-farm-tour-web.mp4" type="video/mp4" />
            {/* Original source fallback */}
            <source src="/videos/2560.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Footer Details */}
        <div className="px-5 py-3.5 bg-neutral-950/80 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Official Farm Footage (4:49 Min)
            </span>
            <span className="hidden sm:inline text-neutral-500">•</span>
            <span className="hidden sm:inline text-neutral-300">
              Aquaculture Ponds, Cattle Sheds &amp; Agronomy Research
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/videos/2560.mp4"
              download="dhali-agro-farm-charfashion.mp4"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors text-[11px] font-medium"
              title="Download original Full HD copy"
            >
              <Download size={13} />
              <span>Full HD (354MB)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
