import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          <div className="text-center md:text-left">
             <div className="text-2xl font-bold text-white mb-2">
               Fizio<span className="text-primary-500">360</span>
             </div>
             <p className="text-sm max-w-xs">
               Strokovna fizioterapija in rehabilitacija pod vodstvom Erike Krampelj.
             </p>
          </div>

          <div className="flex gap-6 flex-wrap justify-center">
             {NAV_LINKS.map(link => (
               <a key={link.href} href={link.href} className="hover:text-white transition-colors text-sm font-medium">
                 {link.label}
               </a>
             ))}
          </div>

          <div className="flex gap-4">
             {/* Social placeholders */}
             <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all cursor-pointer">
                IG
             </div>
             <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all cursor-pointer">
                FB
             </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Fizio360 by Erika Krampelj. Vse pravice pridržane.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;