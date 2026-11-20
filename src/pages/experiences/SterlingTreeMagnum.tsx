import React, { useEffect } from 'react';
import { getExperienceBySlug } from '../../data/experiences';
import { ExperienceLayout } from '../../components/ExperienceLayout';

export const SterlingTreeMagnumPage: React.FC = () => {
  const exp = getExperienceBySlug('sterling-tree-magnum');

  useEffect(() => {
    document.title = 'Sterling Tree Magnum (I) Ltd. | Executive Plantations - Kasirajan Meenatchisundaram';
  }, []);

  if (!exp) return <div>Experience not found</div>;

  return <ExperienceLayout experience={exp} />;
};
