import styled from "styled-components";

import colors from "../../utils/colors";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  margin: 20px 0;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100px;
    margin-top: -15px;
  }

  p {
    color: ${colors.primary};
    padding: 10px 20px;
    font-weight: bold;
  }
`;
