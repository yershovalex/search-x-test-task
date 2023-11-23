import styled from "styled-components";

export const SearchItem = styled.div`
  color: ${props => props.active ? '#6f029a' : '#000'}; 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background: #ababab;
  }
`

export const SearchItemText = styled.div`
  color: ${props => props.active ? '#6f029a' : '#000'};
`

export const RemoveButton = styled.div`
    padding: 3px;
`

