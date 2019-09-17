import styled from "styled-components";

import colors from "../../utils/colors";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 0px ${colors.shadow};

  > img {
    width: 100%;
    height: 100px;
    margin-top: -15px;
  }

  p {
    color: ${colors.primary};
    padding: 10px 20px;
    font-weight: bold;
  }

  input {
    border: none;
    padding: 10px 20px;
    border-bottom: 1px solid ${colors.lightGray};

    &::placeholder {
      font-family: Quicksand, cursive, sans-serif;
    }
  }

  .send {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 10px 5px;
    cursor: pointer;

    h5 {
      color: ${colors.gray};
    }

    img {
      width: 18px;
      height: 18px;
    }
  }
`;
