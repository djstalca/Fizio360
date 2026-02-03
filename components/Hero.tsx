import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary-100/50 rounded-full blur-3xl -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-slate-100 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold tracking-wide border border-primary-100">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-2 animate-pulse"></span>
              Sprejemamo nove paciente
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-secondary-900 leading-[1.1] tracking-tight">
              Vaše gibanje, <br/>
              <span className="text-primary-600 relative inline-block">
                naša skrb.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Dobrodošli v Fizio360. Specializirani smo za odpravo bolečin, zdravljenje poškodb in povrnitev polne funkcionalnosti vašega telesa. 
              <span className="block mt-2 font-medium text-slate-800">Ker si zaslužite življenje brez omejitev.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a href="#booking" className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-full font-semibold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Rezervirajte termin
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold text-lg hover:bg-slate-50 transition-all">
                Naše storitve
              </a>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-600" />
                Strokovno osebje
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-600" />
                Sodobna oprema
              </div>
            </div>
          </div>

          {/* Hero Images - Inspired by the 'Dental Pro' curvy layouts */}
          <div className="flex-1 relative w-full max-w-[600px] lg:max-w-none">
             <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-12">
                   <img 
                    src="https://picsum.photos/300/400?random=10" 
                    alt="Manual therapy" 
                    className="w-full h-64 object-cover rounded-[2rem] shadow-2xl"
                   />
                   <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100">
                      <p className="text-4xl font-bold text-primary-600 mb-1">98%</p>
                      <p className="text-slate-600 text-sm">Zadovoljnih pacientov v letu 2024</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="bg-secondary-900 p-6 rounded-[2rem] shadow-xl text-white flex flex-col justify-between h-48">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold">15+</span>
                      </div>
                      <p className="text-lg font-medium leading-tight">Let izkušenj v športni medicini</p>
                   </div>
                   <img 
                    src="https://picsum.photos/300/400?random=20" 
                    alt="Exercise rehabilitation" 
                    className="w-full h-64 object-cover rounded-[2rem] shadow-2xl"
                   />
                </div>
             </div>
             
             {/* Abstract circle behind */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-200 rounded-full -z-10 animate-[spin_60s_linear_infinite]"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;