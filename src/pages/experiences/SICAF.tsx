import React, { useEffect } from 'react';
import { getExperienceBySlug } from '../../data/experiences';
import { ExperienceLayout } from '../../components/ExperienceLayout';

export const SICAFPage: React.FC = () => {
  const exp = getExperienceBySlug('sicaf');

  useEffect(() => {
    document.title = 'SICAF Limited | Assistant Manager - Kasirajan Meenatchisundaram';
  }, []);

  if (!exp) return <div>Experience not found</div>;

  return <ExperienceLayout experience={exp} />;
};
