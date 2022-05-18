import styled from 'styled-components';
import ClockBackground from './ClockBackground'
import ClockPointer from '../pointers/ClockPointer'

// 快捷键: sfc -> arrow function
const Clock = (props) => {
    return (
    <ClockBackground>
        <ClockPointer />
    </ClockBackground>
    );
}

export default Clock;