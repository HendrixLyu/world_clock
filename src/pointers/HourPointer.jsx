import styled from 'styled-components';
import BasicPointer from './BasicPointer';

const HourPointer_Style = styled(BasicPointer)``;

HourPointer_Style.defaultProps = {
    rotate:0,
    size: 90,
    bg_white: "#848484",
    bg_black: "#ff6767",
    width: 7
}

const HourPointer = (props) => {
    return ( 
        <HourPointer_Style rotate={props.rotate} is_white={props.is_white}>

        </HourPointer_Style>
    );
}

export default HourPointer;