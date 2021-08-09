import React, { useState, useEffect, useRef } from "react";
import TimelineData from "../data";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
    const count = useRef(0);
    const [notification, setNotification] = useState([]);

    useEffect(() => {
        const timeId = setTimeout(() => {
        // After 3 seconds set the show value to false
            console.log("timer");
            
            count.current === 6 ? (count.current = 0) : (count.current = count.current + 1);

            // for (let i = 0; i < (count.current++); i++) {
            //     count.current === 6 ? (count.current = 0) : (count.current = count.current + 1);
            // }

            setNotification([...notification, TimelineData[count.current - 1]]);
        }, 2000);

        

        return () => {
            clearTimeout(timeId);
        };
    });

    console.log("count", count, notification);
    return (
        <div className="timeline-container">
            {notification.map((data) => (
                <TimelineItem data={data} key={data.id} />
            ))}
        </div>
    );
};

export default Timeline;

// export class Timeline extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }

//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }

//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }

//     render(){
//         return(
//             <div className="timeline-container">
//                 { TimelineData.map((data, idx) => (
//                     <TimelineItem data={data} key={idx} />
//                 ))}
//                 <h2>{this.state.date.toLocaleTimeString()}</h2>
//             </div>
//         )
//     }
// }

// const Timeline = () => TimelineData.length > 0 && (
//     <div className="timeline-container">
//         { TimelineData.map((data, idx) => (
//             <TimelineItem data={data} key={idx} />
//         ))}
//     </div>
// );

// export default Timeline;