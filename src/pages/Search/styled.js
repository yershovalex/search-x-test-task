import styled from "styled-components";
import {Link} from "react-router-dom";

export const SearchPageHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  margin-left: 37px;
`;

export const SearchPageHeaderTitle = styled(Link)`
  color: #000;
  font-weight: bold;
  text-decoration: none;
  margin-right: 20px;
`;

export const SearchPageWrapper = styled.div`
  display: flex;
  width: 70vw;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;