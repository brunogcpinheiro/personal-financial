import styled from "styled-components";
import colors from "../../utils/colors";

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 30px;
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  color: ${props => (props.active ? colors.black : colors.gray)};
  font-weight: bold;

  span {
    font-size: 0.8rem;
    margin-left: 5px;
  }
`;
