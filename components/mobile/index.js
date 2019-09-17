import { Wrapper } from "./styles";

export default () => (
  <Wrapper>
    <img src="/static/mobile.svg" alt="Mobile" />
    <p>Add your mobile phone to be notificate!</p>
    <input type="text" placeholder="e.g +55 11 99999-9999" />
    <div className="send">
      <h5>Send</h5>
      <img src="/static/send.svg" alt="Send" />
    </div>
  </Wrapper>
);
