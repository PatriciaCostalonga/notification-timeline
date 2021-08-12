import React, { useState, useEffect, useRef } from "react";
import TimelineData from "../data";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
    const count = useRef(0);
    const [notification, setNotification] = useState([]);

    useEffect(() => {
            const timeId = setTimeout(() => {
                console.log("timer");
    
                count.current === 6 ? (count.current = 0) : (count.current = count.current + 1);
                let newNotification = [...notification, TimelineData[count.current]];
                
                if (notification.length >= 6) {
                        newNotification = [TimelineData[count.current]];
                }
                
                setNotification(newNotification);
            }, 2000);
    
            return () => {
                clearTimeout(timeId);
            };
    });


    console.log("count", count, notification);

    return (
        <div className="timeline-container">
            {notification.map((data, id) => (
                <TimelineItem data={data} key={id} />
            ))}
        </div>
    );
};

export default Timeline;
