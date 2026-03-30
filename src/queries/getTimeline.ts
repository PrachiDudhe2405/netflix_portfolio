// queries/getTimeline.ts
import { TimelineItem } from '../types';

const STATIC_TIMELINE: TimelineItem[] = [
  {
    name: 'Texas A&M University - Corpus Christi',
    timelineType: 'work',
    title: 'Research Data Engineer (Capstone)',
    techStack: 'Python, Streamlit, LlamaIndex, RAG, SQL',
    summaryPoints: 'Built a 3-stage normalization pipeline for 29 inconsistent agricultural trial PDFs, then benchmarked SQL and semantic RAG query paths to identify the most reliable approach for each query type. Delivered the outputs in an interactive Streamlit dashboard used by cross-functional research teams for weekly decision-making.',
    dateRange: 'Aug 2025 – Dec 2025'
  },
  {
    name: 'Sulzer India',
    timelineType: 'work',
    title: 'Data Science Intern',
    techStack: 'Python, PyPDF2, FAISS, all-MiniLM-L6-v2, RAG',
    summaryPoints: 'Built a prototype RAG pipeline for technical PDFs by chunking 500+ document segments, generating all-MiniLM-L6-v2 embeddings, and indexing them in FAISS for semantic retrieval. Benchmarked chunking and embedding configurations to find the best precision-latency trade-off, reaching 20–40 ms CPU query response.',
    dateRange: 'Jun 2025 – Jul 2025'
  },
  {
    name: 'Tata Consultancy Services India',
    timelineType: 'work',
    title: 'Data Analyst',
    techStack: 'Python, SQL, Power BI',
    summaryPoints: 'Built end-to-end ETL pipelines over enterprise ERP data, added anomaly detection to catch inconsistencies before they affected KPIs, and delivered Power BI and Tableau dashboards tracking 10+ operational metrics. Optimized SQL joins and indexing to reduce average pipeline runtime by 25% and partnered with business teams to define decision-critical metrics.',
    dateRange: 'Oct 2022 – Jul 2024'
  },
  {
    name: 'Texas A&M University',
    timelineType: 'education',
    title: 'M.S. Data Science (ECE Track), GPA 3.5/4.0',
    techStack: 'Pattern Recognition, ML, Digital Image Processing & CV, RL',
    summaryPoints: 'I’m currently pursuing a Master’s in Data Science at Texas A&M University, building depth in machine learning, computer vision, reinforcement learning, and evaluation-driven AI systems. My coursework and projects focus on experimentation, retrieval systems, and decision-ready analytics.',
    dateRange: 'Aug 2024 – May 2026'
  },
  {
    name: 'Pune University',
    timelineType: 'education',
    title: 'B.E. Electronics & Telecommunication (Honors in Data Science), GPA 3.8/4.0',
    techStack: '',
    summaryPoints: 'I completed my undergraduate degree in Electronics and Telecommunication with Honors in Data Science, building a foundation in programming, analytics, and machine learning alongside core engineering coursework. That combination shaped my move toward AI, data science, and applied experimentation.',
    dateRange: 'Aug 2018 – May 2022'
  }
];

export async function getTimeline(): Promise<TimelineItem[]> {
  return STATIC_TIMELINE;
}
