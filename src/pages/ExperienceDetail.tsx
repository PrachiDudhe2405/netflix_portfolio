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
  'sulzer-intern': {
    id: 'sulzer-intern',
    title: 'Data Science Intern',
    company: 'Sulzer',
    dateRange: 'Jun 2025 – Jul 2025',
    techStack: 'Python, FAISS, LLM embeddings, SAP LeanIX, M-Files',
    summary: 'During my Data Science internship at Sulzer, I took on the challenge of helping engineers who often had to dig through thousands of technical PDFs just to find a single answer. My goal was to make that knowledge accessible in seconds instead of hours. I led the development of a Retrieval-Augmented Generation (RAG) pipeline that transformed 24,000+ documents into an instantly searchable knowledge base. Along the way, I also worked with IT to map internal systems in SAP LeanIX and set up secure access in M-Files, making sure information was not only easy to find but also safely managed.',
    keyAchievements: [
      'Designed and deployed a RAG pipeline using Python, FAISS, and LLM embeddings, boosting retrieval precision by 31% and reducing query response time by 47%',
      'Partnered with IT to map 10+ internal systems in SAP LeanIX, improving enterprise-wide visibility',
      'Managed secure access for engineering teams through M-Files, ensuring compliance with internal standards'
    ],
    challenges: [
      'Ensured the RAG pipeline could handle large-scale document processing without latency issues',
      'Balanced semantic search accuracy with query efficiency to meet real-world usage needs',
      'Integrated AI solutions securely within an enterprise environment with strict compliance requirements'
    ],
    impact: [
      'Transformed 24,000+ static PDFs into a searchable knowledge base, cutting manual search times from hours to seconds',
      'Streamlined technical decision-making by providing engineers with accurate, instant answers',
      'Demonstrated how advanced AI can be scaled securely in industrial settings, paving the way for future adoption'
    ],
    learnings: [
      'Gained hands-on experience in deploying RAG pipelines and working with semantic embeddings for real-world enterprise applications',
      'Learned the importance of aligning AI performance with both technical and business requirements',
      'Understood how compliance and security must be integrated into AI workflows for successful adoption in industrial environments'
    ]
  },
  'tcs-developer': {
    id: 'tcs-developer',
    title: 'Software Developer',
    company: 'Tata Consultancy Services',
    dateRange: 'Oct 2022 – Jul 2024',
    techStack: 'Python, SQL, Power BI, ETL Pipelines, Agile/Scrum',
    summary: 'At Tata Consultancy Services, I learned firsthand how even small inefficiencies in data workflows can ripple into big business delays. My role was to make data cleaner, faster, and easier to use. I built ETL pipelines in Python and SQL that cut down false alerts, designed dashboards in Power BI that made insights available in minutes instead of hours, and optimized workflows so teams could spend more time acting on data rather than waiting for it to process. Working in Agile sprints taught me how collaboration fuels transparency and speed, and it showed me the impact of technical solutions when they\'re closely tied to business outcomes.',
    keyAchievements: [
      'Built ETL pipelines in Python and SQL to process and validate enterprise datasets, reducing false alerts by 30% and strengthening data accuracy',
      'Designed automated Power BI dashboards that cut manual reporting time by 50% and delivered faster insights to stakeholders',
      'Optimized ETL workflows through testing and root-cause analysis, reducing preprocessing time by 40%',
      'Contributed in Agile sprints, enhancing transparency and shortening decision cycles by 25%'
    ],
    challenges: [
      'Balancing data accuracy with processing efficiency while designing ETL pipelines',
      'Ensuring dashboards met the needs of both technical and non-technical users',
      'Identifying bottlenecks in existing workflows and implementing scalable fixes'
    ],
    impact: [
      'Strengthened trust in enterprise data by improving data quality and reducing errors',
      'Accelerated reporting and decision-making, allowing teams to act faster on insights',
      'Streamlined workflows, cutting down redundant processes and saving operational time',
      'Fostered stronger collaboration across teams through Agile practices'
    ],
    learnings: [
      'Learned how to design data pipelines that balance accuracy, scalability, and performance',
      'Gained experience in presenting complex data through intuitive dashboards',
      'Understood how collaborative frameworks like Agile drive both speed and transparency in large projects',
      'Developed a deeper appreciation for the role of data reliability in business decision-making'
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
      'Maintained a GPA of 3.33/4 while completing advanced coursework in Pattern Recognition, Deep Reinforcement Learning, Data Mining, Mathematics for Data Science, Machine Learning, Digital Image Processing & Computer Vision, and Information Storage & Retrieval',
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
      'Graduated with a GPA of 3.6/4 while completing coursework in both electronics and data science',
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
