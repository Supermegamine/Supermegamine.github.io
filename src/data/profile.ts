// All content lives here. Edit this file, the page updates itself.
// Replace every TODO with your real information.

export const profile = {
  name: 'Oskar Stephen Schießl', // TODO
  role: 'Backend Developer',
  headline:
    'I build reliable backend services in Java and I’m writing my bachelor’s thesis on applying AI.', // TODO: adjust
  location: 'Lübeck, Germany', // TODO
  university: 'Technische Hochschule Lübeck', // TODO
  degree: 'B.Sc. Computer Science', // TODO
  graduation: '2027', // TODO
  availableFrom: '2027-01', // TODO
  email: 'osk.sch04@gmail.com', // TODO
  github: 'https://github.com/supermegamine', // TODO
  linkedin: 'https://www.linkedin.com/in/oskar-schie%C3%9Fl-703989415/', // TODO
  cvUrl: '/Oskar_Schießl_Lebenslauf.pdf', // TODO: put cv.pdf in /public and set '/cv.pdf', or leave empty to hide the link
};

export const thesis = {
  title: 'To what extent can a small company set up a fine-tuned model?', // TODO
  summary:
    'This thesis explores the feasibility and challenges of setting up a fine-tuned machine learning model within a small company context. Especially, it examines under the aspect of data sovereignty.', // TODO
  topics: ['Machine Learning', 'Data Sovereignity'], // TODO
  status: 'In progress, submission planned for January 2027',
};

export const projects = [
  {
    title: 'Caption The Moment', // TODO
    description:
      'A real-time, multiplayer party game where friends compete to write the funniest caption for a photo.', // TODO
    stack: ['Streamlit (Python)', 'Supabase (PostgreSQL)'],
    repo: 'https://github.com/Supermegamine/CaptionTheMoment',
    demo: '',
  },
  {
    title: 'Planify', // TODO
    description: 'A full-stack productivity app that combines intelligent task management, daily habit tracking, and calendar scheduling into one dashboard.',
    stack: ['Next.js', 'SQLite', 'TailwindCSS'],
    repo: 'https://github.com/Supermegamine/Planify',
    demo: '',
  },
  {
    title: 'Holiday Planner', // TODO
    description: 'A polished, modern web app for planning family holidays and organizing activities for each day of a trip. The experience is designed to feel simple and approachable while still supporting real shared planning workflows.',
    repo: 'https://github.com/Supermegamine/Holiday-planner',
    stack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Supabase (PostgreSQL)'],
    demo: '',
  },
  
];

export const skills = [
  { group: 'Languages', items: ['Java', 'Python', 'SQL', 'JavaScript'] },
  { group: 'Backend', items: ['Spring Boot', 'REST APIs', 'Maven'] },
  { group: 'Data & AI', items: ['PyTorch'] },
  { group: 'Tools', items: ['Git', 'Docker'] },
];
