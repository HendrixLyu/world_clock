import styled from "styled-components";
import BasicPointer from "./BasicPointer";

const SecPointer_Style = styled(BasicPointer)``;

SecPointer_Style.defaultProps = {
  rotate: 60,
  size: 150,
  tail: 20,
  bg_white: "#ff6767",
  bg_black: "#69c0ff",
  width: 2,
};

const SecPointer = props => {
  return (
    <SecPointer_Style
      rotate={props.rotate}
      is_white={props.is_white}
    ></SecPointer_Style>
  );
};

export default SecPointer;
