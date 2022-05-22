import styled from 'styled-components';
import BasicPointer from './BasicPointer';

const MinuPointer_Style = styled(BasicPointer)``;

MinuPointer_Style.defaultProps = {
    rotate:30,
    size: 120,
    bg_white: "#46bfb1",
    bg_black: "#fff",
    width:4,
}

const MinuPointer = (props) => {
    return ( 
        <MinuPointer_Style rotate={props.rotate} is_white={props.is_white}>
        </MinuPointer_Style>
    );
}

export default MinuPointer;