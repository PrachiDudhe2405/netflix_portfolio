import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>Prachi Hemant Dudhe</h1>
        <div className="resume-contact">
          <span>(979) 721-2564</span>
          <span>pra24@tamu.edu</span>
          <a href="https://www.linkedin.com/in/prachi-dudhe" target="_blank" rel="noopener noreferrer">linkedin.com/in/prachi-dudhe</a>
          <span>Texas, USA</span>
        </div>
      </header>

      <section>
        <h2>Education</h2>
        <div className="resume-row">
          <div>
            <strong>Texas A&M University</strong> — College Station, TX
            <div>Master of Science in Data Science (Electrical & Computer Engineering Track)</div>
            <div className="meta">GPA: 3.33/4 • Aug 2024 – May 2026</div>
            <div className="sub">Courses: Pattern Recognition, Machine Learning, Digital Image Processing & Computer Vision, Reinforcement Learning</div>
          </div>
        </div>
        <div className="resume-row">
          <div>
            <strong>Pune University</strong>
            <div>B.E. Electronics & Telecommunication (Honors in Data Science)</div>
            <div className="meta">GPA: 3.6/4 • Aug 2018 – May 2022</div>
          </div>
        </div>
      </section>

      <section>
        <h2>Experience</h2>
        <div className="resume-row">
          <div>
            <strong>Data Science Intern — Sulzer</strong>
            <div className="meta">Jun 2025 – Jul 2025</div>
            <ul>
              <li>Designed and deployed a Retrieval-Augmented Generation (RAG) pipeline to make 24,000+ engineering and technical documents instantly searchable using Python, FAISS, and LLM embeddings.</li>
              <li>Improved retrieval precision by 31% and cut query response time by 47%, enabling engineers to quickly find accurate answers without manually scanning PDFs.</li>
              <li>Partnered with IT to map 10+ internal systems in SAP LeanIX for better enterprise visibility and managed secure access for engineering teams through M-Files, ensuring compliance with internal standards.</li>
            </ul>
          </div>
        </div>
        <div className="resume-row">
          <div>
            <strong>Software Developer — Tata Consultancy Services</strong>
            <div className="meta">Oct 2022 – Jul 2024</div>
            <ul>
              <li>Built and optimized ETL pipelines in Python and SQL to ensure enterprise data quality, reducing false alerts by 30%.</li>
              <li>Automated Power BI dashboards that cut manual reporting by half and enabled faster decision-making across teams.</li>
              <li>Improved workflow efficiency by reducing preprocessing time by 40% through testing and root-cause analysis.</li>
              <li>Contributed to Agile sprints that improved transparency and shortened decision cycles.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="resume-row">
          <div>
            <strong>TalentSync – AI Resume Matching & Career Path Prediction</strong>
            <ul>
              <li>Developed resume–job matcher with SentenceTransformers + FAISS, enabling semantic candidate search (~85% relevance).</li>
              <li>Added Flan‑T5 RAG explanations to improve recruiter trust in match results.</li>
              <li>Built career prediction models (RandomForest/XGBoost) achieving ~80% accuracy.</li>
              <li>Delivered as an interactive Streamlit app for end‑to‑end recruiter workflow.</li>
            </ul>
            <div className="meta">Tech: Python, Streamlit, FAISS, SentenceTransformers, scikit‑learn, XGBoost, Flan‑T5</div>
          </div>
        </div>
        <div className="resume-row">
          <div>
            <strong>CIFAR‑10 Image Classification</strong>
            <ul>
              <li>Implemented CNN, ResNet‑18+SVM, and ResNet‑34 models on the CIFAR‑10 dataset.</li>
              <li>Improved accuracy from 63% (CNN) → 95% (ResNet‑34) through tuning and augmentation.</li>
              <li>Applied saliency maps & PCA for model interpretability.</li>
            </ul>
            <div className="meta">Tech: Python, PyTorch, ResNet, SVM</div>
          </div>
        </div>
        <div className="resume-row">
          <div>
            <strong>YOLOv8 Traffic & Pedestrian Monitoring</strong>
            <ul>
              <li>Built YOLOv8x object detection pipeline to track vehicles and pedestrians in video streams.</li>
              <li>Detected 761 vehicles + 326 pedestrians across ~180 frames.</li>
              <li>Aggregated results into time‑series traffic analytics using Pandas/Matplotlib.</li>
            </ul>
            <div className="meta">Tech: Python, YOLOv8, OpenCV, Pandas, Matplotlib</div>
          </div>
        </div>
        <div className="resume-row">
          <div>
            <strong>Interactive Fitness Dashboard — JavaScript & Vega‑Lite</strong>
            <ul>
              <li>Designed and developed responsive dashboards (JavaScript, Vega‑Lite, HTML/CSS) to showcase Fitbit metrics across daily, weekly, and monthly timeframes.</li>
              <li>Integrated MongoDB (JSON) data to benchmark personal stats against top performers across daily/weekly/monthly views.</li>
              <li>Applied ML‑based imputation for missing data, improving dashboard reliability and trend insights accuracy by 20%.</li>
              <li>Built interactive charts (line, radial, bar, area) with dynamic filters for real‑time benchmarking and higher user engagement.</li>
            </ul>
            <div className="meta">Tech: JavaScript, Vega‑Lite, HTML/CSS, MongoDB</div>
          </div>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
        <ul className="skills-list">
          <li><strong>Programming & Scripting:</strong> Python (Pandas, NumPy, scikit‑learn, TensorFlow), SQL, JavaScript, R, C/C++, Bash, HTML/CSS</li>
          <li><strong>ETL & Analytics:</strong> Extract Transform Load (ETL), Exploratory Data Analysis (EDA), Cleaning, Feature Engineering, Anomaly Detection, Predictive Modeling, Data QA</li>
          <li><strong>ML & AI:</strong> LLMs, RAG, Embedding, Natural Language Processing (NLP), Retrieval, Transformers, BERT, Convolutional Neural Network (CNNs), ResNet, YOLOv8, Support Vector Machine (SVM), Principal Component Analysis (PCA), Hyperparameter Tuning, OpenCV</li>
          <li><strong>Tools & Platforms:</strong> FAISS, OpenAI/DeepSeek APIs, Snowflake, Power BI, Tableau, MongoDB, SAP LeanIX, M‑Files, Streamlit, Git, Docker, Linux, Excel</li>
          <li><strong>Workflow & Soft Skills:</strong> Agile/Scrum, Technical Leadership, UX Design Thinking, Cross‑functional Collaboration, Stakeholder Engagement, Communication</li>
        </ul>
      </section>

      <section>
        <h2>Certifications</h2>
        <ul>
          <li>5G Introductory Certification — Qualcomm Wireless Academy</li>
          <li>Intermediate SQL / Joining Data in SQL — DataCamp</li>
          <li>Advanced C Programming & Unix Internals — Uttara Computers</li>
        </ul>
      </section>

      <section>
        <h2>Leadership</h2>
        <div className="resume-row">
          <div>
            <strong>Head — Cultural Department, Alacrity College Fest (3,000+ attendees, 30 volunteers)</strong>
            <ul>
              <li>Drove event planning, sponsorship, logistics, and introduced a structured attendee feedback system.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;


