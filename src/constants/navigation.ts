export interface NavLinkItem {
  label: string;
  href: string;
  badge?: string;
  badgeVariant?: "success" | "accent" | "default";
}

export const MAIN_NAV_LINKS: NavLinkItem[] = [
  { label: "Buy", href: "/buy" },
  { label: "Rent", href: "/rent" },
];

export const RESIDENTIAL_DROPDOWN_ITEMS = [
  { label: "Flats & Apartments", href: "/buy?type=flats", desc: "Multistorey apartments, society flats" },
  { label: "Independent Houses", href: "/buy?type=independent-houses", desc: "Stand-alone houses and kothis" },
  { label: "Luxury Villas", href: "/buy?type=villas", desc: "Gated luxury villa enclaves" },
  { label: "Builder Floors", href: "/buy?type=builder-floors", desc: "Low-rise independent floors" },
  { label: "Studio Apartments", href: "/buy?type=studio", desc: "Compact single-room living units" },
  { label: "Serviced Apartments", href: "/buy?type=serviced", desc: "Managed & fully furnished homes" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Buy Properties",
    links: [
      { label: "Flats in Delhi NCR", href: "/buy?city=delhi-ncr" },
      { label: "Apartments in Mumbai", href: "/buy?city=mumbai" },
      { label: "Villas in Bengaluru", href: "/buy?city=bengaluru" },
      { label: "Gated Communities in Hyderabad", href: "/buy?city=hyderabad" },
      { label: "Ready to Move in Pune", href: "/buy?city=pune" },
      { label: "Affordable Homes in Chennai", href: "/buy?city=chennai" },
    ],
  },
  {
    title: "Rent Properties",
    links: [
      { label: "Furnished Flats in Bengaluru", href: "/rent?city=bengaluru" },
      { label: "Apartments near BKC Mumbai", href: "/rent?city=mumbai" },
      { label: "Shared Accommodations in Pune", href: "/rent?city=pune" },
      { label: "Studio Apartments in Gurugram", href: "/rent?city=delhi-ncr" },
      { label: "Family Homes in Noida", href: "/rent?city=delhi-ncr" },
      { label: "Rent Agreement Services", href: "/rent/agreement" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About UrbanNest", href: "#" },
      { label: "Careers", href: "#" },
      { label: "News & Media", href: "#" },
      { label: "Customer Stories", href: "#" },
      { label: "Partner with Us", href: "#" },
      { label: "Corporate Governance", href: "#" },
    ],
  },
  {
    title: "Support & Legal",
    links: [
      { label: "Help Center & FAQs", href: "#" },
      { label: "RERA Compliance Guide", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Fraud Alert", href: "#" },
      { label: "Sitemap", href: "#" },
    ],
  },
];

export const SEO_CITY_LINKS = [
  { name: "Delhi NCR", count: "18,400+ properties", href: "/buy?city=delhi-ncr" },
  { name: "Mumbai", count: "24,800+ properties", href: "/buy?city=mumbai" },
  { name: "Bengaluru", count: "21,200+ properties", href: "/buy?city=bengaluru" },
  { name: "Pune", count: "14,600+ properties", href: "/buy?city=pune" },
  { name: "Hyderabad", count: "16,100+ properties", href: "/buy?city=hyderabad" },
  { name: "Chennai", count: "11,500+ properties", href: "/buy?city=chennai" },
  { name: "Kolkata", count: "9,800+ properties", href: "/buy?city=kolkata" },
  { name: "Ahmedabad", count: "8,900+ properties", href: "/buy?city=ahmedabad" },
];

