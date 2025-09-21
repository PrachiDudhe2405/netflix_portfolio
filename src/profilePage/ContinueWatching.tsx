import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';

type ProfileType = 'recruiter' | 'developer' | 'stalker';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Anime", imgSrc: "https://picsum.photos/seed/anime/300/200", link: "/anime" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ],
  developer: [
    { title: "Certifications", imgSrc: "https://picsum.photos/id/1028/300/200", link: "/certifications" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ],
  stalker: [
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
