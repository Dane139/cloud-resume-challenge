import React from "react";

export default function ResumeSectionItem(props) {
  const item = props.item;
  const isProject = props.handle === 'projects';

  return (
    <div className="item">
      <div className="item_heading">
        <div className="info">
          <h3>{item.title}</h3>
          
          {isProject && item.subtitle ? (
            <div className="tech-badges">
              {item.subtitle.split(',').map((tech, index) => (
                <span key={index} className="badge">{tech.trim()}</span>
              ))}
            </div>
          ) : (
            item.subtitle && <p className="subtitle">{item.subtitle}</p>
          )}
        </div>

        <div className="details">
          {item.location && <div className="location">{item.location}</div>}
          {item.duration && <div className="duration">{item.duration}</div>}
        </div>
      </div>
      
      {Array.isArray(item.details) && item.details.length > 0 && (
        <ul>
          {item.details.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}