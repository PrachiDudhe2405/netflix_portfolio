// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';

export async function getProfileBanner(): Promise<ProfileBanner> {
  // Use static content instead of remote CMS
  return {
    backgroundImage: { url: '' },
    headline: 'I build AI systems, test what works, and turn results into decisions.',
    highlights: [
      '29 agricultural PDFs normalized into a hybrid RAG workflow',
      '43.2% Blackjack win rate after reward redesign and 400k+ training episodes',
      '+7.1% lane restoration F1 with semantically guided image editing'
    ],
    resumeLink: { url: '/resume' },
    linkedinLink: 'https://www.linkedin.com/in/prachi-dudhe',
    profileSummary: "I’m Prachi, an M.S. Data Science student at Texas A&M working across retrieval systems, reinforcement learning, and computer vision. I care about measurable performance, grounded outputs, and shipping analytics people can actually use."
  } as ProfileBanner;
}
