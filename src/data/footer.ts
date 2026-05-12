export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  sections: FooterSection[];
  socialLinks: Array<{
    label: string;
    href: string;
    icon: 'instagram' | 'tiktok' | 'facebook' | 'youtube';
  }>;
  copyrightText: string;
  copyrightYear: number;
  companyName: string;
  legalLinks: Array<{
    label: string;
    href: string;
  }>;
}
