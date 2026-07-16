// queries/getSkills.ts
import { Skill } from '../types';

const STATIC_SKILLS: Skill[] = [
  {
    name: 'Agentic AI & LLMs',
    category: 'Agentic AI',
    description: 'LangGraph, LlamaIndex, LangChain, RAG pipelines, agentic orchestration, multi-mode query routing, prompt engineering, fine-tuning (LoRA/PEFT/QLoRA), LLM integration (Groq, Llama 3.3, Ollama), embedding-based search, structured output validation, prompt optimization',
    icon: 'FaCode'
  },
  {
    name: 'Evaluation & Research',
    category: 'Evaluation',
    description: 'Eval harness design, offline evaluation, hallucination measurement, answer groundedness, production trace analysis, agent failure diagnosis, experiment design, statistical modeling, A/B testing, hypothesis testing, technical report writing',
    icon: 'FaCode'
  },
  {
    name: 'ML & Data Science',
    category: 'Machine Learning',
    description: 'Python (Pandas, NumPy, scikit-learn, PyTorch), SQL, predictive modeling, time-series analysis, anomaly detection, feature engineering, class imbalance handling (SMOTE), threshold tuning, model evaluation, deep learning, reinforcement learning',
    icon: 'FaCode'
  },
  {
    name: 'Data Engineering',
    category: 'Engineering',
    description: 'ETL pipelines, schema validation, data quality monitoring, semantic chunking, hybrid retrieval, cross-encoder reranking, vector search (FAISS), SQL views, Oracle to SQL Server pipelines, Git, Linux/Unix',
    icon: 'FaCode'
  },
  {
    name: 'Visualization & Delivery',
    category: 'Analytics Delivery',
    description: 'Streamlit, Plotly, Power BI, decision-focused dashboards, stakeholder-facing analytics, non-technical audience communication',
    icon: 'SiNetlify'
  }
];

export async function getSkills(): Promise<Skill[]> {
  return STATIC_SKILLS;
}export async function getSkills(): Promise<Skill[]> {
  return STATIC_SKILLS;
}
