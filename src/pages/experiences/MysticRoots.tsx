import React, { useEffect } from 'react';
import { getExperienceBySlug } from '../../data/experiences';
import { ExperienceLayout } from '../../components/ExperienceLayout';

export const MysticRootsPage: React.FC = () => {
  const exp = getExperienceBySlug('mystic-roots');

  useEffect(() => {
    document.title = 'Mystic Roots | Farm Manager - Kasirajan Meenatchisundaram';
  }, []);

  if (!exp) return <div>Experience not found</div>;

  return <ExperienceLayout experience={exp} />;
};
