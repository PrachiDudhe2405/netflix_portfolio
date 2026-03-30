import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ExperienceDetail.css';

interface ExperienceDetailData {
  id: string;
  title: string;
  company: string;
  dateRange: string;
  techStack: string;
  summary: string;
  keyAchievements: string[];
  challenges: string[];
  impact: string[];
  learnings: string[];
}

const experienceData: { [key: string]: ExperienceDetailData } = {
  'tamucc-capstone': {
    id: 'tamucc-capstone',
    title: 'Research Data Engineer (Capstone)',
    company: 'Texas A&M University - Corpus Christi',
    dateRange: 'Aug 2025 – Dec 2025',
    techStack: 'Python, Streamlit, LlamaIndex, RAG, SQL, Agricultural Analytics',
    summary: 'This capstone focused on turning agricultural trial reports that were trapped in inconsistent PDFs into a system researchers could actually use for decisions. I built a 3-stage normalization pipeline for the underlying data, then evaluated hybrid query strategies to determine when deterministic SQL and when semantic RAG produced the most reliable answers. The final output was an interactive dashboard that helped research teams compare varieties across counties and years without manually parsing reports.',
    keyAchievements: [
      'Built a 3-stage agricultural data normalization pipeline that reduced malformed records by 30% across 29 PDF reports',
      'Designed a controlled evaluation framework comparing SQL and semantic RAG retrieval paths across different query types',
      'Delivered a Streamlit dashboard with 3 query modes so research teams could use the system for weekly operational decisions'
    ],
    challenges: [
      'Normalizing inconsistent agricultural PDFs with irregular schemas, mixed table formats, and missing metadata',
      'Choosing the right retrieval path for each query type without sacrificing reliability or interpretability',
      'Presenting system outputs in a way non-technical stakeholders could trust and act on'
    ],
    impact: [
      'Made cross-county and cross-year variety comparisons feasible without manual report review',
      'Improved data quality before downstream analytics by reducing malformed records and schema inconsistencies',
      'Helped cross-functional research teams use AI outputs as a decision tool rather than a black-box demo'
    ],
    learnings: [
      'How to evaluate structured and semantic retrieval systems using task-specific reliability criteria',
      'How important schema quality and provenance are in domain-specific RAG systems',
      'How to communicate uncertainty, trade-offs, and evidence grounding to applied research stakeholders'
    ]
  },
  'sulzer-intern': {
    id: 'sulzer-intern',
    title: 'Data Science Intern',
    company: 'Sulzer India',
    dateRange: 'Jun 2025 – Jul 2025',
    techStack: 'Python, PyPDF2, FAISS, all-MiniLM-L6-v2, RAG',
    summary: 'At Sulzer India, I worked on a prototype RAG system for technical PDF search. The core problem was practical: employees were spending too much time manually searching documents for routine operational answers. I built a retrieval pipeline that chunked document text, generated dense embeddings, and indexed them for semantic search, then benchmarked different configurations to find the best balance between retrieval quality and query speed.',
    keyAchievements: [
      'Built a prototype RAG pipeline that chunked 500+ document segments and indexed them in FAISS for semantic retrieval',
      'Benchmarked embedding configurations and chunk sizes to identify the best precision-latency trade-off',
      'Achieved 20–40 ms CPU query response and documented assumptions plus a scalability roadmap for enterprise deployment'
    ],
    challenges: [
      'Choosing chunking and embedding settings that improved relevance without increasing latency',
      'Designing a retrieval pipeline that stayed useful on CPU-only execution',
      'Documenting methodology clearly enough for future productionization decisions'
    ],
    impact: [
      'Reduced the effort needed to search technical PDFs for routine operational questions',
      'Established a benchmarked foundation for future enterprise-scale document retrieval',
      'Provided a methodical evaluation of precision versus latency trade-offs rather than a one-off prototype'
    ],
    learnings: [
      'How to benchmark retrieval systems against real operational constraints',
      'How chunking and embedding choices materially affect both response quality and speed',
      'How to communicate methodology, assumptions, and scale risks for AI systems in enterprise settings'
    ]
  },
  'tcs-developer': {
    id: 'tcs-developer',
    title: 'Data Analyst',
    company: 'Tata Consultancy Services India',
    dateRange: 'Oct 2022 – Jul 2024',
    techStack: 'Python, SQL, Power BI, Tableau, ETL Pipelines',
    summary: 'At Tata Consultancy Services, I focused on giving production and supply-chain teams a more reliable view of operational health. I built ETL pipelines over ERP data, added anomaly detection to catch issues before they affected KPIs, and delivered dashboards that management could actually use. The work centered on making data trustworthy, faster to process, and more actionable across teams.',
    keyAchievements: [
      'Built end-to-end ETL pipelines over enterprise ERP data and added anomaly detection to flag inconsistencies before they distorted KPIs',
      'Delivered Power BI and Tableau dashboards tracking 10+ metrics adopted by management',
      'Optimized complex SQL queries by restructuring joins and indexing, reducing average pipeline runtime by 25%'
    ],
    challenges: [
      'Reconciling cross-system discrepancies across operational datasets',
      'Balancing pipeline speed with data-quality safeguards',
      'Defining metrics that were both technically sound and decision-relevant for business teams'
    ],
    impact: [
      'Created a more trusted reporting foundation for operations and sales teams',
      'Reduced latency in operational reporting and improved visibility into key business metrics',
      'Enabled faster decisions by combining cleaner data pipelines with more usable dashboards'
    ],
    learnings: [
      'How to build analytics systems that business teams trust enough to use regularly',
      'How query optimization and data validation directly improve operational decision quality',
      'How cross-functional metric definition matters as much as the pipeline implementation itself'
    ]
  },
  'tamu-ms': {
    id: 'tamu-ms',
    title: 'M.S. Data Science (ECE Track)',
    company: 'Texas A&M University',
    dateRange: 'Aug 2024 – May 2026',
    techStack: 'Pattern Recognition, Deep Reinforcement Learning, Data Mining & Analysis, Mathematics for Data Science, Machine Learning, Digital Image Processing & Computer Vision, Information Storage & Retrieval',
    summary: 'When I began my Master\'s in Data Science (ECE track) at Texas A&M University, I wanted more than just theory — I wanted to push myself with rigorous coursework while applying what I learned to real AI challenges. The program has given me exactly that balance. It has been both demanding and rewarding, shaping me into someone who can connect abstract concepts to tangible solutions in AI and data science.',
    keyAchievements: [
      'Maintained a GPA of 3.5/4.0 while completing advanced coursework in Pattern Recognition, Deep Reinforcement Learning, Data Mining, Mathematics for Data Science, Machine Learning, Digital Image Processing & Computer Vision, and Information Storage & Retrieval',
      'Applied theoretical knowledge directly to projects, including retrieval-augmented generation pipelines and deep learning model development',
      'Built expertise across both the mathematical foundations and practical implementations of AI/ML systems'
    ],
    challenges: [
      'Balancing heavy theoretical coursework with project-based learning',
      'Mastering advanced mathematical concepts in ML and computer vision',
      'Translating academic insights into solutions for real-world problems',
      'Managing time between coursework, projects, and professional growth'
    ],
    impact: [
      'Developed deep expertise in AI/ML methods at the intersection of theory and practice',
      'Gained practical experience with frameworks like TensorFlow, PyTorch, and FAISS through projects',
      'Prepared for advanced roles in data science by combining technical depth with applied problem-solving',
      'Strengthened ability to bridge academic research and industry applications'
    ],
    learnings: [
      'Advanced algorithms in machine learning and their mathematical foundations',
      'Computer vision and image processing techniques for real-world applications',
      'Deep reinforcement learning and its potential for decision-making systems',
      'Research methodologies and structured academic writing in data science'
    ]
  },
  'pune-be': {
    id: 'pune-be',
    title: 'B.E. Electronics & Telecommunication (Honors in Data Science)',
    company: 'Pune University',
    dateRange: 'Aug 2018 – May 2022',
    techStack: 'Electronics, Programming, Data Science, Machine Learning, Computer Vision, Analytics',
    summary: 'During my undergraduate studies at Pune University, I pursued a B.E. in Electronics & Telecommunication while also completing an Honors program in Data Science. Balancing both tracks pushed me to master traditional electronics concepts while exploring the fast-evolving world of programming, analytics, and machine learning. It was here that I realized my passion for AI/ML — I enjoyed building projects that combined hardware knowledge with data-driven insights, and this interdisciplinary experience ultimately shaped my decision to specialize further in data science.',
    keyAchievements: [
      'Graduated with a GPA of 3.8/4.0 while completing coursework in both electronics and data science',
      'Earned Honors in Data Science alongside the core engineering curriculum',
      'Completed projects introducing me to machine learning, computer vision, and analytics',
      'Built a strong foundation across hardware systems, programming, and applied data science'
    ],
    challenges: [
      'Managing dual coursework in electronics and data science simultaneously',
      'Learning programming and advanced analytics while mastering circuit design and electronics fundamentals',
      'Finding ways to integrate hardware knowledge with data science applications',
      'Deciding to pivot toward a specialization in AI/ML despite a traditional electronics background'
    ],
    impact: [
      'Developed a unique interdisciplinary perspective at the intersection of hardware and data science',
      'Gained practical experience in software development and analytics alongside hardware projects',
      'Strengthened analytical and problem-solving skills, enabling me to tackle diverse technical challenges',
      'Built a strong foundation that supported my transition into advanced studies in AI/ML and data science'
    ],
    learnings: [
      'Core electronics principles and circuit design',
      'Programming fundamentals and software development',
      'Introductory machine learning and data analysis techniques',
      'Project management and problem-solving in technical environments'
    ]
  }
};

