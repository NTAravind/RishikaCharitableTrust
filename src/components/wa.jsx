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
  <MessageCircle size={20} className="text-white" />
  <span className="font-semibold">Contact Us</span>
</a>
       
    </div>
  );
};

export default WhatsAppButton;
