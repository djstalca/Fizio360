import React from 'react';
import { SERVICES } from '../constants';
import { Activity, HeartPulse, UserCheck, HandMetal, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Activity: <Activity className="w-6 h-6" />,
      HeartPulse: <HeartPulse className="w-6 h-6" />,
      UserCheck: <UserCheck className="w-6 h-6" />,
      HandMetal: <HandMetal className="w-6 h-6" />,
    };
    return icons[iconName];
  };

  return (
    <section id="services" className="py-24 bg-slate-50 relative scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary-600 font-semibold tracking-wider uppercase mb-2 block">Kaj delamo</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900">
              Celovite rešitve za vaše <br className="hidden md:block"/>zdravje in gibanje.
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800 transition-colors">
            Poglej vse storitve <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-white rounded-3xl p-2 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden rounded-2xl mb-4">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-primary-600">
                  {getIcon(service.iconName)}
                </div>
              </div>
              <div className="px-4 pb-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4 flex-1 line-clamp-3">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-slate-100">
                   <span className="text-sm font-semibold text-primary-600 group-hover:underline cursor-pointer">Preberi več</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <button className="inline-flex items-center gap-2 text-primary-700 font-semibold">
                Poglej vse storitve <ArrowRight className="w-5 h-5" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Services;