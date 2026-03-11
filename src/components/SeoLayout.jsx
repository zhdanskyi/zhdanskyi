import React from 'react';
import ChatbotUI from './ChatbotUI';
import FloatingUi from './FloatingUi';

const SeoLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {children}
      </div>
      <FloatingUi />
      <ChatbotUI />
    </>
  );
};

export default SeoLayout;
