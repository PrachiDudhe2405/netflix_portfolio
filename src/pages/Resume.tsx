import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  const resumePdfPath = `${process.env.PUBLIC_URL}/Prachi__Dudhe.pdf`;

  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>Prachi Dudhe</h1>
        <div className="resume-contact">
          <span>(979) 721-2564</span>
          <span>pra24@tamu.edu</span>
          <a href="https://www.linkedin.com/in/prachi-dudhe" target="_blank" rel="noopener noreferrer">linkedin.com/in/prachi-dudhe</a>
          <a href="https://prachidudhe2405.github.io/netflix_portfolio/#/browse" target="_blank" rel="noopener noreferrer">Portfolio</a>
          <span>Open to Relocation</span>
        </div>
        <div className="resume-actions">
          
            href={resumePdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-action primary"
          >
            View PDF
          </a>
          
            href={resumePdfPath}
            download="Prachi__Dudhe.pdf"
            className="resume-action secondary"
          >
            Download PDF
          </a>
        </div>
      </header>

      <section>
        <h2>Summary</h2>
        <div className="resume-row">
          <div>
            <p>
              MS in Data Science with 2+ years of experience building agentic AI systems,
              RAG pipelines, and evaluation frameworks. Hands-on with LLM orchestration,
              multi-mode routing, fine-tuning (LoRA/PEFT), and designing evals that measure
              real agent behavior in production.
            </p>
            <p>
              Known for diagnosing non-obvious agent failures and iterating quickly from
              real usage signals to measurable improvements.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <div className="resume-row">
          <div>
            <strong>Texas A&amp;M University</strong> — College Station, TX
            <div>Master of Science in Data Science (ECE Track)</div>
            <div className="meta">GPA: 3.5/4.0 • Aug 2024 – May 2026</div>
          </div>
        </div>
        <div className="resume-row">
          <div>
            <strong>Pune University</strong> — India
            <div>Bachelor of Engineering in Electronics and Telecommunication, Honors in Data Science</div>
            <div className="meta">GPA: 3.8/4.0 • Aug 2018 – May 2022</div>
          </div>
        </div>
      </section>

      <section>
        <h2>Experience</h2>
        <div className="resume-row">
          <div>
            <strong>Graduate Capstone – AgriChat | Texas A&amp;M University - Corpus Christi</strong>
            <div className="meta">Remote, Texas • Aug 2025 – Dec 2025</div>
            <ul>
              <li>Built AgriChat end-to-end: designed a multi-mode agentic query router that switches between structured SQL execution, semantic RAG retrieval, and batch summarization based on inferred user intent — an early prototype of agents that learn what kind of answer a user actually needs.</li>
              <li>Built offline evaluation harness measuring hallucination rate and answer groundedness against retrieved evidence; implemented structured output validation and rejection rules that logged malformed outputs rather than passing them silently downstream.</li>
            </ul>
          </div>
        </div>
        <div className="resume-row">
          <div>
            <strong>Data Science Intern — Sulzer India</strong>
            <div className="meta">Jun 2025 – Jul 2025</div>
            <ul>
              <li>Built a RAG document retrieval system (Python, embeddings, vector search) over 5,000+ technical maintenance records; raised retrieval accuracy by 31% and cut latency from 8.5s to 4.5s via semantic chunking, hybrid retrieval, and caching.</li>
              <li>Designed modular, well-documented pipeline components with explicit optimization trade-offs to support team adoption and future iteration.</li>
            </ul>
          </div>
        </div>
        <div className="resume-row">
          <div>
            <strong>Data Analyst — Tata Consultancy Services India</strong>
            <div className="meta">Oct 2022 – Jul 2024</div>
            <ul>
              <li>Developed custom Infor 4GL extraction scripts within the ERP environment to process complex supply chain metrics; built an ETL pipeline (Oracle → SQL Server staging, nightly Agent jobs) and designed SQL views bridging the ERP's fragmented schema into Power BI dashboards tracking 10+ KPIs — cutting report preparation time by 25%.</li>
              <li>Delivered a vendor spend dashboard against a hard deadline; built a normalisation mapping in Power Query to resolve duplicate records in the Business Partner master table, securing 95% user adoption.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="resume-row">
          <div>
            <strong>Telecom AI Issue Detection System</strong>
            <ul>
              <li>Designed and built a predictive maintenance and fault detection system across three modeling layers: KPI incident detection (Random Forest + SMOTE, 51% recall on 150K time-series rows), complaint signal detection (RoBERTa + zero-shot labeling, 77% recall on 50K records), and capacity utilization forecasting (Random Forest Regression, 14% MAE on 10M rows).</li>
              <li>Diagnosed four non-obvious modeling failures: time-series data leakage (GroupShuffleSplit), majority-class trap causing 0% recall (class weighting), and 34% label noise from keyword heuristics (dual-signal transformer labeling). Deployed as a live Streamlit diagnostic dashboard.</li>
            </ul>
            <div className="meta">Tech: Python, scikit-learn, Random Forest, Time-Series, Anomaly Detection, Streamlit</div>
          </div>
        </div>
        <div className="resume-row">
          <div>
            <strong>Road Lane Overlay: VLM-Guided Generative Restoration</strong>
            <ul>
              <li>Co-developed a restore-detect-repair pipeline recovering lane markings in degraded dashcam frames: dehazing (Dark Channel Prior), CLRerNet lane detection over 62K CULane images, and guided inpainting confined to 6-12px lane-band gap masks.</li>
              <li>Diagnosed why blind inpainting fails on lane geometry (LaMa fills gaps with asphalt texture rather than reconstructing thin high-contrast lines) and drove the switch to Qwen-Image-Edit fine-tuned with LoRA on 900 image pairs, improving FID by 12.3%, lane F1 by 7.1%, and recall by 10.3% over zero-shot.</li>
            </ul>
            <div className="meta">Tech: Python, PyTorch, LoRA, PEFT, CLRerNet, Qwen-Image-Edit, Computer Vision</div>
          </div>
        </div>
        <div className="resume-row">
          <div>
            <strong>CIFAR-10 Image Classification</strong>
            <ul>
              <li>Evaluated three architectures on 60K CIFAR-10 images: baseline CNN (63%), hybrid ResNet-18 + SVM (86%), and ResNet-34 end-to-end (95%).</li>
              <li>Applied saliency maps to validate that improvements reflected genuine feature learning rather than data artifacts. Found that adding FC layers to the baseline worsened performance — the bottleneck was feature quality, not classifier depth.</li>
            </ul>
            <div className="meta">Tech: Python, PyTorch, ResNet-34, ResNet-18, SVM, scikit-learn</div>
          </div>
        </div>
        <div className="resume-row">
          <div>
            <strong>Acing Blackjack with Deep Reinforcement Learning</strong>
            <ul>
              <li>Built a custom Blackjack environment and trained a staged Double DQN agent with curriculum learning across four phases — from single-player to 6-player, 6-deck configuration. Achieved 43.2% win rate matching optimal basic strategy.</li>
              <li>Discovered that reward shaping hurt performance — the agent learned better from sparse win/loss signals alone. Diagnosed through variance and convergence analysis.</li>
            </ul>
            <div className="meta">Tech: Python, PyTorch, Double DQN, Reinforcement Learning, Curriculum Learning</div>
          </div>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
        <ul className="skills-list">
          <li><strong>Agentic AI & LLMs:</strong> LangGraph, LlamaIndex, LangChain, RAG pipelines, agentic orchestration, prompt engineering, fine-tuning (LoRA/PEFT/QLoRA), LLM integration (Groq, Llama 3.3, Ollama), embedding-based search, structured output validation</li>
          <li><strong>Evaluation & Research:</strong> Eval harness design, offline evaluation, hallucination measurement, answer groundedness, agent failure diagnosis, experiment design, A/B testing, hypothesis testing, statistical modeling</li>
          <li><strong>ML & Data Science:</strong> Python (Pandas, NumPy, scikit-learn, PyTorch), SQL, predictive modeling, time-series analysis, anomaly detection, feature engineering, class imbalance handling, model evaluation, deep learning, reinforcement learning</li>
          <li><strong>Data Engineering:</strong> ETL pipelines, semantic chunking, hybrid retrieval, cross-encoder reranking, vector search, SQL views, Oracle to SQL Server pipelines, Git, Linux/Unix</li>
          <li><strong>Tools:</strong> Git, Linux/Unix, Streamlit, Plotly, Power BI</li>
        </ul>
      </section>

      <section>
        <h2>Certifications</h2>
        <ul className="skills-list">
          <li>5G Introductory Certification – Qualcomm Wireless Academy</li>
        </ul>
      </section>

    </div>
  );
};

export default Resume;
