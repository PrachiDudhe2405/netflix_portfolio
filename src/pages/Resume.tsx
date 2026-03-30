import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  const resumePdfPath = `${process.env.PUBLIC_URL}/Prachi_Dudhe_Resume.pdf`;

  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>Prachi Hemant Dudhe</h1>
        <div className="resume-contact">
          <span>(979) 721-2564</span>
          <span>pra24@tamu.edu</span>
          <a href="https://www.linkedin.com/in/prachi-dudhe" target="_blank" rel="noopener noreferrer">linkedin.com/in/prachi-dudhe</a>
          <a href="https://prachidudhe2405.github.io/netflix_portfolio/#/browse" target="_blank" rel="noopener noreferrer">Portfolio</a>
          <span>College Station, TX</span>
        </div>
        <div className="resume-actions">
          <a
            href={resumePdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-action primary"
          >
            View PDF
          </a>
          <a
            href={resumePdfPath}
            download="Prachi_Dudhe_Resume.pdf"
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
              Data Scientist with hands-on experience designing experiments, analyzing results under uncertainty,
              and translating statistical findings into clear decisions.
            </p>
            <p>
              Built and evaluated AI systems with benchmarked quality metrics, applied hypothesis-test-iterate cycles
              to diagnose and fix model failures, and communicated trade-offs clearly to non-technical stakeholders.
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
            <strong>Research Data Engineer (Capstone) — Texas A&amp;M University - Corpus Christi</strong>
            <div className="meta">Texas • Aug 2025 – Dec 2025</div>
            <ul>
              <li>Agricultural trial data was siloed across 29 inconsistent PDFs with no standardized schema, making variety comparisons impossible; built a 3-stage data normalization pipeline for agricultural trial data, reducing malformed records by 30%.</li>
              <li>Designed and benchmarked a controlled evaluation framework for a hybrid query system, comparing SQL and semantic RAG approaches across query types to identify the most reliable method for each use case.</li>
              <li>Translated system outputs into actionable recommendations for 3 cross-functional research teams via an interactive Streamlit dashboard with 3 query modes, communicating trade-offs and uncertainty clearly so teams could drive weekly operational decisions rather than just consume reports.</li>
            </ul>
          </div>
        </div>
        <div className="resume-row">
          <div>
            <strong>Data Science Intern — Sulzer India</strong>
            <div className="meta">Jun 2025 – Jul 2025</div>
            <ul>
              <li>Employees were spending hours manually searching through technical PDFs to answer routine operational questions; built a prototype RAG pipeline using PyPDF2 to chunk 500+ document segments, generate all-MiniLM-L6-v2 embeddings (384-dim), and index them in FAISS for semantic retrieval.</li>
              <li>Benchmarked retrieval performance across embedding configurations and chunk sizes to find the optimal trade-off between precision and latency, achieving 20-40 ms query response on CPU and documenting methodology, assumptions, and a scalability roadmap for enterprise deployment.</li>
            </ul>
          </div>
        </div>
        <div className="resume-row">
          <div>
            <strong>Data Analyst — Tata Consultancy Services India</strong>
            <div className="meta">Oct 2022 – Jul 2024</div>
            <ul>
              <li>Production and supply chain teams had no reliable, automated view of operational health; built end-to-end ETL pipelines extracting and transforming enterprise ERP data, implemented statistical anomaly detection to flag data inconsistencies before they distorted KPIs, and delivered Power BI and Tableau dashboards tracking 10+ metrics adopted by management.</li>
              <li>Optimized complex SQL queries by restructuring joins and indexing, reducing average pipeline runtime by 25%.</li>
              <li>Partnered with Operations and Sales to define decision-critical metrics, resolve cross-system discrepancies, and create a trusted reporting foundation for faster operational and business decisions.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="resume-row">
          <div>
            <strong>Acing Blackjack - Controlled Experimentation and Model Evaluation</strong>
            <ul>
              <li>Standard reward shaping was producing a 10-point performance gap vs. optimal strategy; diagnosed the failure through variance and convergence analysis (32-35% vs. target 42-44%), identified reward hacking as root cause, redesigned to sparse terminal rewards, and validated full recovery to 43.2%.</li>
              <li>Designed and analyzed controlled experiments across learning rate, replay buffer, and update frequency to quantify their effect on policy stability and performance across 400,000+ training episodes.</li>
              <li>Built a staged training curriculum to reduce catastrophic forgetting and improve transfer across training phases.</li>
            </ul>
            <div className="meta">Tech: Python, PyTorch, Double DQN</div>
          </div>
        </div>
        <div className="resume-row">
          <div>
            <strong>Road Lane Overlay - Model Comparison and Evaluation</strong>
            <ul>
              <li>Improved lane reconstruction performance by testing a semantically guided editing approach, increasing F1 by 7.1% and improving FID by 12.3%.</li>
              <li>Fine-tuned Qwen-Image-Edit with LoRA adapters to restore missing lane markings using control overlays for geometric guidance.</li>
              <li>Processed 62,532 road images with CLRerNet to generate lane masks and limit edits only to missing-lane regions.</li>
            </ul>
            <div className="meta">Tech: Python, PyTorch, CLRerNet, Qwen-Image-Edit, LoRA</div>
          </div>
        </div>
        <div className="resume-row">
          <div>
            <strong>Fitbit Health Analytics - Statistical Analysis and Insight Generation</strong>
            <ul>
              <li>Conducted statistical analysis and controlled comparisons on 10,000+ time-series health records to identify behavioral patterns and evaluate changes across key metrics.</li>
              <li>Delivered an interactive dashboard framing findings as decisions with uncertainty acknowledged, designed for both technical analysts and non-technical stakeholders to explore results independently.</li>
            </ul>
            <div className="meta">Tech: Python, Pandas, SQL, Plotly</div>
          </div>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
        <ul className="skills-list">
          <li><strong>Experimentation & Statistics:</strong> A/B testing, controlled experiments, hypothesis testing, effect size, variance analysis, anomaly detection, statistical EDA, metric selection, causal reasoning</li>
          <li><strong>ML & Decision Science:</strong> scikit-learn, PyTorch, regression, classification, reinforcement learning, model evaluation, feature engineering</li>
          <li><strong>AI-Enabled Analytics:</strong> RAG pipelines, LlamaIndex, FAISS, semantic embeddings, LLM integration, retrieval quality benchmarking</li>
          <li><strong>Data Engineering:</strong> Python (Pandas, NumPy), SQL, ETL pipelines, schema validation, data quality monitoring, Git</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
