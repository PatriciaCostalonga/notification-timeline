import React from 'react';
import TimelineData from "../data";
import TimelineItem from "./TimelineItem";

const Timeline = () => TimelineData.length > 0 && (
    <div className="timeline-container">
        { TimelineData.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
        ))}
    </div>
);

export default Timeline;