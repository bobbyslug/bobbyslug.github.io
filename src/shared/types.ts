export enum SelectedPage {
  Home = "home",
  About = "about",
  Portfolio = "portfolio",
  Contact = "contact",
}

export interface ProjectType {
  title: string;
  description: string;
  image: string;
  link: string;
}
