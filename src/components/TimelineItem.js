import React from 'react';


const TimelineItem = ({data}) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.time}</time>
            <p>{data.text}</p>
            {/* check if we have the data link, if yes, then continue */}
            {data.link && <a href={data.link.url}
            target="_blank"
            rel="noopener noreferrer">
                {data.link.text}
            </a>}
            <span className="circle"></span>
        </div>
    </div>
);

export default TimelineItem;