import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9999
    }}>
<a
  href="https://wa.me/919060301061
"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-btn flex items-center gap-2 bg-[#2563eb] text-white px-5 py-3 rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
>
<MessageCircle className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
<span className="hidden sm:inline font-semibold text-white">Contact Us</span>
</a>
       
    </div>
  );
};

export default WhatsAppButton;
