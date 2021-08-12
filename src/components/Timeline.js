import React, { useState, useEffect, useRef } from "react";
import TimelineData from "../data";
import TimelineItem from "./TimelineItem";

const Timeline = () => {

   const count = useRef(-1);
    const [notification, setNotification] = useState([]);
    const [stop, setStop]= useState(false)

    useEffect(() => {
        if(count.current >= 6){
           
             setStop(true)
            return
        }

        

        const timeId = setTimeout(() => {

                (count.current = count.current + 1);
                let newNotification = [...notification, TimelineData[count.current]];
                
                setNotification(newNotification);
               
            }, 20000);
        
        
        return () => {
            clearTimeout(timeId)
            ;}
        
          
    });

        useEffect(() => {
               
             const timeId = setTimeout(() => {
                let newNotification = notification.filter((item)=>item.id !== 7);
                setNotification(newNotification);
            }, 20000);
        
        
        return () => {
            clearTimeout(timeId)
            ;} 
       
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[stop]);        
  



    return (
        <div className="timeline-container">
            {  notification.map((data, id) => (
                <TimelineItem data={data} key={id} />
            ))}
        </div>
    );
};
    

export default Timeline;