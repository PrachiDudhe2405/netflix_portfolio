// queries/getProjects.ts
import { Project } from '../types';
import cifarImage from '../images/Cifar.jpeg'
import trafficImage from '../images/Traffic.jpeg';
import fitnessImage from '../images/fitness.jpeg';
import resumeImage from '../images/resume match.jpeg';
import agrichatImage from '../images/agrichat-paper.png';
import roadLaneOverlayImage from '../images/road-lane-overlay.png';
import blackjackDrlImage from '../images/blackjack-drl.png';

const STATIC_PROJECTS: Project[] = [
  {
    title: 'AgriChat: Hybrid Structured-Unstructured RAG for Agricultural Trial Reports',
    description: 'Hybrid PDF-to-RAG pipeline for cotton variety trial analysis, combining schema-normalized tables, semantic retrieval, SQL routing, and Groq-accelerated summaries.',
    techUsed: 'Python, LlamaIndex, Streamlit, Supabase PostgreSQL, Groq',
    image: { url: agrichatImage },
    proofLinks: [
      { label: 'GitHub', url: 'https://github.com/PrachiDudhe2405/AgriChat' },
      { label: 'Paper', url: `${process.env.PUBLIC_URL}/STAT_683_AgriChat.pdf` }
    ]
  },
  {
    title: 'Acing Blackjack with Deep Reinforcement Learning',
    description: 'Built a custom Blackjack environment and trained a staged Double DQN agent that learned near-optimal play across single-player, card-counting, and 6-player settings.',
    techUsed: 'Python, Double DQN, Reinforcement Learning, PyTorch, Card Counting',
    image: { url: blackjackDrlImage },
    proofLinks: [
      { label: 'GitHub', url: 'https://github.com/shreyamuppidi/Blackjack-DRL.git' },
      { label: 'Demo', url: 'https://youtu.be/VRfSG4gUUeE?si=yQqjgXve_Ee8EEix' },
      { label: 'Paper', url: `${process.env.PUBLIC_URL}/DRL_paper.pdf` }
    ]
  },
  {
    title: 'Road Lane Overlay: Generative Restoration of Lane Markings in Dashcam Footage',
    description: 'Restore-detect-repair pipeline for degraded dashcam lanes using DCP visibility enhancement, CLRerNet lane extraction, and Qwen image editing with localized gap masks.',
    techUsed: 'Python, CLRerNet, Qwen-Image-Edit, LaMa, Computer Vision',
    image: { url: roadLaneOverlayImage },
    proofLinks: [
      { label: 'Paper', url: `${process.env.PUBLIC_URL}/GenAI_Paper.pdf` }
    ]
  },
  {
    title: 'Image Classification on CIFAR-10',
    description: 'Compared CNN (75%), ResNet-18+SVM (86%), and ResNet-34 (95%) with tuning and interpretability.',
    techUsed: 'Python, PyTorch, ResNet, SVM',
    image: { url: cifarImage },
    link: 'https://ecencifar10project.netlify.app',
    proofLinks: [
      { label: 'Live Demo', url: 'https://ecencifar10project.netlify.app' }
    ]
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
