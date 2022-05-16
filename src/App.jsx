import styled from 'styled-components'; //imsc
import Clock from './clocks/Clock';

// ffc -> function & sfc -> arrow func
const ClocksGroup = styled.div` //CSS
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width:1500px;
`;

const App = (props) => {
    return (
    <ClocksGroup> 
        <Clock />
        <Clock />
        <Clock />
        <Clock />
        <Clock />
        <Clock />
    </ClocksGroup>
    );
};

export default App;