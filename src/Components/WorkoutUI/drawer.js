import React from "react";
import { NavLink } from "react-router-dom";
import { Drawer } from "flwww";
const DrawerComp = props => {
  return (
    <Drawer
      showDrawer={props.drawerIsVisible}
      toggleDrawer={props.toggleDrawer}
      style={{ overflow: "hidden" }}
    >
      <h3>NO PAIN NO GAIN APP</h3>
      <nav className="Drawer-Links-wrapper">
        <NavLink exact to="/workouts" activeClassName="active-links">
          WORKOUTS
        </NavLink>

        <NavLink exact to="/nutrition" activeClassName="active-links">
          NUTRITION
        </NavLink>
      </nav>
    </Drawer>
  );
};

export default DrawerComp;
