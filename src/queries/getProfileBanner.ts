// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';

export async function getProfileBanner(): Promise<ProfileBanner> {
  return {
    backgroundImage: { url: '' },
    headline: 'I build AI systems that catch what others miss — and turn findings into decisions.',
    highlights: [
      '51% incident recall on 150K telecom KPI rows after diagnosing data leakage and fixing the evaluation',
      '31% retrieval accuracy improvement and 47% latency reduction on 5,000+ technical documents at Sulzer',
      '12.3% FID improvement in lane restoration by diagnosing why the baseline model failed and switching architectures'
    ],
    resumeLink: { url: '/resume' },
    linkedinLink: 'https://www.linkedin.com/in/prachi-dudhe',
    profileSummary: "I'm Prachi, an MS Data Science graduate from Texas A&M. I build agentic AI systems, RAG pipelines, and ML models for real operational impact — and I'm known for diagnosing non-obvious failures and iterating quickly from real usage signals to measurable improvements. Currently looking for my first full-time Data Scientist or ML Engineer role."
  } as ProfileBanner;
}
