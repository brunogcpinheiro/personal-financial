import User from "../user";
import MenuItems from "../menuItems";
import Mobile from "../mobile";
import Settings from "../settings";

import { MainWrapper } from "./styles";

export default () => (
  <MainWrapper>
    <User />
    <MenuItems />
    <Mobile />
    <Settings />
  </MainWrapper>
);
