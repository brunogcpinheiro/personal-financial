import styled from "styled-components";
import colors from "../../utils/colors";

export const Wrapper = styled.div`
  background: #fff;
  width: 100%;
  height: 20%;
  border-radius: 5px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 0px 0px #d5d5d5;

  p {
    font-weight: bold;
    text-transform: uppercase;
    color: #999;
  }

  img {
    &:last-child {
      cursor: pointer;
    }
  }
`;

export const AddWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 50px 20px;
  border-bottom: 1px solid #e1e1e1;

  .add {
    width: 100%;
    display: flex;
    align-items: center;

    .add-image {
      background: #fff;
      border-radius: 50%;
      height: 36px;
      width: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0px 1px 0px 0px #d5d5d5;

      &:hover {
        border-bottom: 1px solid ${colors.primary};
        color: #fff;
      }
    }

    p {
      margin-left: 10px;
      color: ${colors.primary};
      font-weight: bold;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
