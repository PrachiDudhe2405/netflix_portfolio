import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

interface ProjectDetailData {
  id: string;
  title: string;
  problem: string;
  approach: string;
  data: string;
  tools: string;
  steps: string;
  eda: string;
  results: string;
  techStack: string;
}

const projectData: { [key: string]: ProjectDetailData } = {
  'talentsync': {
    id: 'talentsync',
    title: 'TalentSync — AI Resume Matching & Career Path Prediction',
    problem: 'Recruiters spend countless hours scanning resumes, often missing strong candidates. Traditional systems rarely explain why a candidate is a match and almost never predict career growth. I wanted to build an app that could do all three — match, explain, and forecast.',
    approach: 'I built a pipeline with three components:\n• Semantic search using embeddings + FAISS for resume-job similarity\n• RAG explanations using Flan-T5 to generate natural-language "why" answers\n• Career trajectory prediction with RandomForest and XGBoost classifiers',
    data: 'Publicly available resume datasets from Kaggle and GitHub, cleaned and structured with metadata for training and evaluation.',
    tools: 'SentenceTransformers (MiniLM): compact, high-quality embeddings for resumes.\nFAISS: efficient vector similarity search at scale.\nFlan-T5: natural language explanations for recruiter trust.\nRandomForest/XGBoost: robust models for predicting career moves.\nStreamlit: quick UI to tie everything together.',
    steps: 'Encoded resumes and job descriptions into embeddings.\nIndexed them with FAISS for top-k semantic matches.\nRetrieved relevant chunks and passed them to Flan-T5 for explanations.\nTrained career prediction models on historical career paths (~80% accuracy).\nBuilt a Streamlit app with a recruiter workflow.',
    eda: 'Analyzed job title distributions, career paths, and clustered embeddings with PCA to ensure semantic similarity grouped as expected.',
    results: 'Improved match relevance to ~85%.\nAchieved ~80% accuracy in predicting next career roles.\nAdded natural-language explanations, boosting transparency.\nDelivered as a recruiter-friendly app, streamlining candidate screening.',
    techStack: 'Python, Streamlit, SentenceTransformers, FAISS, Flan-T5, RandomForest, XGBoost'
  },
  'yolov8-traffic': {
    id: 'yolov8-traffic',
    title: 'YOLOv8 Traffic & Pedestrian Monitoring',
    problem: 'Manual video review for traffic and pedestrian flow is time-consuming and impractical for large cities. I wanted to automate detection and convert it into actionable analytics for urban planning.',
    approach: 'I used YOLOv8x to detect vehicles and pedestrians frame-by-frame, then aggregated the detections into time-series trends.',
    data: 'Traffic surveillance videos sampled at 1 frame per second (~180 frames total).',
    tools: 'YOLOv8x: cutting-edge object detection, pretrained on COCO.\nOpenCV: for frame extraction and preprocessing.\nPandas/Matplotlib: to aggregate and visualize detection results.',
    steps: 'Extracted video frames with OpenCV.\nRan YOLOv8x detections per frame for vehicles and pedestrians.\nStored structured results in Pandas DataFrames.\nVisualized activity trends across frames and time.',
    eda: 'Plotted vehicle vs pedestrian counts over time to identify traffic spikes. Analyzed object distribution across vehicle categories.',
    results: 'Detected 761 vehicles and 326 pedestrians across ~180 frames.\nHighlighted clear peaks in congestion and pedestrian activity.\nDemonstrated how CV + analytics can aid city planning.',
    techStack: 'Python, YOLOv8x, OpenCV, Pandas, Matplotlib'
  },
  'cifar10-classification': {
    id: 'cifar10-classification',
    title: 'CIFAR-10 Image Classification',
    problem: 'Baseline CNNs on CIFAR-10 often plateau around ~60% accuracy, so I set out to explore how deeper architectures and hybrid approaches could significantly improve performance while remaining interpretable.',
    approach: 'I benchmarked three progressively complex models:\n• CNN baseline for a performance reference\n• ResNet-18 with SVM classifier to test hybrid feature extraction\n• ResNet-34 end-to-end for deeper representation learning',
    data: 'Used the CIFAR-10 dataset: 60,000 32×32 color images evenly distributed across 10 classes (airplanes, cars, birds, cats, etc.).',
    tools: 'PyTorch: flexible framework for deep model design and training.\nResNet: skip connections to mitigate vanishing gradients in deeper networks.\nSVM: robust high-dimensional classifier for hybrid pipeline.\nPCA & Saliency Maps: for interpretability and feature visualization.',
    steps: 'Trained a CNN baseline → achieved 63% accuracy.\nExtracted embeddings from ResNet-18, then classified with SVM → 86% accuracy.\nTrained ResNet-34 end-to-end, leveraging data augmentation and hyperparameter tuning → 95% accuracy.',
    eda: 'Explored class balance, applied PCA/t-SNE to visualize embedding clusters, and monitored training vs validation curves to prevent overfitting. Saliency maps helped highlight regions of images most influential to predictions.',
    results: 'Accuracy improved from 63% → 95% by progressing from CNN to hybrid ResNet+SVM to deeper ResNet-34.\nDemonstrated how network depth + hybridization can drive performance gains.\nDelivered not only higher accuracy but also insights into model decision-making, bridging raw accuracy with interpretability.',
    techStack: 'Python, PyTorch, ResNet, SVM, PCA, Saliency Maps'
  },
  'fitbit-dashboard': {
    id: 'fitbit-dashboard',
    title: 'Fitbit Unified Health Dashboard',
    problem: 'Fitbit generates valuable data, but raw JSON exports are messy and not user-friendly. I wanted to design a dashboard that made health trends both reliable and engaging.',
    approach: 'I built an interactive dashboard combining data visualization with ML-based imputation to handle missing values.',
    data: 'Fitbit JSON exports stored in MongoDB, covering activity, calories, heart rate, and sleep metrics.',
    tools: 'JavaScript + Vega-Lite: for interactive visual storytelling.\nMongoDB: to manage semi-structured JSON data.\nML regression: for imputing missing values and improving reliability.',
    steps: 'Imported JSON data into MongoDB and standardized time-series formats.\nApplied regression-based imputation, boosting reliability by ~20%.\nBuilt dashboards with radial plots, bar charts, and heatmaps.\nDesigned daily, weekly, and monthly views for flexible analysis.',
    eda: 'Explored correlations between steps, calories, and sleep. Analyzed missing data patterns to refine imputation models.',
    results: 'Improved reliability of health insights by 20% with imputation.\nCreated engaging visualizations that made health data more accessible.\nTurned raw logs into an interactive dashboard for personal wellness.',
    techStack: 'JavaScript, Vega-Lite, MongoDB, ML Regression'
  }
};

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projectId ? projectData[projectId] : null;

  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="project-not-found">
          <h1>Project Not Found</h1>
          <p>The requested project could not be found.</p>
          <button onClick={() => navigate('/projects')} className="back-button">
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <div className="project-header">
        <button onClick={() => navigate('/projects')} className="back-button">
          ← Back to Projects
        </button>
        <h1>{project.title}</h1>
        <div className="project-meta">
          <span className="tech-stack">🔧 {project.techStack}</span>
        </div>
      </div>

      <div className="project-content">
        <section className="problem-section">
          <h3>Problem</h3>
          <p>{project.problem}</p>
        </section>

        <section className="approach-section">
          <h3>Approach</h3>
          <p>{project.approach}</p>
        </section>

        <section className="data-section">
          <h3>Data</h3>
          <p>{project.data}</p>
        </section>

        <section className="tools-section">
          <h3>Tools & Why</h3>
          <div className="tools-content">
            {project.tools.split('\n').map((tool, index) => (
              <p key={index}>{tool}</p>
            ))}
          </div>
        </section>

        <section className="steps-section">
          <h3>Steps/Process</h3>
          <p>{project.steps}</p>
        </section>

        <section className="eda-section">
          <h3>EDA</h3>
          <p>{project.eda}</p>
        </section>

        <section className="results-section">
          <h3>Results/Impact</h3>
          <p>{project.results}</p>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
