import React from 'react';
import './Anime.css';

const Anime: React.FC = () => {
  const favorites = [
    { 
      title: 'Naruto', 
      note: 'Classic ninja adventure with incredible character development and emotional depth.',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20-dE6UHbFFg1A5.jpg'
    },
    { 
      title: 'Naruto: Shippuden', 
      note: 'The continuation that takes the story to new heights with mature themes.',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1735-kGfVm0YqCPcu.png'
    },
    { 
      title: 'One Piece', 
      note: 'Epic pirate adventure with world-building and friendship at its core.',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-ELSYx3yMPcKM.jpg'
    },
    { 
      title: 'Jujutsu Kaisen', 
      note: 'Top-tier animation and choreography with supernatural battles.',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-LHBAeoZDIsnF.jpg'
    },
    { 
      title: 'Demon Slayer', 
      note: 'Breathtaking visuals and moving story arcs about family and determination.',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx129874-g6ZKXB94Hui1.jpg'
    },
    { 
      title: 'Spy × Family', 
      note: 'Perfect blend of comedy, action, and heartwarming family moments.',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140960-Kb6R5nYQfjmP.jpg'
    },
  ];

  return (
    <div className="blogs-container">
      <h2 className="blogs-title">🎌 My Favorite Anime</h2>
      <p className="blogs-intro">A few series I love and recommend.</p>
      <div className="blogs-grid">
        {favorites.map((a, i) => (
          <div key={i} className="blog-card" style={{ '--delay': `${i * 0.2}s` } as React.CSSProperties}>
            <img src={a.image} alt={a.title} className="anime-image" />
            <div className="blog-info animated-text">
              <h3 className="blog-title">{a.title}</h3>
              <p className="blog-description">{a.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anime;
