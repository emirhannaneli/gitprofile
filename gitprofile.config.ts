// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'emirhannaneli', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [
            'emirhannaneli/emirhannaneli',
            'emirhannaneli/spring-multiple-database',
            'emirhannaneli/payment-garanti'
          ], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Emirhan Naneli',
    description: 'Portfolio',
    imageURL: '',
  },
  social: {
    linkedin: 'emirhannaneli',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '18353450/emirhan-naneli', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://emirman.dev',
    phone: '+90 546 977 71 05',
    email: 'emirhannaneli@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/16MRmk-y0_xLnB0dB3_Tf9PlSwPgWqt1c/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Kotlin',
    'Spring Boot',
    'Spring Data',
    'Spring Security',
    'Spring Cloud',
    'Spring Integration',
    'Spring WebFlux',
    'Spring Web',
    'Spring MVC',
    'Spring JPA',
    'Spring AOP',
    'Microservice Architecture',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'RabbitMQ',
    'Kafka',
    'GraphQL',
    'Feign',
    'Git',
    'Docker',
    'Docker Swarm',
    'Linux',
    'Unit Testing',
    'JavaScript (Beginner)',
    'TypeScript (Beginner)',
    'React.js (Beginner)',
  ],
  experiences: [
    {
      company: 'SAGANETWORK Telekomünikasyon A.Ş.',
      position: 'Backend Developer',
      from: 'September 2022',
      to: 'November 2024',
      companyLink: 'https://saganetwork.net',
    },
  ],
  certifications: [
    {
      name: 'Introduction to Programming with JAVA',
      body: '',
      year: 'March 2021',
      link: 'https://drive.google.com/file/d/1ADVPI4IvgS7lm-2_MVvXCTMPEUmnaQKg/view?usp=sharing',
    },
  ],
  educations: [
    {
      institution: 'Bandırma Onyedi Eylül University Gönen Vocational School',
      degree: 'Computer Programming',
      from: '2023',
      to: 'Present',
    }
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 4, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: false,
};

export default CONFIG;
