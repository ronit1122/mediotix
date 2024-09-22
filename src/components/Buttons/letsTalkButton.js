// LetsTalkButton.js
"use client";

const LetsTalkButton = () => {
  const home_banner_lets_talk = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'home_banner_lets_talk',
        });
      }
      console.log('Event pushed to dataLayer');
  };


  return (
    <a href="#contact-section">
      <button onClick={home_banner_lets_talk} className="naviteButton mt-[30px]">
        Lets Talk
      </button>
    </a>
  );
};

export default LetsTalkButton;
