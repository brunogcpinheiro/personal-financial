import { Wrapper, List, ListItem } from "./styles";

export default () => (
  <Wrapper>
    <List>
      <ListItem>
        <img src="/static/home.svg" alt="Home" />
        <span>Home</span>
      </ListItem>
      <ListItem active>
        <img src="/static/deposit.svg" alt="Deposits" />
        <span>Deposits</span>
      </ListItem>
      <ListItem>
        <img src="/static/credit.svg" alt="Withdraws" />
        <span>Withdraws</span>
      </ListItem>
      <ListItem>
        <img src="/static/payment.svg" alt="Payments" />
        <span>Payments</span>
      </ListItem>
      <ListItem>
        <img src="/static/transfer.svg" alt="Transfers" />
        <span>Transfers</span>
      </ListItem>
    </List>
  </Wrapper>
);
