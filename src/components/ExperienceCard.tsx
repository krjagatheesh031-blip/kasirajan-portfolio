import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight, CheckCircle2, Globe } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#DDDCCF] hover:border-[#24543B] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full hover:-translate-y-1.5">
      
      {/* Image Banner */}
      <div className="relative h-60 overflow-hidden bg-[#153B2B]">
        <img
          src={experience.heroImage}
          alt={`${experience.company} - ${experience.cropsAndCultivationMethods.crops.slice(0, 2).join(', ')}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
          loading="lazy"
        />
        
        {/* Deep Botanical Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C2319] via-[#0C2319]/25 to-transparent" />

        {/* Location & Country Badge */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md shadow-md border ${
            experience.country === 'Oman'
              ? 'bg-[#B89555] text-[#153B2B] border-[#B89555]'
              : 'bg-[#153B2B] text-white border-[#24543B]'
          }`}>
            <Globe className="w-3 h-3 text-current" />
            <span>{experience.country}</span>
          </span>

          {experience.scaleHighlights && experience.scaleHighlights[0] && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#0C2319]/85 text-[#B89555] border border-[#B89555]/40 backdrop-blur-md shadow-md">
              {experience.scaleHighlights[0].value}
            </span>
          )}
        </div>

        {/* Order Badge */}
        <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#153B2B] text-white border border-[#24543B] text-xs font-bold font-mono flex items-center justify-center shadow-md">
          #{experience.order}
        </div>

        {/* Bottom banner: Period in Harvest Gold */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
          <span className="flex items-center gap-1.5 font-semibold text-[#B89555] bg-[#0C2319]/85 px-2.5 py-1 rounded-md border border-[#B89555]/30">
            <Calendar className="w-3.5 h-3.5 text-[#B89555]" />
            <span>{experience.period}</span>
          </span>
          <span className="flex items-center gap-1 font-medium text-[#F5F1E7] truncate max-w-[48%] bg-[#0C2319]/65 px-2 py-1 rounded-md">
            <MapPin className="w-3.5 h-3.5 text-[#B89555] shrink-0" />
            <span className="truncate">{experience.location}</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Designation in Olive Sage */}
          <div className="text-xs uppercase tracking-wider font-bold text-[#527A49] mb-1.5">
            {experience.designation}
          </div>

          {/* Company Name in Deep Forest Green */}
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#153B2B] group-hover:text-[#24543B] transition-colors mb-3 leading-snug">
            {experience.company}
          </h3>

          {/* Short Intro in Charcoal/Secondary text */}
          <p className="text-sm text-[#46544A] leading-relaxed mb-5 font-normal">
            {experience.shortIntro}
          </p>

          {/* Crop Tags */}
          <div className="mb-5">
            <div className="text-xs font-semibold text-[#153B2B] uppercase tracking-wider mb-2">Key Crops & Systems:</div>
            <div className="flex flex-wrap gap-1.5">
              {experience.cropsAndCultivationMethods.crops.slice(0, 4).map((crop, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#F5F1E7] text-[#24543B] border border-[#DDDCCF]"
                >
                  {crop}
                </span>
              ))}
              {experience.cropsAndCultivationMethods.crops.length > 4 && (
                <span className="px-2 py-1 rounded-md text-xs font-medium bg-[#EAE5D8] text-[#527A49] border border-[#DDDCCF]">
                  +{experience.cropsAndCultivationMethods.crops.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Highlight snippet */}
          {experience.documentedAchievements[0] && (
            <div className="p-3.5 rounded-xl bg-[#F5F1E7] border border-[#DDDCCF] mb-5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#153B2B] mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#24543B] shrink-0" />
                <span>{experience.documentedAchievements[0].title}</span>
              </div>
              <p className="text-xs text-[#46544A] line-clamp-2 leading-relaxed font-normal">
                {experience.documentedAchievements[0].description}
              </p>
            </div>
          )}
        </div>

        {/* View Full Experience Link */}
        <div className="pt-4 border-t border-[#DDDCCF]">
          <Link
            to={`/experience/${experience.slug}`}
            className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#153B2B] hover:bg-[#24543B] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 group/btn shadow-sm"
          >
            <span>Explore Experience</span>
            <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

    </div>
  );
};
