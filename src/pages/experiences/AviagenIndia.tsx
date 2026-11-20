import React, { useEffect } from 'react';
import { getExperienceBySlug } from '../../data/experiences';
import { ExperienceLayout } from '../../components/ExperienceLayout';

export const AviagenIndiaPage: React.FC = () => {
  const exp = getExperienceBySlug('aviagen-india');

  useEffect(() => {
    document.title = 'Aviagen India Ltd. | Agronomist (Record Yields) - Kasirajan Meenatchisundaram';
  }, []);

  if (!exp) return <div>Experience not found</div>;

  return <ExperienceLayout experience={exp} />;
};
