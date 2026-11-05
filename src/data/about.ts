// Content for the About section. Edit the texts freely.
import { profile } from './profile';

export const about = {
  lead: 'Backend-focused computer science student, writing my thesis on AI under real-world constraints.',
  paragraphs: [
    'I’m studying Computer Science at Technische Hochschule Lübeck. My main focus is backend development with Java and Spring Boot, and I like building services that are clear, testable and easy to run.',
    'My bachelor’s thesis asks to what extent a small company can set up its own fine-tuned model, with a focus on data sovereignty. Alongside it, I build full-stack projects to see how backend decisions play out in a complete product.',
    'I’m looking for a backend or software engineering role starting in January 2027.',
  ],
  facts: [
    { label: 'Studying', value: `${profile.degree}, ${profile.university}` },
    { label: 'Graduating', value: profile.graduation },
    { label: 'Based in', value: profile.location },
    { label: 'Languages', value: 'German, English' },
    { label: 'Interests', value: 'Backend development, applied machine learning, data sovereignty' },
  ],
};
