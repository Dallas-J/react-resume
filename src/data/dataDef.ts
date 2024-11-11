import {FC, SVGProps} from 'react';

import {IconProps} from '../components/Icon/Icon';

export interface HomepageMeta {
  title: string;
  description: string;
  ogImageUrl: string;
  twitterCardType?: 'summary' | 'summary_large';
  twitterTitle?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterDomain?: string;
  twitterUrl?: string;
  twitterDescription?: string;
  twitterImageUrl?: string;
}

/**
 * About section
 */
export interface About {
  description: JSX.Element;
  aboutItems: AboutItem[];
  actions: AboutActionItem[];
}

interface AboutActionItem {
  href: string;
  text: string;
  primary?: boolean;
  link?: boolean;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export interface AboutItem {
  label: string;
  text: string;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

/**
 * Stat section
 */
export interface Stat {
  title: string;
  value: number;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

/**
 * Skills section
 */
export interface SkillGroup {
  name: string;
  skills: string[];
}

/**
 * Portfolio section
 */
export interface PortfolioItem {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

/**
 * Resume section
 */
export interface TimelineItemProps {
  date: string;
  company: string;
  team?: string;
  title: string;
  content: JSX.Element;
}

/**
 * Testimonial section
 */
export interface TestimonialSection {
  testimonials: TestimonialProps[];
}

export interface TestimonialProps {
  image?: string;
  name: string;
  position: string;
  link: string;
  text: string;
}

/**
 * Contact section
 */
export interface ContactSection {
  headerText?: string;
  description: string;
  items: ContactItem[];
}

export const ContactType = {
  Email: 'Email',
  Phone: 'Phone',
  Location: 'Location',
  Github: 'Github',
  LinkedIn: 'LinkedIn',
  Facebook: 'Facebook',
  Twitter: 'Twitter',
  Instagram: 'Instagram',
} as const;

export type ContactTypeProps = typeof ContactType[keyof typeof ContactType];

export interface ContactItem {
  type: ContactTypeProps;
  text: string;
  href?: string;
}

export interface ContactValue {
  Icon: FC<IconProps> | ((props: SVGProps<SVGSVGElement>) => JSX.Element);
  srLabel: string;
}

/**
 * Social items
 */
export interface Social {
  label: string;
  Icon: FC<IconProps>;
  href: string;
}
