import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
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
    {label: 'Employment', text: 'Amazon.com LLC', Icon: BuildingOfficeIcon},
    {label: 'Study', text: 'University of California, Irvine', Icon: AcademicCapIcon},
    {label: 'Interests', text: 'Web Design, System Architecture', Icon: SparklesIcon},
  ],
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
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItemProps[] = [
  {
    date: 'Dec 2018',
    company: 'University of California, Irvine',
    team: 'Computer Science and Engineering',
    title: 'Bachelor of Science',
    content: (
      <ul className='ml-4' style={{ listStyle: 'disc' }}>
        <li><strong className='dark:text-white'>GPA:</strong> 3.84</li>
        <li><strong className='dark:text-white'>Honors:</strong> Graduated cum laude with Dean's List all quarters. Member of Tau Beta Pi Honors Society.</li>
      </ul>
    ),
  },
];

export const experience: TimelineItemProps[] = [
  {
    date: 'Jan 2020 - Present',
    company: 'Amazon.com',
    team: 'Devices and Services, Alexa and Connected Technologies',
    title: 'Software Development Engineer II',
    content:
      <ul className='ml-4' style={{ listStyle: 'disc' }}>
        <li><strong className='dark:text-white'>React Gesture Handler Integration:</strong> Led a team of four to reimplement the <a href="https://reactnative.dev/" className='underline'>React Native</a> gesture handler library on Alexa's custom software stack. Designed and implemented swipe, long press, and drag and drop gestures to match their implementations on iOS and Android. Supports Alexa's ecosystem of over 1M third-party developers.</li>
        <li><strong className='dark:text-white'>Engineering and Mentorship Contributions:</strong> Created and delivered 3D printed debug hardware to QA teams in Sunnyvale and Chennai. Reduced new hire onboarding time from three weeks to four hours. Improved codebase stability with integration tests using <a href="https://github.com/behave/behave" className='underline'>behave</a> and unit tests using <a href="https://github.com/google/googletest" className='underline'>gtest</a>. Built <a href="https://aws.amazon.com/cloudwatch/" className='underline'>AWS Cloudwatch</a> dashboards with weekly review processes. Improved customer-facing feature stability by quickly root-causing and fixing issues in production, especially during oncall rotations.</li>
        <li><strong className='dark:text-white'>Echo Offline Reminders:</strong> Designed, implemented, and tested a secure download mechanism for reminder speech files using <a href="https://cplusplus.com/" className='underline'>C++</a>. Ensured ongoing support with automated unit and integration tests, and ensured customer privacy with delete-on-expiry and delete-on-factory-reset policies. Serves over 300M monthly user requests and prevents over 600K monthly missed reminders.</li>
        <li><strong className='dark:text-white'>Privacy State Recovery:</strong> Improved Alexa's strong privacy guarantees by restoring device privacy mode even after software crashes. Prevents over 30K user-facing failures per month.</li>
      </ul>
    ,
  },
  {
    date: 'Jan 2019 - Jan 2020',
    company: 'Amazon.com',
    team: 'Amazon Worldwide Consumer, eCommerce Efficiency',
    title: 'Software Development Engineer I',
    content:
      <ul className='ml-4' style={{ listStyle: 'disc'}}>
        <li><strong className='dark:text-white'>AWS Server Capacity Scaling:</strong> Designed and implemented a robust hardware capacity management system utilizing <a href="https://aws.amazon.com/lambda/" className='underline'>AWS Lambda</a> and <a href="https://aws.amazon.com/sns/" className='underline'>AWS SNS</a> to perform real-time on-demand computation of required server capacity across Amazon. Saved Amazon over $1M annually and scaled to provide estimates of required capacity for over 80% of Amazon's server capacity.</li>
        <li><strong className='dark:text-white'>CloudFormation Service Reimplementation:</strong> Restructured server capacity approval tooling using <a href="https://aws.amazon.com/cloudformation/" className='underline'>AWS CloudFormation</a> to define infrastructure as code (IaC). Increased developer velocity by 2 developer days per month by removing manual infrastructure maintenance.</li>
        <li><strong className='dark:text-white'>Database Storage Optimization:</strong> Created fast prototypes for <a href="https://aws.amazon.com/dynamodb/" className='underline'>AWS DynamoDB</a>, <a href="https://aws.amazon.com/redshift/" className='underline'>AWS Redshift</a>, <a href="https://aws.amazon.com/s3/" className='underline'>AWS S3</a>, and <a href="https://www.postgresql.org/" className='underline'>PostgreSQL</a> running on <a href="https://aws.amazon.com/ec2/" className='underline'>AWS EC2</a> to analyze the cost of each option. Changed product direction, achieving a 25X cost reduction from our initial plan by convincing the team to use <a href="https://aws.amazon.com/s3/" className='underline'>AWS S3</a>.</li>
      </ul>
    ,
  },
  {
    date: 'Jun 2018 - Sep 2018',
    company: 'Amazon.com',
    team: 'Amazon Worldwide Consumer, eCommerce Efficiency',
    title: 'Software Development Intern',
    content:
      <ul className='ml-4' style={{ listStyle: 'disc'}}>
      <li><strong className='dark:text-white'>Database Scanner Redesign:</strong> Designed a drop-in replacement database scanner for <a href="https://aws.amazon.com/dynamodb/" className='underline'>AWS DynamoDB</a> with cost savings of over $70,000 annually.</li>
      </ul>
    ,
  },
  {
    date: 'May 2017 - June 2018',
    company: 'Ardent Academy',
    title: 'App Developer & Instructor',
    content:
      <ul className='ml-4' style={{ listStyle: 'disc'}}>
        <li><strong className='dark:text-white'>Class Scheduling App:</strong> Designed and implemented a <a href="https://reactnative.dev/" className='underline'>React Native</a> app allowing parents and students to schedule classes. Synchronized app view and webview using a <a href="https://graphql.org/" className='underline'>GraphQL</a> backend.</li>
        <li><strong className='dark:text-white'>App Development Curriculum:</strong> Wrote curriculum, including weekly presentations, sample applications, and assignment grading criteria for a 12-week <a href="https://reactnative.dev/" className='underline'>React Native</a> app development course. Instructed classes of 15-20 students.</li>
      </ul>
    ,
  },
];

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages and Frameworks',
    skills: [
      'C++',
      'Java',
      'Python',
      'Javascript',
      'Bash',
      'SWIG',
      'Behave',
      'gtest',
      'React',
    ],
  },
  {
    name: 'IaC and Cloud Compute',
    skills: [
      'Terraform',
      'AWS CloudFormation',
      'AWS Lambda',
      'AWS S3',
      'AWS EC2',
    ],
  },
  {
    name: 'Databases and Monitoring',
    skills: [
      'AWS DynamoDB',
      'AWS Redshift',
      'SQL Server',
      'PostgreSQL',
      'AWS Cloudwatch',
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
