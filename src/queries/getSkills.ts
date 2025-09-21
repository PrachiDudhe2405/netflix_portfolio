// queries/getTimeline.ts
import { Skill } from '../types';

const STATIC_SKILLS: Skill[] = [
  { name: 'Python', category: 'Programming', description: 'Pandas, NumPy, scikit-learn, TensorFlow', icon: 'python' },
  { name: 'SQL', category: 'Programming', description: 'Queries, Joins, Optimization', icon: 'database' },
  { name: 'JavaScript', category: 'Programming', description: 'Frontend scripting and Data Visualization', icon: 'js' },
  { name: 'ETL & Analytics', category: 'Data Engineering & Analytics', description: 'Extract Transform Load (ETL), Exploratory Data Analysis (EDA), Cleaning, Feature Engineering, Predictive Modeling', icon: 'etl' },
  { name: 'ML & AI', category: 'Machine Learning & AI', description: 'Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Embedding, Natural Language Processing (NLP), Convolutional Neural Network (CNNs), ResNet, YOLOv8, Support Vector Machine (SVM), Principal Component Analysis (PCA), OpenCV', icon: 'ml' },
  { name: 'Tools', category: 'Tools & Platforms', description: 'FAISS, OpenAI/DeepSeek APIs, Snowflake, Power BI, Tableau, MongoDB, Streamlit, Git, Docker', icon: 'tools' },
  { name: 'Workflow', category: 'Workflow & Soft Skills', description: 'Agile/Scrum, Leadership, UX design thinking, Collaboration, Communication', icon: 'workflow' }
];

export async function getSkills(): Promise<Skill[]> {
  return STATIC_SKILLS;
}
