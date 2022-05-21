import styled from 'styled-components'; //快捷键:imsc

import PlateStyle from './PlateStyle';
import ClockCenter from './ClockCenter';
import BasicPointer from './BasicPointer';
import HourPointer from './HourPointer';
import MinutePointer from './MinutePointer';
import SecPointer from './SecondPointer';

import { useState } from 'react';

// 快捷键:sfc -> arrow function
const ClockPointer = (props) => { 
    return (
    <PlateStyle is_white={props.is_white}>
        {/* <BasicPointer /> */}
        <HourPointer is_white={props.is_white} rotate={props.hourDeg}/>
        <MinutePointer is_white={props.is_white} rotate={props.minuteDeg}/>
        <SecPointer is_white={props.is_white} rotate={props.secondDeg}/>
        <ClockCenter />
    </PlateStyle>  
    );
}

export default ClockPointer;