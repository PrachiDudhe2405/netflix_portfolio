// queries/getTimeline.ts
import { Skill } from '../types';

const STATIC_SKILLS: Skill[] = [
  {
    name: 'Experimentation & Statistics',
    category: 'Decision Science',
    description: 'A/B testing, controlled experiments, hypothesis testing, effect size, variance analysis, anomaly detection, statistical EDA, metric selection, causal reasoning',
    icon: 'FaCode'
  },
  {
    name: 'ML & Decision Science',
    category: 'Machine Learning',
    description: 'scikit-learn, PyTorch, regression, classification, reinforcement learning, model evaluation, feature engineering',
    icon: 'FaCode'
  },
  {
    name: 'AI-Enabled Analytics',
    category: 'AI Systems',
    description: 'RAG pipelines, LlamaIndex, FAISS, semantic embeddings, LLM integration, retrieval quality benchmarking',
    icon: 'SiImessage'
  },
  {
    name: 'Data Engineering',
    category: 'Engineering',
    description: 'Python (Pandas, NumPy), SQL, ETL pipelines, schema validation, data quality monitoring, Git',
    icon: 'FaCode'
  },
  {
    name: 'Visualization & Dashboards',
    category: 'Analytics Delivery',
    description: 'Streamlit, Plotly, Power BI, Tableau, decision-focused dashboards, stakeholder-facing analytics',
    icon: 'SiNetlify'
  }
];

export async function getSkills(): Promise<Skill[]> {
  return STATIC_SKILLS;
}