const ExperienceDetail: React.FC = () => {
  const { experienceId } = useParams<{ experienceId: string }>();
  const navigate = useNavigate();

  const experience = experienceId ? experienceData[experienceId] : null;

  if (!experience) {
    return (
      <div className="experience-detail-container">
        <div className="experience-not-found">
          <h1>Experience Not Found</h1>
          <p>The requested experience could not be found.</p>
          <button onClick={() => navigate('/work-experience')} className="back-button">
            Back to Experience
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="experience-detail-container">
      <div className="experience-header">
        <button onClick={() => navigate('/work-experience')} className="back-button">
          ← Back to Experience
        </button>
        <h1>{experience.title}</h1>
        <h2>{experience.company}</h2>
        <div className="experience-meta">
          <span className="date-range">{experience.dateRange}</span>
          <span className="tech-stack">🔧 {experience.techStack}</span>
        </div>
      </div>

      <div className="experience-content">
        <section className="summary-section">
          <h3>Overview</h3>
          <p>{experience.summary}</p>
        </section>

        <section className="achievements-section">
          <h3>Key Achievements</h3>
          <ul>
            {experience.keyAchievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section>

        <section className="challenges-section">
          <h3>Challenges Overcome</h3>
          <ul>
            {experience.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </section>

        <section className="impact-section">
          <h3>Impact & Results</h3>
          <ul>
            {experience.impact.map((impact, index) => (
              <li key={index}>{impact}</li>
            ))}
          </ul>
        </section>

        <section className="learnings-section">
          <h3>Key Learnings</h3>
          <ul>
            {experience.learnings.map((learning, index) => (
              <li key={index}>{learning}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ExperienceDetail;
