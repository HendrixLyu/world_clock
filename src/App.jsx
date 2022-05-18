import styled from 'styled-components'; //快捷键:imsc
import Clock from './clocks/Clock';


const ClocksGroup = styled.div` //CSS
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width:1500px;
`;
// 快捷键:ffc -> function & sfc -> arrow func
const App = (props) => {
    return (
    <ClocksGroup> 
        <Clock />
        <Clock />
        <Clock />
        <Clock />
        <Clock />
    </ClocksGroup>
    );
};

export default App;