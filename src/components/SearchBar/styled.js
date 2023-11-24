import styled from "styled-components";
import {SearchOutlined} from "@ant-design/icons";


export const SearchWrapper = styled.div`
  position: relative;
`

export const SearchInput = styled.input`
  width: 100vw;
  max-width: 500px;
  height: 10px;
  border: 1px solid #bbbbbb;
  border-radius: 20px;
  padding: 10px;
  outline: none;
  box-shadow: 0 2px 5px 1px rgba(64, 60, 67, .16);
  border-bottom-left-radius: ${props => props?.$liveSearch ? '0' : '20px'};
  border-bottom-right-radius: ${props => props?.$liveSearch ? '0' : '20px'};
  border-bottom: ${props => props?.$liveSearch ? '0' : '1px solid #bbbbbb'};
`

export const SearchIcon = styled(SearchOutlined)`
  position: absolute;
  font-size: 18px;
  top: 2px;
  right: 5px;
  cursor: pointer;
  padding: 5px;
`