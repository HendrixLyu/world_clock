import styled from 'styled-components';
import Clock from './clocks/Clock';
const ClockGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width:1200px;
`;

const App = (props) => {
    return (
    <ClockGroup>
        <Clock />
        <Clock />
        <Clock />
        <Clock />
    </ClockGroup>
    );

};

export default App;