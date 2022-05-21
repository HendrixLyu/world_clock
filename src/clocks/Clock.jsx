import styled from 'styled-components';
import ClockBackground from './ClockBackground';
import ClockPointer from '../pointers/ClockPointer';

import { useState, useEffect } from 'react';

// 快捷键: sfc -> arrow function
const Clock = (props) => {

    const [light, setLight] = useState(true);
    const [hourDeg, setHourDeg] = useState(0);
    const [minuteDeg, setMinuteDeg] = useState(90);
    const [secondDeg, setSecondDeg] = useState(180);

    const [Hour,setHour] = useState();

    const deg = 6
    
    const ShowTime = () => {
        let nowTime = new Date();
        let day = new Date(nowTime.getTime() + props.timezone * 3600000)
        let hour = day.getUTCHours() * deg * 5 //时针:每次转30度
        let minute = day.getUTCMinutes() * deg
        let second = day.getUTCSeconds() * deg

        setHourDeg(hour + minute / 12)
        setMinuteDeg (minute + second / 60)
        setSecondDeg(second)
        setHour(day.getUTCHours())

    }

    useEffect( () => {
        ShowTime()
        const interval = setInterval( () => {
            ShowTime()  
        }, 100)
        return () => clearInterval(interval)
        }, []
    )

    useEffect(() => {
        if(+Hour >= 19 || +Hour < 6) {
            setLight(false)
        }
    },[Hour])

    return (
    <ClockBackground>
        City:{props.city}
        <ClockPointer is_white={light}
        hourDeg={hourDeg}
        minuteDeg={minuteDeg}
        secondDeg={secondDeg} />
        time:{Date()}
    </ClockBackground>

    // <div>city={city}</div> 
    )

}
export default Clock;