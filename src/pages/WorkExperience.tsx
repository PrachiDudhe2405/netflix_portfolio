import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './WorkExperience.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../queries/getTimeline';


const WorkExperience: React.FC = () => {
  const navigate = useNavigate();
  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);

  useEffect(() => {
    async function fetchTimelineItem() {
      const data = await getTimeline();
      setTimeLineData(data);
    }
    fetchTimelineItem();
  }, []);

  const getExperienceId = (item: TimelineItem): string => {
    if (item.name === 'Sulzer') return 'sulzer-intern';
    if (item.name === 'Tata Consultancy Services') return 'tcs-developer';
    if (item.name === 'Texas A&M University') return 'tamu-ms';
    if (item.name === 'Pune University') return 'pune-be';
    return '';
  };

  const handleTimelineClick = (item: TimelineItem) => {
    const experienceId = getExperienceId(item);
    if (experienceId) {
      navigate(`/experience/${experienceId}`);
    }
  };


  if (!timeLineData) return <div>Loading...</div>;
  console.log("🚀 ~ timeLineData:", timeLineData)

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType} clickable-timeline-element`}
            contentStyle={{
              ...(item.timelineType === "work"
                ? index % 2 === 0
                  ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                  : { background: 'rgb(255, 255, 255)', color: '#000' }
                : index % 2 === 0
                  ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                  : { background: 'rgb(255, 255, 255)', color: '#000' }),
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            contentArrowStyle={
              index % 2 === 0
                ? { borderRight: '7px solid rgb(33, 150, 243)' }
                : { borderRight: '7px solid rgb(255, 255, 255)' }
            }
            date={item.dateRange}
            iconStyle={
              index % 2 === 0
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 255, 255)', color: '#000', border: '2px solid rgb(33, 150, 243)' }
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === "work" ? (
              <div 
                style={{ color: index % 2 === 0 ? 'white' : 'black' }}
                onClick={() => handleTimelineClick(item)}
                className="timeline-content-clickable"
              >
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
                <p className="timeline-summary">
                  {typeof item.summaryPoints === 'string' 
                    ? item.summaryPoints.substring(0, 150) + '...' 
                    : item.summaryPoints[0]?.substring(0, 150) + '...'
                  }
                </p>
                <p className="click-hint">Click to view details →</p>
              </div>
            ) : (
              <div 
                style={{ color: index % 2 === 0 ? 'white' : 'black' }}
                onClick={() => handleTimelineClick(item)}
                className="timeline-content-clickable"
              >
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                <p className="timeline-summary">
                  {typeof item.summaryPoints === 'string' 
                    ? item.summaryPoints.substring(0, 150) + '...' 
                    : item.summaryPoints[0]?.substring(0, 150) + '...'
                  }
                </p>
                <p className="click-hint">Click to view details →</p>
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
