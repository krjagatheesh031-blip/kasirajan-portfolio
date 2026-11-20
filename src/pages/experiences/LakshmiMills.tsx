import React, { useEffect } from 'react';
import { getExperienceBySlug } from '../../data/experiences';
import { ExperienceLayout } from '../../components/ExperienceLayout';

export const LakshmiMillsPage: React.FC = () => {
  const exp = getExperienceBySlug('lakshmi-mills');

  useEffect(() => {
    document.title = 'Lakshmi Mills | Agriculture Officer - Kasirajan Meenatchisundaram';
  }, []);

  if (!exp) return <div>Experience not found</div>;

  return <ExperienceLayout experience={exp} />;
};
