import React, { useEffect } from 'react';
import { getExperienceBySlug } from '../../data/experiences';
import { ExperienceLayout } from '../../components/ExperienceLayout';

export const AlAnsariTradingPage: React.FC = () => {
  const exp = getExperienceBySlug('al-ansari-trading');

  useEffect(() => {
    document.title = 'Al-Ansari Trading Enterprise LLC (Oman) | Horticulturist - Kasirajan Meenatchisundaram';
  }, []);

  if (!exp) return <div>Experience not found</div>;

  return <ExperienceLayout experience={exp} />;
};
