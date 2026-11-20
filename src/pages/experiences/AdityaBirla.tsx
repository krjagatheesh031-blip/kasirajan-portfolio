import React, { useEffect } from 'react';
import { getExperienceBySlug } from '../../data/experiences';
import { ExperienceLayout } from '../../components/ExperienceLayout';

export const AdityaBirlaPage: React.FC = () => {
  const exp = getExperienceBySlug('aditya-birla-retail');

  useEffect(() => {
    document.title = 'Aditya Birla Retail Ltd. | Senior Officer Fresh Produce - Kasirajan Meenatchisundaram';
  }, []);

  if (!exp) return <div>Experience not found</div>;

  return <ExperienceLayout experience={exp} />;
};
