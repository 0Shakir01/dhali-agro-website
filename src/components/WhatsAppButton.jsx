import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = "8801711000000"; // Configurable number
  const message = encodeURIComponent("Assalamu Alaikum. I am interested in Dhali Agro agricultural products and farmer solutions.");
  const url = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25d366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group font-heading font-bold text-sm"
      aria-label="Talk to Dhali Agro on WhatsApp"
    >
      <MessageCircle size={22} className="fill-current text-white shrink-0" />
      <span className="hidden sm:inline font-semibold tracking-wide">
        Talk to Dhali Agro
      </span>
    </a>
  );
}
