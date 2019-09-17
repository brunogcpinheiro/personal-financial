import styled from "styled-components";

import colors from "../../utils/colors";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    color: ${colors.gray};
    margin-left: 5px;
    font-weight: bold;
  }
`;
