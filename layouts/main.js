import React, { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";

import GlobalStyle from "../global";

import Menu from "../components/Menu";

const Container = styled.div`
  height: 100%;
  background-color: #f1f1f1;
  color: $foreground;
  display: grid;
  grid-template-columns: 1.5fr 4fr 2fr;
  grid-template-rows: 70px calc(100vh - 70px);
  grid-template-areas: "menu main sidebar";
  aside {
    grid-area: menu;
  }
  main {
    grid-area: main;
  }
  section {
    grid-area: sidebar;
  }
`;

export default props => (
  <Fragment>
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
    </div>
    <Container>
      <GlobalStyle />
      <Menu />
      <main>{props.children}</main>
      <div>sidebar</div>
    </Container>
  </Fragment>
);
