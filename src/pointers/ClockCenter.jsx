import styled from 'styled-components';

const ClockCenter_Styled = styled.div`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    background: ${(props) => props.bg};
    border: ${(props) => props.border };
    border-radius: 50%;
    z-index:99;

`
ClockCenter_Styled.defaultProps = {
    size: '15px',
    bg:'#848484',
    border:'2px solid #fff',
}
const ClockCenter = (props) => {
    return ( 
        <ClockCenter_Styled />
    );
}

export default ClockCenter;