import React from "react";
import ResumeSectionItem from 'components/resume/ResumeSectionItem';

export default function ResumeSection(props) {
  const section = props.section;
  const title = props.title;
  const handle = props.handle;

  return (
    <section className={handle}>
      <h2>{title}</h2>
      <div className="items">
        {section.map((item) => (
          <ResumeSectionItem 
            key={item.id} 
            item={item} 
            handle={handle}
          />
        ))}
      </div>
    </section>
  );
}