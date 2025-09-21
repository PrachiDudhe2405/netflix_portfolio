import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';
import { Certification } from '../types';
import { getCertifications } from '../queries/getCertifications';
const iconData: { [key: string]: JSX.Element } = {
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  'university': <FaUniversity />
}

const Certifications: React.FC = () => {
  const navigate = useNavigate();
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => { 
    async function fetchCertifications() {
      const data = await getCertifications();
      setCertifications(data);
    }

    fetchCertifications();
  }, []);

  const handleCertificationClick = (cert: Certification) => {
    if (cert.link && cert.link !== '#') {
      if (cert.link.startsWith('/certificate/')) {
        navigate(cert.link);
      } else {
        window.open(cert.link, '_blank', 'noopener,noreferrer');
      }
    }
  };

  if (certifications.length === 0) return <div>Loading...</div>;

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="certification-card clickable-certification" 
            style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
            onClick={() => handleCertificationClick(cert)}
          >
            <div className="certification-content">
              <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
