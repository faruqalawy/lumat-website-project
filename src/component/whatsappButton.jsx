import React from 'react';
import WaIcon from "../assets/icons/ic_whatsapp.svg";

const WhatsappButton = ({ isSmallNavOpen }) => {
  return (
    <a href="https://wa.me/6282115459797" target="_blank" rel="noopener noreferrer">
      <button className={`flex items-center gap-2 rounded-full p-3 bg-green-whatsapp hover:bg-green-whatsapp-dark right-5 md:right-8 lg:right-10 bottom-5 md:bottom-6 lg:bottom-8  ${isSmallNavOpen ? '' : 'fixed'}`}> {/* Apply conditional class based on isOpen */}
        <img src={WaIcon} alt="WaIcon" className='w-5' />
        <h1 className='text-white'>PESAN SEKARANG</h1>
      </button>
    </a>
  );
};

export default WhatsappButton;
