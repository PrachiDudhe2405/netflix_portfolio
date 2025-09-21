import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
// Rendering name as text instead of static image so it can be personalized

const NetflixTitle = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Start animation automatically after component mounts
    const startTimer = setTimeout(() => {
      setIsAnimating(true);
      // Play sound
      const audio = new Audio(netflixSound);
      audio.play().catch(error => console.error("Audio play error:", error));
    }, 500); // Small delay to ensure component is fully loaded

    // Navigate to browse page after animation completes
    const navigateTimer = setTimeout(() => {
      navigate('/browse');
    }, 4500); // 4.5 seconds total (0.5s delay + 4s animation)

    return () => {
      clearTimeout(startTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <div className="netflix-container">
      <div className={`netflix-logo ${isAnimating ? 'animate' : ''}`}>
        <svg viewBox="0 0 800 300" className="netflix-svg" aria-label="Prachi Dudhe">
          <defs>
            <path id="arcPath" d="M50,200 Q400,40 750,200" />
          </defs>
          <text className="netflix-text">
            <textPath href="#arcPath" startOffset="50%" textAnchor="middle">PRACHI DUDHE</textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default NetflixTitle;
