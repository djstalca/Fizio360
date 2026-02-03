import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // We map this to actual icons in the component
  image: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export enum ContactType {
  PHONE = 'PHONE',
  EMAIL = 'EMAIL',
  LOCATION = 'LOCATION'
}