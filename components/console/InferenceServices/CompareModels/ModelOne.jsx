import { useState } from "react";
import { useEffect, useRef } from "react";

import dynamic from 'next/dynamic';
// import remarkGfm from 'remark-gfm';

// const ReactMarkdown = dynamic(() => import('react-markdown'), { ssr: false });

const ModelOne = ({ togglePopup1, RenderModelOption, conversation, selectedModel, isVisible }) => {

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const scrollHeight = messagesEndRef.current?.scrollHeight;
      const height = messagesEndRef.current?.clientHeight;
      const maxScrollTop = scrollHeight - height;
      messagesEndRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]); // Dependency array includes conversationRight to trigger on update


  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex justify-between items-center p-2 ">
          <div className="flex justify-center space-x-10 items-center">
            <div className="cursor-pointer">
              <RenderModelOption position="left" />
              {/* <svg
                className="select-arrow"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.71436 3.5L6.71436 8.5L11.7144 3.5H1.71436Z"
                  fill="#687986"
                />
              </svg> */}
            </div>
          </div>
          <div className="flex gap-1">
            <div className="bg-[#FFFFFF] rounded-[4px] p-2">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer  "
                onClick={togglePopup1}
              >
                <path
                  d="M8.46436 4.75L6.02686 4.1875L4.90186 5.3125L5.46436 7.75L3.21436 9.25V10.75L5.46436 12.25L4.90186 14.6875L6.02686 15.8125L8.46436 15.25L9.96436 17.5H11.4644L12.9644 15.25L15.4019 15.8125L16.5269 14.6875L15.9644 12.25L18.2144 10.75V9.25L15.9644 7.75L16.5269 5.3125L15.4019 4.1875L12.9644 4.75L11.4644 2.5H9.96436L8.46436 4.75Z"
                  stroke="#687986"
                  strokeWidth="1.66667"
                />
                <path
                  d="M13.2144 10C13.2144 11.3807 12.0951 12.5 10.7144 12.5C9.33364 12.5 8.21436 11.3807 8.21436 10C8.21436 8.61929 9.33364 7.5 10.7144 7.5C12.0951 7.5 13.2144 8.61929 13.2144 10Z"
                  stroke="#687986"
                  strokeWidth="1.66667"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div ref={messagesEndRef}
        className="w-full h-[50vh] mt-7  text-black p-3 md:p-10 rounded-[14px] bg-[#F3F4F5] mr-2"
        style={{ overflowY: "auto" }}
      >
        {
          conversation.map((message, index) => (
            <div key={index} style={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
              <div className="prose prose-sm markdown-content">
                <strong>{message.sender === 'user' ? 'You: ' : selectedModel}</strong>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {message.text}
                </ReactMarkdown>
              </div>
            </div>
          ))}
      </div>
      {isVisible && (<div className="error-prompt-banner" >
        <div><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24"><path d="M13 12a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Zm-1-2.5A1.25 1.25 0 1 0 12 7a1.25 1.25 0 0 0 0 2.5Z"></path><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" clipRule="evenodd"></path></svg></div>
        <div className="error-message" style={{ fontSize: '12px' }}><p>Hmm....something seems to have gone wrong. Please regenerate the response</p>
        </div>
        </div>
      )}
    </div>
  );
};

export default ModelOne;
