import React from 'react';
import { FEATURES } from '../constants';
import { ShieldCheck, Sparkles, Trophy } from 'lucide-react';

const Features: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <ShieldCheck className="w-8 h-8" />;
      case 1: return <Sparkles className="w-8 h-8" />;
      case 2: return <Trophy className="w-8 h-8" />;
      default: return <ShieldCheck className="w-8 h-8" />;
    }
  };

  return (
    <section id="about" className="py-12 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 md:hidden">
             <span className="text-primary-600 font-semibold tracking-wider uppercase mb-2 block">O nas</span>
             <h2 className="text-3xl font-bold text-secondary-900">Zakaj izbrati Fizio360?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div 
              key={feature.id}
              className={`
                relative p-8 rounded-[2.5rem] transition-all duration-300 hover:transform hover:-translate-y-2
                ${feature.highlight 
                  ? 'bg-secondary-900 text-white shadow-2xl shadow-secondary-900/20' 
                  : 'bg-slate-50 text-secondary-900 hover:bg-slate-100'
                }
              `}
            >
              <div className="flex justify-between items-start mb-6">
                 <div className={`p-4 rounded-2xl ${feature.highlight ? 'bg-white/10 text-white' : 'bg-white text-primary-600 shadow-sm'}`}>
                    {getIcon(idx)}
                 </div>
                 <span className={`text-4xl font-bold opacity-20 ${feature.highlight ? 'text-white' : 'text-slate-900'}`}>
                   0{feature.id}
                 </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className={`text-lg leading-relaxed ${feature.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;