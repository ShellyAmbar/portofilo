import Main from "./navigation/main";
import { Link } from "react-router-dom";
import { Header, Navigation, Drawer, Content, Layout } from "react-mdl";
import React, { Component } from "react";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import "./App.css";

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);

class App extends Component {
  render() {
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <Layout>
          <Header className="header-color" title="Shelly Ambar" scroll>
            <Navigation>
              <Link style={{ fontSize: 20 }} to="/ShoppingCart">
                <Box m={1}>
                  <IconButton aria-label="cart" size="medium">
                    <StyledBadge badgeContent={0} color="primary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </Box>
              </Link>
              <Link style={{ fontSize: 20 }} to="/Home">
                Home
              </Link>

              <Link style={{ fontSize: 20 }} to="/Purchas">
                Purchas
              </Link>

              <Link style={{ fontSize: 20 }} to="/Shop">
                Shop
              </Link>
            </Navigation>
          </Header>
          <Drawer title="Android Projects">
            <Navigation>
              <Link to="/ChatUp">ChatUp</Link>
              <Link to="/Adopy">Adopy</Link>
              <Link to="/Tasker">Tasker</Link>
              <Link to="/SaveJack">Save Jack</Link>
              <Link to="/Picker">Picker</Link>
              <Link to="/OnePlaceNews">OnePlace News</Link>
              <Link to="/LectShares">LectShares</Link>
              <Link to="/Networkers">Networkers</Link>
            </Navigation>
          </Drawer>

          <Content>
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
