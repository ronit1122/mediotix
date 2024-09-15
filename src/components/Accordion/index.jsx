
'use client'
import { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const downSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
  );

  const upSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border-b border-slate-200">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center py-3 text-slate-800"
          >
            <span>{item.title}</span>
            <span className="text-slate-800 transition-transform duration-300">
              {activeIndex === index ? downSVG : upSVG}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div className="pb-5 text-sm text-slate-500">
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
