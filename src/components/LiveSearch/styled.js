import styled from "styled-components";

export const LiveSearchWrapper = styled.div`
  display: ${props => props?.$liveSearch ? "block" : "none"};
  position: absolute;
  top: 33px;
  left: 0;
  right: 0;
  border: 1px solid #bbbbbb;
  background: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top: 0;
  padding: 5px;
  box-shadow: 0 2px 5px 1px rgba(64, 60, 67, .16);
`