import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import netflixSound from './netflix-sound.mp3';

const NetflixTitle = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('NetflixTitle component mounted');
    
    // Start animation after a short delay
    const startTimer = setTimeout(() => {
      console.log('Starting animation');
      setIsAnimating(true);
      // Try to play the intro sound
      const audio = new Audio(netflixSound);
      audio.volume = 0.7;
      const tryPlay = () => audio.play().catch(() => {
        // Autoplay blocked: wait for first user interaction
        const resumeOnGesture = () => {
          audio.play().finally(() => {
            document.removeEventListener('pointerdown', resumeOnGesture);
            document.removeEventListener('keydown', resumeOnGesture);
          });
        };
        document.addEventListener('pointerdown', resumeOnGesture, { once: true });
        document.addEventListener('keydown', resumeOnGesture, { once: true });
      });
      tryPlay();
    }, 500);

    // Navigate to browse page after animation
    const navigateTimer = setTimeout(() => {
      console.log('Navigating to browse page');
      navigate('/browse');
    }, 3500);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#141414',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999
    }}>
      <div style={{
        textAlign: 'center',
        color: '#e50914',
        fontFamily: 'Netflix Sans, Arial, sans-serif',
        fontWeight: '800',
        fontSize: isAnimating ? '72px' : '48px',
        transform: isAnimating ? 'scale(1.2)' : 'scale(1)',
        opacity: isAnimating ? 0.8 : 1,
        transition: 'all 2s ease-in-out',
        textTransform: 'uppercase',
        letterSpacing: '2px'
      }}>
        PRACHI DUDHE
      </div>
    </div>
  );
};

export default NetflixTitle;
