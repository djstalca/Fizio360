import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Prvi Pregled',
      price: '60 €',
      duration: '60 min',
      description: 'Temeljita diagnostika in posvet',
      features: [
        'Anamneza in pregled',
        'Testiranje gibljivosti',
        'Postavitev diagnoze',
        'Načrt rehabilitacije'
      ],
      recommended: false
    },
    {
      name: 'Fizioterapija',
      price: '50 €',
      duration: '45 min',
      description: 'Individualna terapevtska obravnava',
      features: [
        'Manualna terapija',
        'Terapevtske vaje',
        'Protibolečinska terapija',
        'Navodila za domov'
      ],
      recommended: true
    },
    {
      name: 'Paket 5 Obravnav',
      price: '225 €',
      duration: '5x 45 min',
      description: 'Za dolgoročno rehabilitacijo',
      features: [
        '5x Individualna terapija',
        '10% popust na redno ceno',
        'Spremljanje napredka',
        'Prilagodljiv urnik'
      ],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase mb-2 block">Cenik storitev</span>
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">Transparentne cene brez skritih stroškov</h2>
          <p className="text-slate-600">
            Investicija v vaše zdravje je najboljša naložba. Ponujamo konkurenčne cene za vrhunske samoplačniške storitve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-[2rem] p-8 border transition-all duration-300 hover:shadow-xl relative ${
                plan.recommended 
                  ? 'border-primary-200 bg-primary-50 shadow-lg scale-105 z-10' 
                  : 'border-slate-100 bg-white'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                  Priporočeno
                </div>
              )}
              <h3 className="text-xl font-bold text-secondary-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-primary-600">{plan.price}</span>
                <span className="text-slate-500 text-sm">/ {plan.duration}</span>
              </div>
              <p className="text-slate-500 text-sm mb-6">{plan.description}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="w-5 h-5 text-primary-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#booking" 
                className={`block w-full py-3 rounded-xl text-center font-semibold transition-colors ${
                  plan.recommended
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Izberi termin
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;