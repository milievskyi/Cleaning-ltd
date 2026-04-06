// Shared TypeScript types for the Lume project

// TODO: Replace "Lume" with the final brand name throughout the project

export interface LeadFormData {
  name: string;
  phone: string;
  serviceType: "regular" | "deep-clean" | "move-in-out" | "post-construction" | "other";
  homeSize: "studio" | "1br" | "2br" | "3br" | "4br-plus" | "custom";
  message?: string;
}

export interface LeadSubmissionResult {
  success: boolean;
  error?: string;
}

export type ServiceTier = {
  id: string;
  name: string;
  subtitle: string;
  features: string[];
  highlight?: boolean;
  dark?: boolean;
};

export type Testimonial = {
  quote: string;
  author: string;
  location: string;
};

export type TrustBadge = {
  icon: string;
  label: string;
};
