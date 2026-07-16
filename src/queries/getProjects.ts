// queries/getProjects.ts
import { Project } from '../types';
import cifarImage from '../images/Cifar.jpeg'
import trafficImage from '../images/Traffic.jpeg';
import resumeImage from '../images/resume match.jpeg';
import agrichatImage from '../images/agrichat-paper.png';
import roadLaneOverlayImage from '../images/road-lane-overlay.png';
import blackjackDrlImage from '../images/blackjack-drl.png';

const STATIC_PROJECTS: Project[] = [
  {
    title: 'Telecom AI Issue Detection System',
    description: 'Predictive maintenance and fault detection system across three modeling layers: KPI incident detection (Random Forest + SMOTE, 51% recall on 150K time-series rows), complaint signal detection (RoBERTa + zero-shot labeling, 77% recall on 50K records), and capacity utilization forecasting (Random Forest Regression, 14% MAE on 10M rows). Deployed as a live Streamlit diagnostic dashboard.',
    techUsed: 'Python, scikit-learn, Random Forest, Time-Series, Anomaly Detection, Streamlit',
    image: { url: trafficImage },
    proofLinks: [
      { label: 'GitHub', url: 'https://github.com/PrachiDudhe2405/Telecom-AI-Issue-Detection' }
    ]
  },
  {
    title: 'AgriChat: Hybrid Structured-Unstructured RAG for Agricultural Trial Reports',
    description: 'Multi-mode agentic query router switching between structured SQL execution, semantic RAG retrieval, and batch summarization based on inferred user intent. Built offline evaluation harness measuring hallucination rate and answer groundedness. Reduced cross-county comparison from hours to seconds across 29 PDFs.',
    techUsed: 'Python, LlamaIndex, LangChain, Supabase PostgreSQL, Groq, Llama 3.3, Streamlit',
    image: { url: agrichatImage },
    proofLinks: [
      { label: 'GitHub', url: 'https://github.com/PrachiDudhe2405/AgriChat' },
      { label: 'Paper', url: `${process.env.PUBLIC_URL}/STAT_683_AgriChat.pdf` }
    ]
  },
  {
    title: 'Road Lane Overlay: VLM-Guided Generative Restoration',
    description: 'Restore-detect-repair pipeline recovering lane markings in degraded dashcam frames using dehazing (Dark Channel Prior), CLRerNet lane detection over 62K CULane images, and guided inpainting with Qwen-Image-Edit fine-tuned with LoRA on 900 image pairs. Achieved 12.3% FID improvement, 7.1% lane F1 gain, and 10.3% recall improvement over zero-shot baseline.',
    techUsed: 'Python, PyTorch, LoRA, PEFT, Qwen-Image-Edit, CLRerNet, Computer Vision',
    image: { url: roadLaneOverlayImage },
    proofLinks: [
      { label: 'Paper', url: `${process.env.PUBLIC_URL}/GenAI_Paper.pdf` }
    ]
  },
  {
    title: 'Acing Blackjack with Deep Reinforcement Learning',
    description: 'Built a custom Blackjack environment and trained a staged Double DQN agent with curriculum learning across four phases — from single-player foundation to 6-player, 6-deck configuration. Achieved 43% win rate in Phase 1 matching optimal basic strategy, and 38% in the complex multi-player setting. Discovered that reward shaping hurt performance — the agent learned better from sparse win/loss signals alone.',
    techUsed: 'Python, PyTorch, Double DQN, Reinforcement Learning, Curriculum Learning',
    image: { url: blackjackDrlImage },
    proofLinks: [
      { label: 'GitHub', url: 'https://github.com/shreyamuppidi/Blackjack-DRL.git' },
      { label: 'Demo', url: 'https://youtu.be/VRfSG4gUUeE?si=yQqjgXve_Ee8EEix' },
      { label: 'Paper', url: `${process.env.PUBLIC_URL}/DRL_paper.pdf` }
    ]
  },
  {
    title: 'CIFAR-10 Image Classification',
    description: 'Evaluated three architectures on 60K CIFAR-10 images: baseline CNN (63%), hybrid ResNet-18 + SVM replacing the FC layer (86%), and ResNet-34 end-to-end (95%). Applied saliency maps to validate that improvements reflected genuine feature learning rather than data artifacts. Found that adding FC layers to the baseline worsened performance — the bottleneck was feature quality, not classifier depth.',
    techUsed: 'Python, PyTorch, ResNet-34, ResNet-18, SVM, scikit-learn',
    image: { url: cifarImage },
    proofLinks: [
      { label: 'Live Demo', url: 'https://ecencifar10project.netlify.app' }
    ]
  },
  {
    title: 'SulzerGPT — RAG Document Retrieval System',
    description: 'Built a RAG document retrieval system over 5,000+ technical maintenance records enabling engineers to search relevant information using natural language. Raised retrieval accuracy by 31% through semantic chunking, hybrid retrieval, and cross-encoder reranking. Cut query latency from 8.5s to 4.5s through systematic profiling, caching, and async optimization.',
    techUsed: 'Python, RAG, Embeddings, Vector Search, Semantic Chunking, Cross-Encoder Reranking',
    image: { url: resumeImage },
    proofLinks: []
  }
];

export async function getProjects(): Promise<Project[]> {
  return STATIC_PROJECTS;
}
