import styled from 'styled-components'; //快捷键:imsc
import Clock from './clocks/Clock';


const ClocksGroup = styled.div` //在JS里写CSS
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
        <Clock city={'Sydney'} timezone={10} />
        <Clock city={'NYC'} timezone={-4} />
        <Clock city={'Lon'} timezone={1} />
        <Clock city={'BJ'} timezone={8} />
        <Clock city={'Mel'} timezone={10} />
    </ClocksGroup>
    );
};

export default App;