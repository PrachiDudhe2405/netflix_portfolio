import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

interface ProjectDetailData {
  id: string;
  title: string;
  proofLinks?: { label: string; url: string }[];
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
  'blackjack-drl': {
    id: 'blackjack-drl',
    title: 'Acing Blackjack with Deep Reinforcement Learning',
    proofLinks: [
      { label: 'GitHub', url: 'https://github.com/shreyamuppidi/Blackjack-DRL.git' },
      { label: 'Demo', url: 'https://youtu.be/VRfSG4gUUeE?si=yQqjgXve_Ee8EEix' },
      { label: 'Paper', url: `${process.env.PUBLIC_URL}/DRL_paper.pdf` }
    ],
    problem: 'Blackjack is a stochastic sequential-decision problem with partial observability, sparse terminal rewards, and branching consequences from actions like split and double. The project aimed to learn strong playing policies directly from experience across increasingly complex settings, rather than hard-coding basic strategy tables.',
    approach: 'Built a custom Blackjack simulator and trained a curriculum-based Double DQN agent from simple single-player games to six-player, six-deck games. The system used experience replay, target networks, dynamic legal-action masking, transfer learning across compatible stages, and count-aware state features to study strategic learning, card counting, and multiplayer scaling.',
    data: 'No external dataset was required. Training data was generated through self-play in a custom Blackjack environment supporting 1 to 6 players, 1 to 8 decks, automatic reshuffling, Hi-Lo running and true counts, and legal actions including hit, stand, split, and double down. The state vector scaled from 11 dimensions in single-player mode to 21 dimensions in the final six-player setup.',
    tools: 'Custom Python Blackjack environment: modeled deck configuration, reshuffling, multi-player flow, and action validation.\nDouble DQN: reduced Q-value overestimation by separating action selection and target evaluation across online and target networks.\n3-layer MLP: used hidden layers [640, 320, 128] with ReLU and LayerNorm to approximate Q-values for hit, stand, split, and double.\nExperience replay + target network: stabilized learning under sparse rewards and stochastic transitions.\nCurriculum training: staged complexity across deck count and player count to avoid catastrophic failure when scaling directly to the hardest setting.',
    steps: 'Implemented a custom Blackjack environment with configurable decks, Hi-Lo counting, and multi-player support.\nDesigned an 11-dimensional single-player state vector and extended it with opponent features for multi-player scenarios.\nTrained a Phase 1 single-player, single-deck agent from scratch for 150,000 episodes to learn core basic strategy.\nFine-tuned the model in Stage 2 on a six-deck shoe with counting features, then expanded to Stage 3 multi-player training with transfer learning.\nTrained the final Stage 4 six-player, six-deck model from scratch over 400,000 episodes with a larger replay buffer and learning-rate scheduling after earlier scaling failures.',
    eda: 'Compared reward-shaping against sparse terminal rewards and found that shaped rewards led to a suboptimal 32 to 35 percent win-rate plateau by optimizing heuristics rather than long-term return. The team also analyzed stage-wise win rates, average reward, action distributions, and whether the agent learned core Blackjack principles such as standing on strong totals, doubling in advantageous spots, and using split selectively.',
    results: 'Phase 1 reached a 43.2% win rate after 150,000 episodes, matching the target 42 to 44 percent basic-strategy range, with a final greedy evaluation reward of +0.028 per episode. In the final six-player, six-deck Stage 4 setting, the agent completed 3,015,534 training steps across 400,000 episodes and achieved a 38.0% win rate, 53.5% loss rate, 8.5% draw rate, and evaluation reward of -0.201 +/- 1.040. The model learned a conservative but competitive multiplayer policy, using stand 76.4% of the time while still applying splits (2.3%) and doubles (0.7%) in favorable situations.',
    techStack: 'Python, Double DQN, MLP Q-Networks, Experience Replay, Target Networks, Hi-Lo Counting'
  },
  'road-lane-overlay': {
    id: 'road-lane-overlay',
    title: 'Road Lane Overlay: Generative Restoration of Lane Markings in Dashcam Footage',
    proofLinks: [
      { label: 'Paper', url: `${process.env.PUBLIC_URL}/GenAI_Paper.pdf` }
    ],
    problem: 'Lane markings are thin, high-frequency features that disappear first under motion blur, worn paint, glare, rain or fog, and night scenes. Direct lane detectors on degraded frames often produce fragmented lanes or missed markings, which destabilizes downstream planning in driver-assistance and autonomous-driving systems.',
    approach: 'Built a lane-aware restore -> detect -> repair pipeline. First, a Dark Channel Prior visibility-boost stage optionally dehazes or derains the frame. Next, CLRerNet extracts confidence-calibrated lane polylines, which are expanded into 6-12 px lane-band masks and reduced to sparse gap masks. Instead of blind inpainting, the final system fine-tunes Qwen-Image-Edit-2509 with green CLRerNet overlays and text prompts to repaint realistic white/yellow lane markings only inside missing segments.',
    data: 'Used the CULane dashcam dataset across nine test categories including normal, crowded, dazzle, no-line, shadow, arrow, cross, curve, and night scenes. The restoration model was fine-tuned on 900 paired images built from CLRerNet visualizations as inputs and original CULane frames as targets, with additional self-modified blurred and occluded CULane samples used to stress-test the detection stage.',
    tools: 'Dark Channel Prior (DCP): lightweight dehazing and contrast recovery for thin lane paint under fog, rain, and low-light conditions.\nCLRerNet: confidence-calibrated lane detector used to extract lane polylines and generate localized lane-band/gap masks.\nLaMa: evaluated as an early baseline for blind inpainting, but rejected because it filled masked regions with asphalt texture instead of lane paint.\nQwen-Image-Edit-2509 + LoRA: fine-tuned generative editor conditioned on green lane overlays and text prompts for semantically correct lane reconstruction.\nAI-Toolkit / ComfyUI: used for LoRA training and controlled inference with fixed prompts, sampler settings, and reproducible seeds.',
    steps: 'Applied optional DCP dehazing or deraining to improve visibility and generate a transmission depth hint.\nRan CLRerNet on cleaned frames using the public CULane setup to extract lane centerlines with confidence scores.\nExpanded centerlines into 6-12 px lane bands and sampled 20-50 point synthetic gaps over about 30% of each lane arc length to localize edits.\nGenerated a bright green lane overlay as the control image for the editor so geometry stayed aligned with detected lanes.\nFine-tuned Qwen-Image-Edit-2509 with LoRA for 3000 steps on 900 paired images, then compared zero-shot vs fine-tuned outputs using image-quality and lane-preservation metrics.',
    eda: 'Measured whether edits stayed confined to narrow lane bands, tracked lane generation success across original and degraded CULane variants, and compared zero-shot versus fine-tuned generations with FID, LPIPS, SSIM, precision, recall, and F1. The analysis also surfaced a key failure mode: blind inpainting models like LaMa naturally extend surrounding asphalt texture, which makes them poorly matched to reconstructing narrow, high-contrast lane markings.',
    results: 'On 100 evaluation images, fine-tuning improved FID from 34.54 to 30.28 (+12.3%), improved lane F1 from 0.6733 to 0.7214 (+7.1%), improved precision from 0.7355 to 0.7619 (+3.6%), and improved recall from 0.6208 to 0.6850 (+10.3%). In the detection stage, the pipeline generated lanes on 54,809 of 62,532 CULane images (87.6%), plus 88.5% of blurred and 89.8% of occluded self-modified CULane images. These results showed that prompt-guided generative restoration can recover missing lane structure without materially harming overall image fidelity.',
    techStack: 'Python, Dark Channel Prior, CLRerNet, Qwen-Image-Edit-2509, LoRA, AI-Toolkit, ComfyUI'
  },
  'agrichat': {
    id: 'agrichat',
    title: 'AgriChat: A Hybrid Structured-Unstructured RAG System for Automated Analysis of Agricultural Variety Trial Reports',
    proofLinks: [
      { label: 'GitHub', url: 'https://github.com/PrachiDudhe2405/AgriChat' },
      { label: 'Paper', url: `${process.env.PUBLIC_URL}/STAT_683_AgriChat.pdf` }
    ],
    problem: 'Agricultural trial reports are mostly published as heterogeneous PDFs containing mixed narrative text, irregular tables, inconsistent headers, and region-specific metadata. That makes cross-county and cross-year comparison of cotton variety performance slow, manual, and error-prone for agronomists and breeders.',
    approach: 'Built an end-to-end hybrid RAG system that converts raw PDF trial reports into both normalized structured rows and semantically searchable text blocks. The system uses rule-based intent routing to choose between structured SQL analysis for deterministic numeric comparisons and semantic retrieval plus LLM reasoning for open-ended questions, keeping outputs grounded in source evidence.',
    data: 'The paper evaluates AgriChat on a corpus of 29 Texas cotton variety trial reports spanning multiple counties and growing seasons. The pipeline extracts page-level text blocks, tables, provenance metadata, and reconstructed fields such as variety, county, year, yield, turnout, micronaire, length, strength, uniformity, loan value, and lint value.',
    tools: 'PDFMiner + optional Camelot/Tabula extraction: parse page text, tables, and layout metadata from heterogeneous trial PDFs.\nNormalization pipeline: promotes headers, aligns schema, cleans entities, validates numeric fields, and reconstructs missing county or region metadata.\nBGE-small-en-v1.5 embeddings + LlamaIndex: serialize structured rows and text blocks into natural-language sentences and index them in a persistent vector store.\nSupabase PostgreSQL + SQL routing: handle explicit variety/county/year comparison queries deterministically over structured fields.\nStreamlit + Groq-accelerated Llama 3.3: provide an interactive UI, semantic RAG responses, and batch summarization with low-latency generation.',
    steps: 'Parsed each PDF into page-level JSON containing text blocks, tables, and provenance metadata.\nFlattened extracted content into a bronze layer where each row represented one text block or one table.\nNormalized tables into a silver layer by promoting headers, detecting metric columns with regex, cleaning numeric values, and standardizing entities.\nSerialized both structured rows and narrative text into concise natural-language records, embedded them with BGE-small-en-v1.5, and stored them in a persistent LlamaIndex vector store.\nRouted user queries through structured SQL mode, batch summarization mode, or semantic RAG mode inside a Streamlit interface backed by Groq-accelerated Llama 3.3.',
    eda: 'The evaluation focused on extraction robustness, normalization success, retrieval reliability, groundedness, and interactive latency. The paper tracks how many rows survive schema validation, whether explicit county-year-variety comparisons are resolved deterministically through SQL, whether generated responses stay grounded in retrieved evidence, and whether end-to-end performance remains interactive over the 29-document corpus.',
    results: 'The paper reports high retrieval consistency and successful resolution of comparison queries across multiple counties and years. It concludes that combining structured normalization with unstructured RAG improves interpretability, reduces hallucination, and enables accurate cross-county and cross-year agronomic comparisons while keeping response times within interactive bounds over the full corpus.',
    techStack: 'Python, PDFMiner, Camelot/Tabula, BGE-small-en-v1.5, LlamaIndex, Supabase PostgreSQL, Streamlit, Groq, Llama 3.3'
  },
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
    proofLinks: [
      { label: 'Live Demo', url: 'https://ecencifar10project.netlify.app' }
    ],
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
        {project.proofLinks && project.proofLinks.length > 0 && (
          <div className="project-proof-actions">
            {project.proofLinks.map((proof, index) => (
              <a
                key={index}
                href={proof.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-proof-action"
              >
                {proof.label}
              </a>
            ))}
          </div>
        )}
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
