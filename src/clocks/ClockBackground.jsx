import styled from 'styled-components'; //imsc

const ClockBackground = styled.div`
    width: ${props => props.size};
    height: ${props => props.size};
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    background: rgba(255,255,255,0.1);
    border-radius:3rem;
    padding:20px;
    margin:2rem;
`;

ClockBackground.defaultProps = {
    size: '400px'
};

export default ClockBackground;