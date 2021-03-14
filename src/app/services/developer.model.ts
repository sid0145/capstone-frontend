export interface DeveloperModel {
  _id?: string;
  name?: string;
  image?: string;
  email?: string;
  profession?: string;
  about?: string;
  experience?: string;
  city?: string;
  state?: string;
  country?: string;
  available?: string;
  doller?: string;
  instagram?: string;
  linkedIn?: string;
  facebook?: string;
  github?: string;
  portfolio?: string;
}

export interface DevelopersWithPage {
  docs: DeveloperModel[];
  total: number;
  pages: number;
  page: number;
  limit: number;
}
