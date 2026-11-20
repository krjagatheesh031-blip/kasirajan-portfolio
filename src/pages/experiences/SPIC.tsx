import React, { useEffect } from 'react';
import { getExperienceBySlug } from '../../data/experiences';
import { ExperienceLayout } from '../../components/ExperienceLayout';

export const SPICPage: React.FC = () => {
  const exp = getExperienceBySlug('spic');

  useEffect(() => {
    document.title = 'SPIC Ltd. | Officer Fresh Produce (Organic) - Kasirajan Meenatchisundaram';
  }, []);

  if (!exp) return <div>Experience not found</div>;

  return <ExperienceLayout experience={exp} />;
};
