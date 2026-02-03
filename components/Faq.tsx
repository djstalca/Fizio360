import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold tracking-wider uppercase mb-2 block">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">Pogosta vprašanja</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-slate-100 rounded-2xl transition-all duration-300 ${openIndex === index ? 'bg-slate-50 shadow-md' : 'bg-white'}`}
            >
              <button 
                className="w-full px-6 py-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-lg text-secondary-900 text-left">{faq.question}</span>
                <span className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-primary-100 text-primary-700' : 'bg-slate-100 text-slate-500'}`}>
                  {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;