import { NavLink, Service, Feature, FaqItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Domov', href: '#home' },
  { label: 'Storitve', href: '#services' },
  { label: 'O nas', href: '#about' },
  { label: 'Cenik', href: '#pricing' },
  { label: 'Pogosta vprašanja', href: '#faq' },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Športne poškodbe',
    description: 'Specializirana rehabilitacija za hitro in varno vrnitev k športnim aktivnostim. Uporabljamo najnovejše protokole za regeneracijo tkiv.',
    iconName: 'Activity',
    image: 'https://picsum.photos/400/300?grayscale&blur=1'
  },
  {
    id: 's2',
    title: 'Rehabilitacija po operacijah',
    description: 'Celostna obravnava po ortopedskih posegih. Povrnitev gibljivosti in moči pod strokovnim nadzorom.',
    iconName: 'HeartPulse',
    image: 'https://picsum.photos/401/300?grayscale'
  },
  {
    id: 's3',
    title: 'Bolečine v hrbtenici',
    description: 'Odprava akutnih in kroničnih bolečin v križu in vratu s kombinacijo manualne terapije in kineziologije.',
    iconName: 'UserCheck',
    image: 'https://picsum.photos/402/300?grayscale'
  },
  {
    id: 's4',
    title: 'Manualna terapija',
    description: 'Napredne tehnike sproščanja mišičnih fascij in mobilizacije sklepov za takojšnje olajšanje.',
    iconName: 'HandMetal',
    image: 'https://picsum.photos/403/300?grayscale'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Individualen pristop',
    description: 'Vsak pacient je edinstven. Vaš rehabilitacijski načrt prilagodimo izključno vašim ciljem in zmožnostim.',
    highlight: false
  },
  {
    id: 2,
    title: 'Sodobne metode',
    description: 'Uporabljamo preverjene in znanstveno podprte terapije ter najnovejšo tehnologijo za hitrejše okrevanje.',
    highlight: true // This one gets the dark background
  },
  {
    id: 3,
    title: 'Izkušena ekipa',
    description: 'Pod vodstvom Erike Krampelj, z večletnimi izkušnjami v vrhunskem športu in klinični praksi.',
    highlight: false
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Ali potrebujem napotnico za pregled?",
    answer: "Ne, Fizio360 je samoplačniška klinika, zato napotnice ne potrebujete. To nam omogoča hitrejše termine in daljšo obravnavo."
  },
  {
    question: "Kako dolgo traja prva obravnava?",
    answer: "Prvi pregled in posvet običajno trajata 60 minut, da natančno diagnosticiramo težavo in pripravimo načrt."
  },
  {
    question: "Ali izvajate terapije na domu?",
    answer: "V določenih primerih za težje gibljive paciente po dogovoru izvajamo tudi obiske na domu v okolici Ljubljane."
  }
];