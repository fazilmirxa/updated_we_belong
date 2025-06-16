import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918898542680" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
    >
      <FaWhatsapp className="text-white text-2xl" />
    </a>
  );
};

export default FloatingWhatsAppButton;
