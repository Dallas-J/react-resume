import {
  AcademicCapIcon,
  CalendarIcon,
  ArrowDownTrayIcon,
  FlagIcon,
  MapIcon,
  BuildingOfficeIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import Pdf from '../assets/Resume.pdf';
import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItemProps,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Dallas Johnson',
  description: ``,
  ogImageUrl: ``,
  twitterCardType: 'summary_large',
  twitterSite: ``,
  twitterCreator: ``,
  twitterDomain: `dallas-j.com`,
  twitterUrl: `https://dallas-j.com`,
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionIdProps = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Dallas!`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Software Engineer</strong> who works 
        at <strong className="text-stone-100">Amazon</strong> and is hard at work building out our thriving portfolio of 
        Echo devices. I love C++ and Javascript, and constantly persue robust, malleable, and scalable software architecture paradigms.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        After hours, you'll catch me working on VR games using <strong className="text-stone-100">Unreal 5</strong>,
        reading whatever book has recently caught my attention (recent favorites include <strong className="text-stone-100">Atomic Habits</strong> and 
        the <strong className="text-stone-100">Steve Jobs</strong> biography), or using <strong className="text-stone-100">Fusion 360</strong> together
        with my 3D printer and CNC router to complete my DIY home projects.
      </p>
    </>
  ),
  actions: [
    {
      href: Pdf,
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Irvine, CA', Icon: MapIcon},
    {label: 'Age', text: '26', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'Electronics, VR, CAD/CAM', Icon: SparklesIcon},
    {label: 'Study', text: 'University of California, Irvine', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Amazon.com LLC', Icon: BuildingOfficeIcon},
  ],
};

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItemProps[] = [
  {
    date: 'December 2018',
    location: 'University of California, Irvine',
    title: 'B.S. in Computer Science and Engineering',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItemProps[] = [
  {
    date: 'January 2020 - Present',
    location: 'Amazon.com',
    title: 'Software Development Engineer II',
    content: (
      <ul style={{ listStyle: 'disc' }}>
        <li>Allowed Echo devices to serve speech reminders while offline. Served 320M monthly user requests and prevented 570K monthly missed reminders.</li>
        <li>Designed privacy state recovery features that restores privacy state after internal failures, (TODO redundant revise) preventing 32K monthly privacy state failures.</li>
        <li>Designed agent-specific sound effects with two partner teams, and scaled for thousands of devices at Disney resorts.</li>
        <li>Printed debug boards TODO</li>
        <li>Improved onboarding TODO</li>
        <li>Maintained developer desktops TODO</li>
      </ul>
    ),
  },
  {
    date: 'January 2019 - January 2020',
    location: 'Amazon.com',
    title: 'Software Development Engineer',
    content: (
      <ul style={{ listStyle: 'disc' }}>
        <li>Analyzed technology options for data storage and computation, changing product direction and achieving a 25X cost reduction.</li>
        <li>Designed a robust hardware capacity management system utilizing AWS Lambda, DynamoDB, CloudFormation, and S3. Saved Amazon over $1M annually and scaled to support over 1000 teams for automatic capacity scaling.</li>
      </ul>
    ),
  },
  {
    date: 'April 2017 - September 2018',
    location: 'Ardent Academy',
    title: 'App Developer & Instructor',
    content: (
      <ul style={{ listStyle: 'disc' }}>
        <li>Developed class scheduling app using React Native and GraphQL backend, serving a student population of about 200.</li>
        <li>Established curriculum for a React Native app development course. Instructed classes of 15 - 20 students aged 10-16.</li>
      </ul>
    ),
  },
];

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'German',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 5,
      },
      {
        name: 'GraphQL',
        level: 4,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'C++',
        level: 8,
      },
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'Python',
        level: 5,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title',
    description: 'Give a short description of your project here.',
    url: '',
    imageUrl: 'https://source.unsplash.com/random/',
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'dallasajohnson14@gmail.com',
      href: 'mailto:dallasajohnson14@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Irvine CA, United States',
      href: 'https://www.google.com/maps/place/Irvine,+CA/@33.6866448,-117.8434281,12z',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'Dallas-J',
      href: 'https://github.com/Dallas-J',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Dallas-J'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/dallas-j/'},
  //{label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
