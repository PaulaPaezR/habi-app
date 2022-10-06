import styled from "styled-components";

export const Button = styled.button`
  width: ${props => !props.fullWidth ? '100px' : '100%'};
  color: ${props => props.secondary ? "#7c01ff": "#FFF"};
  font-size: 1em;
  background: ${props => props.secondary ? "#FFF" : "#7c01ff"};
  padding: 10px 15px;
  border: 2px solid #7c01ff;
  border-radius: 7px;
  cursor: pointer;
`