import User from "../user";
import MenuItems from "../menuItems";
import Mobile from "../mobile";

import { MainWrapper } from "./styles";

export default () => (
  <MainWrapper>
    <User />
    <MenuItems />
    <Mobile />
    <div>settings</div>
  </MainWrapper>
);
