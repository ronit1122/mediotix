// LetsTalkButton.js
"use client";

const LetsTalkButton = () => {
  const book_a_demo = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'book_a_demo',
        });
      }
  };

  return (
    <button onClick={() => book_a_demo()} className="gradientButton mt-[10px] tablet:mt-[50px]">Book a Demo</button>
  );
};

export default LetsTalkButton;
