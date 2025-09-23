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
    problem: 'Urban planners and traffic engineers need reliable data on congestion and pedestrian flow, but manual video review is tedious and inefficient. Existing traffic sensors are often expensive, fixed in place, and limited in what they measure. I wanted to explore how computer vision could automatically extract vehicle and pedestrian counts from video streams and convert them into analytics for decision-making.',
    approach: 'I applied YOLOv8x, a state-of-the-art object detection model, to identify vehicles and pedestrians in surveillance video frames. After detection, I aggregated the results into structured time-series data to study trends in congestion and pedestrian activity.',
    data: 'Traffic surveillance videos sampled at 1 frame per second, giving ~180 analyzed frames per video segment.\nClasses of interest: cars, buses, trucks, motorcycles, bicycles, and pedestrians.',
    tools: 'YOLOv8x (Ultralytics): chosen for high accuracy and pretrained COCO weights that include vehicle and pedestrian classes.\nOpenCV: to extract frames, preprocess images, and feed them to YOLOv8.\nPandas: to store detection outputs in tabular format for aggregation.\nMatplotlib: for visualizing time-series traffic and pedestrian patterns.',
    steps: 'Frame extraction: Used OpenCV to sample each video at 1 fps to balance accuracy with runtime efficiency.\nDetection: Passed each frame through YOLOv8x, outputting bounding boxes, class labels, and confidence scores.\nData structuring: Collected detection counts in Pandas DataFrames, indexed by frame and timestamp.\nAggregation: Summed counts across frames to track total vehicles/pedestrians and calculated per-minute averages.\nVisualization: Generated line charts and stacked bar plots to highlight changes in traffic density and pedestrian flow over time.',
    eda: 'Compared frequency distributions of different vehicle types (cars vs buses vs trucks).\nCorrelated pedestrian counts with peak vehicle counts to spot potential conflict periods.\nChecked YOLOv8 confidence thresholds (e.g., 0.5 vs 0.7) to balance precision and recall.\nInspected bounding box overlaps to ensure accurate pedestrian detection in crowded scenes.',
    results: 'Detected 761 vehicles and 326 pedestrians across ~180 frames, with clear peaks during high-traffic intervals.\nIdentified temporal patterns such as evening vehicle surges and steady midday pedestrian flow.\nDemonstrated how object detection + analytics can replace manual counting and supplement fixed sensors.\nHighlighted potential applications in urban planning, smart city monitoring, and pedestrian safety analysis.',
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
    title: 'Interactive Fitness Dashboard',
    problem: 'Fitbit devices generate rich health and activity data, but raw JSON exports are messy, hard to interpret, and not engaging for everyday users. Most people want quick, visual insights — not rows of data. My goal was to build an interactive dashboard that could unify data streams, handle missing values intelligently, and present health insights in a fun, intuitive way.',
    approach: 'I created a dashboard that combined data visualization with machine learning-based imputation for missing values. The idea was to provide clean, reliable health trends while keeping the experience interactive and visually appealing.',
    data: 'Fitbit JSON exports (steps, calories, heart rate, sleep patterns).\nStored and managed using MongoDB for efficient querying of semi-structured data.',
    tools: 'JavaScript + Vega-Lite: chosen for interactive, declarative charting that makes complex trends easy to explore.\nMongoDB: ideal for handling semi-structured JSON from Fitbit exports.\nML regression models: to impute missing values and ensure trend accuracy.',
    steps: 'Data ingestion: Loaded Fitbit JSON into MongoDB collections for structured access.\nCleaning & standardization: Normalized timestamps, units, and categories across data streams.\nImputation: Trained regression models to predict missing values (e.g., steps on incomplete days), improving reliability by ~20%.\nVisualization design: Built interactive charts including:\nRadial plots for daily activity.\nStacked bar charts for calorie breakdowns.\nHeatmaps for sleep cycles.\nLine charts for heart rate and step trends.\nUser experience: Designed multiple views — daily, weekly, and monthly — so users could zoom in or out of their activity trends.',
    eda: 'Explored correlations between step count, calories burned, and sleep duration.\nIdentified systematic missing data (e.g., incomplete logging during device downtime).\nValidated imputed values against real subsets (~97% accuracy).',
    results: 'Boosted data reliability by 20% through intelligent imputation.\nEnabled users to explore health trends interactively rather than passively viewing static reports.\nTransformed raw, messy Fitbit logs into an engaging health dashboard, making wellness tracking more actionable and motivating.\nProvided a reusable framework that could be extended to other wearable datasets.',
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
