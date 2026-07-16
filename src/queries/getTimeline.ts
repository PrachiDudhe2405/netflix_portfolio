// queries/getTimeline.ts
import { TimelineItem } from '../types';

const STATIC_TIMELINE: TimelineItem[] = [
  {
    name: 'Texas A&M University - Corpus Christi',
    timelineType: 'work',
    title: 'Graduate Capstone – AgriChat',
    techStack: 'Python, LlamaIndex, LangChain, Supabase PostgreSQL, Groq, Llama 3.3, Streamlit',
    summaryPoints: 'Built AgriChat end-to-end: designed a multi-mode agentic query router that switches between structured SQL execution, semantic RAG retrieval, and batch summarization based on inferred user intent. Built offline evaluation harness measuring hallucination rate and answer groundedness against retrieved evidence. Implemented structured output validation and rejection rules that logged malformed outputs rather than passing them silently downstream.',
    dateRange: 'Aug 2025 – Dec 2025'
  },
  {
    name: 'Sulzer India',
    timelineType: 'work',
    title: 'Data Science Intern',
    techStack: 'Python, Embeddings, Vector Search, Semantic Chunking, Cross-Encoder Reranking',
    summaryPoints: 'Built a RAG document retrieval system over 5,000+ technical maintenance records enabling engineers to search relevant information using natural language. Raised retrieval accuracy by 31% through semantic chunking, hybrid retrieval, and cross-encoder reranking. Cut query latency from 8.5s to 4.5s through systematic profiling, caching, and async optimization. Designed modular, well-documented pipeline components to support team adoption and future iteration.',
    dateRange: 'Jun 2025 – Jul 2025'
  },
  {
    name: 'Tata Consultancy Services',
    timelineType: 'work',
    title: 'Data Analyst',
    techStack: 'Infor LN, Infor 4GL, Oracle, SQL Server, Power BI, Python',
    summaryPoints: 'Developed custom Infor 4GL extraction scripts within the ERP environment to process complex supply chain metrics. Built an ETL pipeline (Oracle to SQL Server staging, nightly Agent jobs) and designed SQL views bridging the ERP fragmented schema into Power BI dashboards tracking 10+ KPIs — cutting report preparation time by 25%. Delivered a vendor spend dashboard against a hard deadline by building a normalisation mapping in Power Query to resolve duplicate records, securing 95% user adoption.',
    dateRange: 'Oct 2022 – Jul 2024'
  },
  {
    name: 'Texas A&M University',
    timelineType: 'education',
    title: 'M.S. Data Science (ECE Track)',
    techStack: 'Pattern Recognition, Machine Learning, Digital Image Processing, Computer Vision, Reinforcement Learning',
    summaryPoints: 'Completed a Master\'s in Data Science with focus on machine learning, computer vision, reinforcement learning, and evaluation-driven AI systems. Coursework and projects cover agentic AI, retrieval systems, anomaly detection, time-series forecasting, and decision-ready analytics. GPA 3.5/4.0.',
    dateRange: 'Aug 2024 – May 2026'
  },
  {
    name: 'Pune University',
    timelineType: 'education',
    title: 'B.E. Electronics & Telecommunication (Honors in Data Science)',
    techStack: 'Electronics, Telecommunications, Data Science, Programming',
    summaryPoints: 'Completed undergraduate degree in Electronics and Telecommunication with Honors in Data Science. Built foundation in programming, analytics, and machine learning alongside core engineering coursework in signal processing and telecommunications — directly informing later work in telecom anomaly detection and time-series modeling. GPA 3.8/4.0.',
    dateRange: 'Aug 2018 – May 2022'
  }
];

export async function getTimeline(): Promise<TimelineItem[]> {
  return STATIC_TIMELINE;
}  {
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
