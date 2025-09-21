// queries/getTimeline.ts
import { TimelineItem } from '../types';

const STATIC_TIMELINE: TimelineItem[] = [
  {
    name: 'Sulzer',
    timelineType: 'work',
    title: 'Data Science Intern',
    techStack: 'Python, FAISS, LLM embeddings, SAP LeanIX',
    summaryPoints: 'During my Data Science internship at Sulzer, I designed and deployed a Retrieval-Augmented Generation (RAG) pipeline to make 24,000+ engineering and technical documents instantly searchable. Using Python, FAISS, and LLM embeddings, I improved retrieval precision by 31% and cut query response time by 47%, enabling engineers to quickly find accurate answers without manually scanning PDFs. I also partnered with IT to map 10+ internal systems in SAP LeanIX for better enterprise visibility and managed secure access for engineering teams through M-Files, ensuring compliance with internal standards. This work streamlined knowledge access, reduced delays in technical decision-making, and demonstrated how AI systems can be scaled securely in an industrial environment.',
    dateRange: 'Jun 2025 – Jul 2025'
  },
  {
    name: 'Tata Consultancy Services',
    timelineType: 'work',
    title: 'Software Developer',
    techStack: 'Python, SQL, Power BI',
    summaryPoints: 'At Tata Consultancy Services, I worked as a Software Developer where I focused on building and optimizing ETL pipelines in Python and SQL to ensure enterprise data quality. I automated Power BI dashboards that cut manual reporting by half and enabled faster decision-making across teams. I also improved workflow efficiency by reducing preprocessing time by 40% through testing and root-cause analysis, while contributing to Agile sprints that improved transparency and shortened decision cycles. This role gave me hands-on experience in large-scale data systems, business intelligence, and collaborative software development.',
    dateRange: 'Oct 2022 – Jul 2024'
  },
  {
    name: 'Texas A&M University',
    timelineType: 'education',
    title: 'M.S. Data Science (ECE Track), GPA 3.33/4',
    techStack: 'Pattern Recognition, ML, Digital Image Processing & CV, RL',
    summaryPoints: 'I\'m currently pursuing a Master\'s in Data Science (ECE track) at Texas A&M University, where I\'m building strong foundations in machine learning, computer vision, reinforcement learning, and pattern recognition. My coursework emphasizes both the theoretical underpinnings and hands-on applications of AI/ML, which I actively apply in projects ranging from retrieval-augmented generation systems to deep learning models for image and video analysis.',
    dateRange: 'Aug 2024 – May 2026'
  },
  {
    name: 'Pune University',
    timelineType: 'education',
    title: 'B.E. Electronics & Telecommunication (Honors in Data Science), GPA 3.6/4',
    techStack: '',
    summaryPoints: 'I completed my B.E. in Electronics & Telecommunication with Honors in Data Science from Pune University. My undergraduate studies gave me a strong foundation in electronics, programming, and applied data science. Alongside core engineering courses, I pursued projects that introduced me to machine learning, computer vision, and analytics, which later shaped my decision to specialize in AI/ML during my master\'s.',
    dateRange: 'Aug 2018 – May 2022'
  }
];

export async function getTimeline(): Promise<TimelineItem[]> {
  return STATIC_TIMELINE;
}
