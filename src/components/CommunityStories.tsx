import React from 'react';
import { STORIES } from '../data/mockData';

export const CommunityStories: React.FC = () => {
  return (
    <section className="py-[65px] pt-0 bg-[#f7f5ef]">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px]">
          {STORIES.map((story) => (
            <article
              key={story.id}
              className="bg-white border border-[#dfe3dc] rounded-[24px] p-[28px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(23,33,27,0.06)] flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#e87d45] uppercase tracking-wider block mb-2">
                  {story.neighborhood}
                </span>
                <p className="text-[16px] font-semibold text-[#17211b] leading-[1.4] mb-[20px]">
                  “{story.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#dfe3dc]/60">
                <div className="text-[13px] font-extrabold text-[#17211b]">
                  {story.author}
                </div>
                <div className="text-[12px] text-[#68736c]">
                  {story.role} · <span className="text-[#164b35] font-bold">{story.distance}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
