import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle2 } from 'lucide-react';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulacija pošiljanja za boljšo uporabniško izkušnjo
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Priprava mailto povezave
    const subject = encodeURIComponent(`Povpraševanje - Fizio360: ${formData.service || 'Splošno'}`);
    const body = encodeURIComponent(
      `Ime in Priimek: ${formData.name}\n` +
      `Telefon: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Želena storitev: ${formData.service}\n\n` +
      `Sporočilo:\n${formData.message}`
    );

    // Odpre privzeti e-poštni program
    window.location.href = `mailto:info@fizio360.si?subject=${subject}&body=${body}`;

    setStatus('success');
    
    // Reset obrazca po uspešnem pošiljanju
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    // Po 5 sekundah vrni obrazec v prvotno stanje
    setTimeout(() => setStatus('idle'), 8000);
  };

  return (
    <section id="booking" className="py-24 bg-secondary-900 text-white relative overflow-hidden scroll-mt-24">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Text */}
          <div className="space-y-8">
            <div>
              <span className="text-primary-400 font-semibold tracking-wider uppercase mb-2 block">Naročanje</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Začnite svojo pot <br/> do okrevanja danes.
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Ne čakajte, da bolečina postane kronična. Izpolnite obrazec in rezervirajte termin pri Eriki Krampelj.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-primary-600 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Lokacija Klinike</h4>
                  <p className="text-slate-300">Dunajska cesta 123, 1000 Ljubljana</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-primary-600 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Telefon</h4>
                  <p className="text-slate-300">+386 1 234 5678</p>
                  <p className="text-slate-400 text-sm">Pon - Pet: 8:00 - 16:00</p>
                </div>
              </div>
              
               <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-primary-600 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-slate-300">info@fizio360.si</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className="relative">
            {status === 'success' ? (
              <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl text-secondary-900 h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Hvala za vaše sporočilo!</h3>
                <p className="text-slate-600 mb-6">
                  Odprli smo vaš e-poštni odjemalec s pripravljenimi podatki. Prosimo, potrdite pošiljanje v vašem programu za e-pošto.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
                >
                  Pošlji novo sporočilo
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl text-secondary-900 transition-opacity duration-300">
                <h3 className="text-2xl font-bold mb-6">Spletno naročanje</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Ime in Priimek</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        disabled={status === 'loading'}
                        value={formData.name}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all disabled:opacity-50"
                        placeholder="Janez Novak"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-1">
                       <label className="text-sm font-semibold text-slate-700 ml-1">Telefon</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        disabled={status === 'loading'}
                        value={formData.phone}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all disabled:opacity-50"
                        placeholder="040 123 456"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                     <label className="text-sm font-semibold text-slate-700 ml-1">Email naslov</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      disabled={status === 'loading'}
                      value={formData.email}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all disabled:opacity-50"
                      placeholder="janez@email.si"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-1">
                     <label className="text-sm font-semibold text-slate-700 ml-1">Vrsta storitve</label>
                    <select 
                      name="service"
                      disabled={status === 'loading'}
                      value={formData.service}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all appearance-none disabled:opacity-50"
                      onChange={handleChange}
                    >
                      <option value="">Izberite storitev...</option>
                      <option value="Prvi posvet">Prvi posvet</option>
                      <option value="Športna poškodba">Športna poškodba</option>
                      <option value="Bolečine v hrbtenici">Bolečine v hrbtenici</option>
                      <option value="Manualna terapija">Manualna terapija</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                     <label className="text-sm font-semibold text-slate-700 ml-1">Opis težave (neobvezno)</label>
                    <textarea 
                      name="message"
                      rows={3}
                      disabled={status === 'loading'}
                      value={formData.message}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all disabled:opacity-50"
                      placeholder="Kratek opis vaših težav..."
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Pošiljanje...
                      </>
                    ) : (
                      'Pošlji povpraševanje'
                    )}
                  </button>
                  <p className="text-xs text-center text-slate-400 mt-2">
                    S klikom se strinjate z obdelavo osebnih podatkov.
                  </p>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Booking;