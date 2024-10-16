import {
  AcademicCapIcon,
  CalendarIcon,
  ArrowDownTrayIcon,
  FlagIcon,
  MapIcon,
  BuildingOfficeIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import PrintablesIcon from '../components/Icon/PrintablesIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
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

import SamImg from '../images/sam.webp'
import KevinImg from '../images/kevin.webp'
import RyanImg from '../images/ryan.webp'

// See this github page for details: https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server
export const formUrl = "https://script.google.com/macros/s/AKfycbyjfC90yO2dtuYpbeFlSMAb0Mbumcxj609oVb5oBIlOSzeF0nOdsioVXaxW-4RhkFCH/exec";

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
  Experience: 'experience',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionIdProps = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  name: `Hi, I'm Dallas!`,
  description: (
    <>
      <p className="prose-sm text-stone-800 dark:text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-900 dark:text-stone-100">Software Engineer</strong> who works 
        at <strong className="text-stone-900 dark:text-stone-100">Amazon</strong> and am hard at work building out our thriving portfolio of 
        Echo devices. I love <strong className="text-stone-900 dark:text-stone-100">C++</strong> and <strong className="text-stone-900 dark:text-stone-100">Javascript</strong>, and constantly pursue robust, malleable, and scalable software architecture paradigms.
      </p>
      <p className="prose-sm text-stone-800 dark:text-stone-200 sm:prose-base lg:prose-lg">
        After hours, you'll catch me working on VR games using <strong className="text-stone-900 dark:text-stone-100">Unreal 5</strong>,
        reading whatever book has recently caught my attention (recent favorites include Atomic Habits and 
        the Steve Jobs biography), or using <strong className="text-stone-900 dark:text-stone-100">Fusion 360</strong> together
        with my 3D printer and CNC router to complete my DIY home projects.
      </p>
    </>
  ),
  actions: [
    {
      href: process.env.PUBLIC_URL + "/Dallas Johnson's Resume.docx",
      text: 'Resume',
      primary: true,
      link: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: SectionId.Contact,
      text: 'Contact',
      primary: false,
      link: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  description: (
    <>
      <p>
        Growing up, I was surrounded by electronic devices and always had a strong passion to tinker with them.
        My parents made sure to get computers in my hands early, and I was soon playing around in TI BASIC during my middle
        school geometry classes. I continued to play with code throughout high school, picking up Minecraft and learning
        both Lua scripting inside the game (<a className="no-underline hover:underline text-blue-600 dark:text-blue-400" href="https://www.curseforge.com/minecraft/mc-mods/cc-tweaked" target="_blank" rel="noreferrer">check out the mod here</a>), and Java for mod development.
      </p>
      <p>
        College finally gave me the chance to program real-world microchips, and in the first couple years, I joined a
        robotics club and learned how to write C code to program Arduinos and other embedded development boards for both
        school and personal projects. I now work at Amazon where I enjoy the challenge of applying my design and programming
        skills to projects at scale.
      </p>
    </>
  ),
  aboutItems: [
    {label: 'Location', text: 'Irvine, CA', Icon: MapIcon},
    {label: 'Age', text: (Math.floor((Date.now() - 828715740000) / 31557600000)).toString(), Icon: CalendarIcon},
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
    date: 'Dec 2018',
    company: 'University of California, Irvine',
    title: 'BS in Computer Science and Engineering',
    content: (
      <ul className='ml-4' style={{ listStyle: 'disc' }}>
        <li>Designed a RISC-V CPU in Verilog.</li>
        <li>Wrote a compiler for the <a className="no-underline hover:underline text-blue-600 dark:text-blue-400" href="https://web.stanford.edu/class/cs143/materials/cool-manual.pdf" target="_blank" rel="noreferrer">Cool programming language</a>.</li>
        <li>Additional coursework in C, C++, Java, Python, and Tensorflow.</li>
      </ul>
    ),
  },
];

export const experience: TimelineItemProps[] = [
  {
    date: 'Jan 2020 - Present',
    company: 'Amazon.com',
    team: 'Echo Devices',
    title: 'Software Development Engineer II',
    content:
      <ul className='ml-4' style={{ listStyle: 'disc' }}>
        <li>Reduced team onboarding time from three weeks to less than 2 days through hardware preparation, documentation, and scripting of the onboarding process.</li>
        <li>Enabled Echo devices to serve speech reminders while offline. Served 320M monthly user requests and prevented 570K monthly missed reminders.</li>
        <li>Designed privacy state recovery to ensure that the red mute ring maintains visibility even after software crashes, preventing 32K monthly user-facing failures.</li>
        <li>Designed agent-specific sound effects with two partner teams, and scaled for thousands of devices at Disney resorts.</li>
        <li>Created 3D printed debug hardware and delivered over 30 debug boards to QA teams in Sunnyvale and Chennai.</li>
      </ul>
    ,
  },
  {
    date: 'Jan 2019 - Jan 2020',
    company: 'Amazon.com',
    team: 'eCommerce Efficiency',
    title: 'Software Development Engineer I',
    content:
      <ul className='ml-4' style={{ listStyle: 'disc'}}>
        <li>Analyzed technology options for data storage and computation, changing product direction and achieving a 25X cost reduction.</li>
        <li>Designed a robust hardware capacity management system utilizing AWS Lambda, DynamoDB, CloudFormation, and S3. Saved Amazon over $1M annually and scaled to support over 1000 teams for automatic capacity scaling.</li>
      </ul>
    ,
  },
  {
    date: 'Jun 2018 - Sep 2018',
    company: 'Amazon.com',
    team: 'eCommerce Efficiency',
    title: 'SDE Intern',
    content:
      <ul className='ml-4' style={{ listStyle: 'disc'}}>
      <li>Redesigned and implemented a custom DynamoDB scanner with cost savings of over $70,000 annually.</li>
      </ul>
    ,
  },
  {
    date: 'May 2017 - June 2018',
    company: 'Ardent Academy',
    title: 'App Developer & Instructor',
    content:
      <ul className='ml-4' style={{ listStyle: 'disc'}}>
        <li>Developed class scheduling app using React Native and GraphQL backend, serving around 200 students.</li>
        <li>Established curriculum for a React Native app development course. Instructed classes of 15-20 students aged 10-16.</li>
      </ul>
    ,
  },
  {
    date: 'Sep 2014 - Sep 2016',
    company: 'LT Associates',
    title: 'Information Technology Specialist',
    content:
      <ul className='ml-4' style={{ listStyle: 'disc'}}>
        <li>Maintained and upgraded computer hardware, software, and server infrastructure for a 50 person company.</li>
      </ul>
    ,
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
        level: 10,
      },
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'Python',
        level: 7,
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
  testimonials: [
    {
      name: 'Sam Balana',
      position: 'Software Engineer at Google',
      text: "I've always been really impressed with how Dallas is able to balance fine technical details with overarching system design.  Every time we work together, I end up learning something new from him.",
      link: 'https://www.linkedin.com/in/sambalana/',
      image: SamImg,
    },
    {
      name: 'Kevin Omidvaran',
      position: 'Software Development Engineer at Amazon.com',
      text: "Dallas has a strong sense of ownership and focuses on quality when developing. He took the opportunity to 3D print debug hardware for our devices when we were unable to procure additional hardware. Dallas also has a strong curiosity: He is always striving to learn and asks important questions when necessary.",
      link: 'https://www.linkedin.com/in/komidvaran/',
      image: KevinImg,
    },
    {
      name: 'Ryan Batten',
      position: 'Fiancé',
      text: "A very thorough intellectual, Dallas is genuine and has an excellent work ethic! He loves to personalize our home, affixing it with smart lights and home devices that complement our decor.",
      link: 'https://www.linkedin.com/in/ryan-batten-rn-bsn-ccrn-02b225171/',
      image: RyanImg,
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "Send me a short email or message me on LinkedIn, and I'll try to get back to you as soon as I can!",
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
      type: ContactType.LinkedIn,
      text: 'Dallas-J',
      href: 'https://www.linkedin.com/in/Dallas-J',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Dallas-J'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/20948903/Dallas-Johnson'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/Dallas-J'},
  {label: 'Printables', Icon: PrintablesIcon, href: 'https://www.printables.com/social/535918-dallas-johnson'}
  //{label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
