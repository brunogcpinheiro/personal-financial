import { Wrapper, AddWrapper } from "./styles";

export default () => (
  <>
    <Wrapper>
      <img src="/static/user.svg" alt="User" />
      <p>Bruno</p>
      <img src="/static/more.svg" alt="More" />
    </Wrapper>
    <AddWrapper>
      <div className="add">
        <div className="add-image">
          <img src="/static/add.svg" alt="Add" />
        </div>
        <p>New</p>
      </div>
    </AddWrapper>
  </>
);
