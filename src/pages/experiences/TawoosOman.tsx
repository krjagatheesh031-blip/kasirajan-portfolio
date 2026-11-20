import React, { useEffect } from 'react';
import { getExperienceBySlug } from '../../data/experiences';
import { ExperienceLayout } from '../../components/ExperienceLayout';

export const TawoosOmanPage: React.FC = () => {
  const exp = getExperienceBySlug('tawoos-agricultural-systems');

  useEffect(() => {
    document.title = 'Tawoos Agricultural Systems LLC (Oman) | Agronomist & Farm Manager - Kasirajan Meenatchisundaram';
  }, []);

  if (!exp) return <div>Experience not found</div>;

  return <ExperienceLayout experience={exp} />;
};
