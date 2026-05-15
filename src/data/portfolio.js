// ── src/data/portfolio.js ──
// Edit ALL 
import wagonway from '../assets/wagonway.png';

export const personal = {
  name:            'Kecho',
  logoText:        'Welcome',
  badge:           'Available for opportunities',
  tagline:         "Hi, I'm",
  headline:        'Kecho.',
  description:     'I turn complex data into clear stories and build software that scales. Specialising in analytics pipelines, data visualisation, and full-stack engineering.',
  email:           'hello@yourname.com',
  whatsapp:        '254748905258',   
  whatsappMessage: "Hi! I saw your portfolio and I'd love to chat.",
  social: {
    github:   '#',
    linkedin: '#',
    twitter:  '#',
  },
  footerCopy: '© 2025 Martin Kecho Portfolio · Data Analytics & Software Engineer',
};

export const roles = [
  { icon: '📊', label: 'Data Analytics' },
  { icon: '💻', label: 'Software Engineer' },
  { icon: '🤖', label: 'ML & AI' },
];

export const stats = [
  { num: '4+',  label: 'Years Experience' },
  { num: '30+', label: 'Projects Delivered' },
  { num: '15+', label: 'Happy Clients' },
];

export const skills = [
  'Python','SQL','Pandas','Power BI','Tableau',
  'JavaScript','React','Node.js','PostgreSQL',
  'Machine Learning','TensorFlow','AWS','Docker','REST APIs',
];

export const aboutSkills = [
  'Data Engineering','Statistical Analysis','Full-Stack Dev',
  'Cloud Architecture','ML & AI','Data Visualisation',
];

export const filterCategories = [
  { key: 'all',       label: 'All Work',         icon: '' },
  { key: 'analytics', label: 'Data Analytics',   icon: '📊' },
  { key: 'ml',        label: 'ML & AI',          icon: '🤖' },
  { key: 'software',  label: 'Software Eng',     icon: '💻' },
  { key: 'cloud',     label: 'Cloud & Data Eng', icon: '☁️' },
];

export const projects = [
  {
    id: 1, category: 'analytics', icon: '📈', thumbIndex: 1,
    tags: ['Python', 'Power BI', 'SQL'],
    title: 'Sales Analytics Dashboard',
    description: 'Real-time sales intelligence platform processing 2M+ rows daily. Built ETL pipelines and interactive dashboards used by the executive team.',
    link: '#',
  },
  {
    id: 2, category: 'ml', icon: '🤖', thumbIndex: 2,
    tags: ['ML', 'TensorFlow', 'Python'],
    title: 'Churn Prediction Model',
    description: 'Machine learning model predicting customer churn with 91% accuracy. Reduced churn by 23% within the first quarter of deployment.',
    link: '#',
  },
  {
    id: 3, category: 'software', icon: wagonway, thumbIndex: 3,
    tags: ['React', 'Node.js', 'mySQL'],
    title: 'Car Selling Platform',
    description: 'Fully functional car selling platform with real-time inventory management and REST API integrations.',
    link: '#',
  },
  {
    id: 4, category: 'analytics', icon: '📊', thumbIndex: 4,
    tags: ['Tableau', 'R', 'BigQuery'],
    title: 'Financial Risk Analytics',
    description: 'End-to-end risk analysis framework for a financial services firm, including statistical models and executive-level Tableau reporting suite.',
    link: '#',
  },
  {
    id: 5, category: 'ml', icon: '🔍', thumbIndex: 5,
    tags: ['NLP', 'Python', 'FastAPI'],
    title: 'Sentiment Analysis API',
    description: 'Multi-language sentiment analysis microservice handling 10K requests/min. Integrated into e-commerce platforms for real-time customer feedback analysis.',
    link: '#',
  },
  {
    id: 6, category: 'cloud', icon: '☁️', thumbIndex: 6,
    tags: ['AWS', 'Airflow', 'Spark'],
    title: 'Data Pipeline Infrastructure',
    description: 'Scalable cloud data pipeline architecture processing streaming data from 50+ sources. Reduced data latency from 4 hours to under 5 minutes.',
    link: '#',
  },
  {
    id: 7, category: 'software', icon: '📱', thumbIndex: 7,
    tags: ['React Native', 'Firebase', 'Node.js'],
    title: 'Field Data Collection App',
    description: 'Cross-platform mobile app for offline-first data collection in low-connectivity environments. Syncs to cloud dashboards once connected.',
    link: '#',
  },
  {
    id: 8, category: 'analytics', icon: '🏥', thumbIndex: 8,
    tags: ['Python', 'Pandas', 'Tableau'],
    title: 'Health Outcomes Analytics',
    description: 'Longitudinal patient outcome analysis for a regional health authority, identifying key risk factors and informing resource allocation decisions.',
    link: '#',
  },
  {
    id: 9, category: 'cloud', icon: '⚡', thumbIndex: 9,
    tags: ['GCP', 'Kubernetes', 'Docker'],
    title: 'Real-Time Event Processing',
    description: 'Cloud-native event processing system using Kubernetes and Docker, handling 100K+ events per second with auto-scaling capabilities.',
    link: '#',
  },
  {
    id: 10, category: 'ml', icon: '🧠', thumbIndex: 10,
    tags: ['Deep Learning', 'Python', 'TensorFlow'],
    title: 'Image Recognition System',
    description: 'Convolutional neural network for image classification, achieving 95% accuracy on a custom dataset. Integrated into a mobile app for real-time object detection.',
    link: '#',
  }
];
