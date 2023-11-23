import styled from "styled-components";

export const LiveSearchWrapper = styled.div`
  display: ${props => props?.liveSearch?.length >= 2 ? "block" : "none"};
  position: absolute;
  top: 35px;
  left: 0;
  right: 0;
  border: 1px solid #bbbbbb;
  background: #fff;
  border-radius: 5px;
  padding: 5px;
`