import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NetflixTitle from './NetflixTitle';
import ProfilePage from './profilePage/profilePage';
import Browse from './browse/browse';
import WorkExperience from './pages/WorkExperience';
import ExperienceDetail from './pages/ExperienceDetail';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import ContactMe from './pages/ContactMe';
import Layout from './Layout';
import Music from './pages/Music';
import Certifications from './pages/Certifications';
import CertificateDetail from './pages/CertificateDetail';
import Anime from './pages/Anime';
import Resume from './pages/Resume';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NetflixTitle />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
      <Route path="/work-experience" element={<Layout><WorkExperience /></Layout>} />
      <Route path="/experience/:experienceId" element={<Layout><ExperienceDetail /></Layout>} />
      <Route path="/skills" element={<Layout><Skills /></Layout>} />
      <Route path="/projects" element={<Layout><Projects /></Layout>} />
      <Route path="/project/:projectId" element={<Layout><ProjectDetail /></Layout>} />
      <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />
      <Route path="/music" element={<Layout><Music /></Layout>} />
      <Route path="/certifications" element={<Layout><Certifications /></Layout>} />
      <Route path="/certificate/:certificateId" element={<Layout><CertificateDetail /></Layout>} />
      <Route path="/anime" element={<Layout><Anime /></Layout>} />
      <Route path="/resume" element={<Layout><Resume /></Layout>} />
    </Routes>
  );
};

export default App;
