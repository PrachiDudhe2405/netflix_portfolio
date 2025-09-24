import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CertificateDetail.css';
import fiveGImage from '../images/5g.png';
import uttaraImage from '../images/uttara.png';
import foundationsGitImage from '../images/foundations-git.png';
import pythonImage from '../images/Py.png';
import seabornImage from '../images/DV.png';
import sqlImage from '../images/SQL.png';
import intermediateSqlImage from '../images/SQL-2.png';
import pandasImage from '../images/Data.png';

interface CertificateDetailData {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  description: string;
  imageUrl: string;
}

const certificateData: { [key: string]: CertificateDetailData } = {
  '5g-introductory': {
    id: '5g-introductory',
    title: '5G Introductory Certification',
    issuer: 'Qualcomm Wireless Academy',
    issuedDate: '2025',
    description: 'Comprehensive certification covering the fundamentals of 5G wireless technology, including network architecture, key technologies, and applications.',
    imageUrl: fiveGImage
  },
  'foundations-git': {
    id: 'foundations-git',
    title: 'Foundations of Git',
    issuer: 'Coursera',
    issuedDate: '2024',
    description: 'Credential covering Git fundamentals including repository setup, branching strategies, merging, and collaborating through Git hosting platforms.',
    imageUrl: foundationsGitImage
  },
  'introduction-python': {
    id: 'introduction-python',
    title: 'Introduction to Python',
    issuer: 'DataCamp',
    issuedDate: '2024',
    description: 'Programming foundation course introducing Python syntax, control flow, and data structures for analytics workflows.',
    imageUrl: pythonImage
  },
  'data-visualization-seaborn': {
    id: 'data-visualization-seaborn',
    title: 'Introduction to Data Visualization with Seaborn',
    issuer: 'DataCamp',
    issuedDate: 'Nov 2024',
    description: 'Certificate focused on designing statistical visualizations with Seaborn, customizing styles, and publishing clear insights for stakeholders.',
    imageUrl: seabornImage
  },
  'joining-data-sql': {
    id: 'joining-data-sql',
    title: 'Joining Data in SQL',
    issuer: 'DataCamp',
    issuedDate: '2024',
    description: 'Course covering multi-table joins, set operations, and advanced SQL techniques to combine datasets for analytics workflows.',
    imageUrl: sqlImage
  },
  'intermediate-sql': {
    id: 'intermediate-sql',
    title: 'Intermediate SQL',
    issuer: 'DataCamp',
    issuedDate: '2024',
    description: 'Expanded SQL training on subqueries, window functions, and performance-aware filtering for production analytics.',
    imageUrl: intermediateSqlImage
  },
  'data-manipulation-pandas': {
    id: 'data-manipulation-pandas',
    title: 'Data Manipulation with pandas',
    issuer: 'DataCamp',
    issuedDate: '2024',
    description: 'Hands-on certification focused on reshaping, aggregating, and cleaning datasets with pandas to produce analysis-ready tables.',
    imageUrl: pandasImage
  },
  'advanced-c-unix': {
    id: 'advanced-c-unix',
    title: 'Advanced C Programming & Unix Internals',
    issuer: 'Uttara Computers',
    issuedDate: '2022',
    description: 'Advanced certification in C programming and Unix system internals, covering low-level programming, system calls, and kernel programming concepts.',
    imageUrl: uttaraImage
  }
};

const CertificateDetail: React.FC = () => {
  const { certificateId } = useParams<{ certificateId: string }>();
  const navigate = useNavigate();
  const certificate = certificateData[certificateId || ''];

  if (!certificate) {
    return (
      <div className="certificate-detail-container">
        <button onClick={() => navigate('/certifications')} className="back-button">
          ← Back to Certifications
        </button>
        <div className="error-message">Certificate not found.</div>
      </div>
    );
  }

  return (
    <div className="certificate-detail-container">
      <button onClick={() => navigate('/certifications')} className="back-button">
        ← Back to Certifications
      </button>
      
      <div className="certificate-header">
        <h1 className="certificate-title">{certificate.title}</h1>
        <h2 className="certificate-issuer">{certificate.issuer}</h2>
        <p className="certificate-date">Issued: {certificate.issuedDate}</p>
        <p className="certificate-description">{certificate.description}</p>
      </div>

      <div className="certificate-image-container">
        <img 
          src={certificate.imageUrl} 
          alt={`${certificate.title} Certificate`}
          className="certificate-image"
        />
      </div>
    </div>
  );
};

export default CertificateDetail;
