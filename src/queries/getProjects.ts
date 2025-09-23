// queries/getProjects.ts
import { Project } from '../types';
import cifarImage from '../images/Cifar.jpeg'
import trafficImage from '../images/Traffic.jpeg';
import fitnessImage from '../images/fitness.jpeg';
import resumeImage from '../images/resume match.jpeg';

const STATIC_PROJECTS: Project[] = [
  {
    title: 'Image Classification on CIFAR-10',
    description: 'Compared CNN (75%), ResNet-18+SVM (86%), and ResNet-34 (95%) with tuning and interpretability.',
    techUsed: 'Python, PyTorch, ResNet, SVM',
    image: { url: cifarImage },
    link: 'https://ecencifar10project.netlify.app'
  },
  {
    title: 'Traffic Monitoring with YOLOv8',
    description: 'Detected 761 vehicles and 326 pedestrians across 180+ frames and built activity trends.',
    techUsed: 'Python, YOLOv8, OpenCV, Pandas',
    image: { url: trafficImage }
  },
  {
    title: 'Interactive Fitness Dashboard',
    description: 'Responsive Vega-Lite dashboards for Fitbit metrics with ML-based imputation (+20% reliability).',
    techUsed: 'JavaScript, Vega-Lite, HTML/CSS, MongoDB',
    image: { url: fitnessImage }
  },
  {
    title: 'TalentSync — AI Resume Matching & Career Path Prediction',
    description: 'Embeddings + FAISS semantic search with RAG explanations; ~85% retrieval relevance, ~80% accuracy.',
    techUsed: 'Python, Streamlit, FAISS, SentenceTransformers, scikit-learn, XGBoost',
    image: { url: resumeImage }
  }
];

export async function getProjects(): Promise<Project[]> {
  return STATIC_PROJECTS;
}
