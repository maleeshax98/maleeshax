import React from "react";

const TimelineItem = ({ date, title, content, desc }) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">
    <div className="font-caveat font-medium text-2xl text-white mb-1 sm:mb-0">
      {title}
    </div>
    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-[#333333] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#333333] after:border-4 after:box-content after:border-blue-600 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-[#272729] rounded-md">
        {date}
      </time>
      {/* <div className="text-xl font-bold text-slate-900">{title}</div> */}
    </div>
    <div className="text-[#b9b8b8] text-sm">{desc}</div>
    <div className="text-[#727272] text-sm">{content}</div>
  </div>
);

const Timeline = () => (
  <div className="-my-6">
    <TimelineItem
      date="Aug, 2022"
      title="Udawalmariya"
      desc="A website"
      content="We created a website to help people during the COVID-19 situation. Through this website, people could share their goods. We presented this website to UNICEF Sri Lanka in the educational department (currently not active)."
    />
    <TimelineItem
      date="DES, 2023"
      title="NoteMe X"
      desc="A website - www.notemex.com"
      content="We created a website for sharing educational notes, where students could share their notes among other students. We also went to Sirasa TV.
      visit it - www.notemex.com
      "
    />
  </div>
);

export default Timeline;
