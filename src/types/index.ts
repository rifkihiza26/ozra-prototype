export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  scope: string[];
  image: string;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: 'Tactical & Workshirt' | 'Corporate & Institutional Uniform' | 'Sportswear & Jersey Sublimasi' | 'Pakaian Dinas' | 'Trousers & Accessories';
  client?: string;
  description: string;
  image: string;
  gallery: string[];
  featured?: boolean;
  tags?: string[];
}

export interface ClientItem {
  name: string;
  category: 'Pemerintah & BUMN' | 'Militer & Kepolisian' | 'Institusi Pendidikan' | 'Swasta & Komunitas';
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface AdvantageItem {
  title: string;
  description: string;
  iconName: string;
}
