// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';

export async function getProfileBanner(): Promise<ProfileBanner> {
  // Use static content instead of remote CMS
  return {
    backgroundImage: { url: '' },
    headline: 'Graduate student who loves making machines think and dashboards dance',
    resumeLink: { url: '/resume' },
    linkedinLink: 'https://www.linkedin.com/in/prachi-dudhe',
    profileSummary: "Hi, I’m Prachi 👋 - a grad student at Texas A&M who’s endlessly curious about all things AI/ML. I’ve built resume-matching bots, traffic-spotting detectors, and even a Fitbit dashboard that politely suggests when to skip dessert (oops). I love solving real-world problems with data and get equally excited about messy code fixes and clean, polished visualizations. When I’m not debugging, you’ll probably find me chasing good coffee."
  } as ProfileBanner;
}
