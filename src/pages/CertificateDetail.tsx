import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CertificateDetail.css';
import fiveGImage from '../images/5g.png';
import uttaraImage from '../images/uttara.png';

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
